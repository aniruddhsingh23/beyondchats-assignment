import mongoose from 'mongoose';

const ScrapedPageSchema = new mongoose.Schema({
  websiteId: mongoose.Schema.Types.ObjectId,
  url: String,
  status: { type: String, default: 'Pending' },
  data: [String],
});

export default mongoose.model('ScrapedPage', ScrapedPageSchema);
