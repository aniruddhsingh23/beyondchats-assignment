import axios from 'axios';
import * as cheerio from 'cheerio';
import Website from '../models/Website.js';
import ScrapedPage from '../models/ScrapedPage.js';

const scrapeWebsite = async (url) => {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  // Scrape meta description (if available)
  const metaDescription = $('meta[name="description"]').attr('content');

  // Scrape all pages (you can refine this logic as needed)
  const pages = [];
  $('a').each((i, element) => {
    const pageUrl = $(element).attr('href');
    if (pageUrl && pageUrl.startsWith('http')) {
      pages.push({ url: pageUrl, status: 'pending' });
    }
  });

  return { metaDescription, pages };
};

const scrapeWebsiteData = async (req, res) => {
  try {
    const { name, url, description } = req.body;

    // Check if the website already exists in the database
    const existingWebsite = await Website.findOne({ url });
    if (existingWebsite) {
      return res.status(400).json({ message: 'Website already exists!' });
    }

    // Create a new Website document
    const website = new Website({ name, url, description });
    await website.save();

    // Scrape the website and get pages
    const { metaDescription, pages } = await scrapeWebsite(url);

    // Update the website's description and pages
    website.description = metaDescription || website.description;
    website.pages = pages.map(page => ({ url: page.url, status: page.status }));
    website.scrapingStatus = 'Scraped';
    
    // Save the updated website document
    await website.save();

    // Create ScrapedPage entries for each page
    pages.forEach(async (page) => {
      const scrapedPage = new ScrapedPage({
        websiteId: website._id,
        url: page.url,
        status: page.status,
        data: [],
      });
      await scrapedPage.save();
    });

    res.status(200).json({ message: 'Website scraping started.', website });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getScrapingStatus = async (req, res) => {
  const { websiteId } = req.params;

  // Find the website by ID and populate the pages field
  const website = await Website.findById(websiteId).populate('pages');
  if (!website) {
    return res.status(404).json({ message: 'Website not found' });
  }

  // Return the website with its pages
  res.status(200).json(website);
};

export default { scrapeWebsiteData, getScrapingStatus };
