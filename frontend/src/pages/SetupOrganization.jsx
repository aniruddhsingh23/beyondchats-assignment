import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrapingStatus from '../components/Onboarding/ScrapingStatus';
import { useNavigate } from "react-router-dom"; 

export default function SetupOrganization() {
  const [formData, setFormData] = useState({
    companyName: '',
    websiteUrl: '',
    description: ''
  });

  const handleAutoFetch = async () => {

    await new Promise(resolve => setTimeout(resolve, 1000));
    setFormData(prev => ({
      ...prev,
      description: 'Automatically fetched meta description from website...'
    }));
  };

  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <div className="space-y-6">
        <input
          type="text"
          placeholder="Company Name"
          className="input-field"
          value={formData.companyName}
          onChange={(e) => setFormData({...formData, companyName: e.target.value})}
        />
        <div className="flex gap-4">
          <input
            type="url"
            placeholder="Website URL"
            className="input-field flex-1"
            value={formData.websiteUrl}
            onChange={(e) => setFormData({...formData, websiteUrl: e.target.value})}
          />
          <button
            onClick={handleAutoFetch}
            className="secondary-btn"
          >
            Auto-fetch
          </button>
        </div>
        <textarea
          placeholder="Company Description"
          rows="4"
          className="input-field"
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
        />
      </div>

      <ScrapingStatus />
      
      <div className="mt-8 flex justify-end">
        <button
          className="primary-btn"
          onClick={() => navigate("/integration")}
        >
          Continue
        </button>
      </div>
    </motion.div>
  );
}