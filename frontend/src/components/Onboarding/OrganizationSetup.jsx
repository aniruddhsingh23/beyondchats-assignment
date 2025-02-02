import { useState } from "react";
import ScrapingStatus from "./ScrapingStatus";

const OrganizationSetup = () => {
  const [companyName, setCompanyName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [description, setDescription] = useState("");
  const [scrapingStatus, setScrapingStatus] = useState({});
  const [isTraining, setIsTraining] = useState(false);

  const scrapeWebsite = async (url) => {
    setScrapingStatus({ status: "Scraping in progress..." });
    setTimeout(() => {
      setScrapingStatus({
        status: "Scraping complete!",
        pages: [
          { url: `${url}/home`, status: "Scraped" },
          { url: `${url}/about`, status: "Pending" },
          { url: `${url}/contact`, status: "Scraped" },
        ],
      });
    }, 3000);
  };

  const trainChatbot = async () => {
    setIsTraining(true);
    setTimeout(() => {
      setIsTraining(false);
      alert("Chatbot training complete!");
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await scrapeWebsite(websiteUrl);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Setup Your Organization</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="url"
            placeholder="Website URL"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Company Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Scrape Website
          </button>
        </form>
      </div>

      {scrapingStatus.status && (
        <ScrapingStatus status={scrapingStatus.status} pages={scrapingStatus.pages} />
      )}
      {scrapingStatus.status && !isTraining && (
        <button
          onClick={trainChatbot}
          disabled={isTraining}
          className="w-full bg-green-600 text-white p-3 rounded-lg mt-4 hover:bg-green-700 transition duration-300"
        >
          {isTraining ? "Training..." : "Train Chatbot"}
        </button>
      )}
    </div>
  );
};

export default OrganizationSetup;
