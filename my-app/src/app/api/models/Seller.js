import { Schema, model, models } from "mongoose";

const sellerProfileSchema = new Schema({
  sellerName: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  country: String,
  city: String,
  address: String,
  storeName: { type: String, required: true },
  description: String,
  averageRating: Number,
  totalRatings: Number,
  createdAt: { type: Date, default: Date.now },
  lastUpdated: { type: Date, default: Date.now },
});

const SellerProfile =
  models.sellerProfileSchema || model("SellerProfile", sellerProfileSchema);

export default SellerProfile;
