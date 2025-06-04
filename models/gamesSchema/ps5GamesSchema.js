import mongoose from "mongoose";

const ps5gameSchema = new mongoose.Schema({
  game_id: Number,
  base_name: String,            // 👈 "GTA 5"
  full_name: String,            // 👈 "GTA 5 (PS4 Edition)"
  platform: String,             // 👈 "PS4", "PS5", "XBOX ONE", etc.
  edition: String,              // 👈 "PS4 Edition"
  price_inr: Number,
  image_link: String
});

const Ps5GameSchema = mongoose.model("Ps5Game", ps5gameSchema);
export default Ps5GameSchema;
