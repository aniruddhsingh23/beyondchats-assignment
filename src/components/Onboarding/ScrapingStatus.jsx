const ScrapingStatus = ({ status, pages }) => {
  return (
    <div className="mt-8 bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Scraping Status</h3>
      <p className="text-gray-600">{status}</p>
      {pages && (
        <ul className="mt-4 space-y-2">
          {pages.map((page, index) => (
            <li key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">{page.url}</span>
              <span
                className={`text-sm font-semibold ${
                  page.status === "Scraped" ? "text-green-600" : "text-yellow-600"
                }`}
              >
                {page.status}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ScrapingStatus;
