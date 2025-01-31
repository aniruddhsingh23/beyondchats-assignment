import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function ScrapingStatus() {
  const [selectedPage, setSelectedPage] = useState(null);
  const [webpages] = useState([
    { url: 'https://example.com', status: 'scraped', chunks: ['Header Content', 'Product Section'] },
    { url: 'https://example.com/about', status: 'scraping', chunks: [] },
    { url: 'https://example.com/contact', status: 'pending', chunks: [] }
  ]);

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Website Scraping Progress</h3>
      <div className="space-y-4">
        {webpages.map((page, index) => (
          <div 
            key={index}
            className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
            onClick={() => page.status === 'scraped' && setSelectedPage(page)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`h-3 w-3 rounded-full ${
                  page.status === 'scraped' ? 'bg-green-500' :
                  page.status === 'scraping' ? 'bg-yellow-500 animate-pulse' : 'bg-gray-400'
                }`} />
                <span className="text-sm truncate">{page.url}</span>
              </div>
              <span className="text-sm text-gray-500">
                {page.status.charAt(0).toUpperCase() + page.status.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedPage} onClose={() => setSelectedPage(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-2xl bg-white rounded-lg p-6">
            <Dialog.Title className="text-lg font-semibold mb-4">
              Scraped Content from {selectedPage?.url}
            </Dialog.Title>
            <div className="space-y-3">
              {selectedPage?.chunks.map((chunk, index) => (
                <div key={index} className="p-3 border rounded-md flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  {chunk}
                </div>
              ))}
            </div>
            <button
              onClick={() => setSelectedPage(null)}
              className="mt-4 secondary-btn"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}