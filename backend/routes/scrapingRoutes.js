import express from 'express';
import scrapingController from '../controllers/scrapingController.js';

const { scrapeWebsiteData, getScrapingStatus } = scrapingController;

const router = express.Router();

router.post('/scrape', scrapeWebsiteData);
router.get('/status/:websiteId', getScrapingStatus);

export default router;
