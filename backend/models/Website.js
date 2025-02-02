import mongoose from 'mongoose';

const WebsiteSchema = new mongoose.Schema({
  name: String,
  url: String,
  description: String,
  scrapingStatus: {
    type: String,
    default: 'Pending',
  },
  pages: [
    {
      url: String,
      status: { type: String, default: 'Pending' },
      data: [String],
    },
  ],
});

export default mongoose.model('Website', WebsiteSchema);
