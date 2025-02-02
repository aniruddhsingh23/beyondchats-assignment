import axios from 'axios';
import cheerio from 'cheerio';

const scrapeWebsite = async (websiteUrl) => {
  try {
    const { data } = await axios.get(websiteUrl);
    const $ = cheerio.load(data);
    
    const metaDescription = $('meta[name="description"]').attr('content') || 'No description available';
    const pages = [];
    
    // Add other page extraction logic here 
    $('a').each((index, element) => {
      const href = $(element).attr('href');
      if (href && href.startsWith(websiteUrl)) {
        pages.push({ url: href, status: 'Pending' });
      }
    });

    return { metaDescription, pages };
  } catch (err) {
    console.error('Error scraping website:', err);
    return null;
  }
};

export default scrapeWebsite;
