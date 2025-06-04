import mongoose from "mongoose";

const xboxOnegameSchema = new mongoose.Schema({
  game_id: Number,
  base_name: String,            // 👈 "GTA 5"
  full_name: String,            // 👈 "GTA 5 (PS4 Edition)"
  platform: String,             // 👈 "PS4", "PS5", "XBOX ONE", etc.
  edition: String,              // 👈 "PS4 Edition"
  price_inr: Number,
  image_link: String
});

const XboxOneGameSchema  = mongoose.model("XboxOneGame", xboxOnegameSchema);
export default XboxOneGameSchema;
