// scripts/update-wedding.js
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

// Read .env.local
const envFile = fs.readFileSync(path.join(__dirname, "../.env.local"), "utf8");
let mongoUri = "";
envFile.split("\n").forEach((line) => {
  if (line.startsWith("MONGODB_URI=")) {
    mongoUri = line.replace("MONGODB_URI=", "").trim();
  }
});

if (!mongoUri) {
  console.error("No MONGODB_URI found in .env.local");
  process.exit(1);
}

const weddingUpdate = {
  brideFirstName: "Shifa",
  brideLastName: "",
  groomFirstName: "Ajmal",
  groomLastName: "",
  date: "2026-11-12",
  time: "05:00 PM",
  nikkahDate: "",
  nikkahTime: "",
  venue: "Kannur, Kerala",
  subtitle: "Two souls, one destiny",
  invitationText: "Together with their families, we joyfully invite you to celebrate the union of",
  brideMotherName: "Suhra KR",
  brideFatherName: "Mamu P",
  brideMaternalGrandparents: "Khadheeja & Ummer (late)",
  bridePaternalGrandparents: "Ayisha & Memi",
  brideSiblings: ["Shana", "Shammas", "Rithas", "Shabas"],
  brideNieces: ["Laiha", "Liba"],
  groomMotherName: "Thahira RM",
  groomFatherName: "Ahammedkutty OM",
  groomMaternalGrandparents: "",
  groomPaternalGrandparents: "",
  groomSiblings: ["Thanveera", "Thabsheera"],
  groomNieces: ["Amina", "Hanna", "Muhammed"],
};

const venueUpdate = {
  name: "Groom & Bride Residence",
  address: "Kannur, Kerala",
  googleMapLink: "",
  nikkahVenue: { name: "", address: "", googleMapLink: "", googleMapEmbed: "" },
  brideVenue: { name: "Bride's Residence", address: "Paisayi, Irikkur", googleMapLink: "https://maps.app.goo.gl/f7qoaw8UCJQXjxQ56", googleMapEmbed: "" },
  groomVenue: { name: "Groom's Residence", address: "Chakkarakkal, Kannur", googleMapLink: "https://maps.app.goo.gl/j33aP8861WeXgY2n6", googleMapEmbed: "" },
};

async function run() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB.");

    const db = mongoose.connection.db;

    // Update wedding collection
    const weddingRes = await db.collection("weddings").findOneAndUpdate(
      {},
      { $set: weddingUpdate },
      { returnDocument: "after", upsert: true }
    );
    console.log("Wedding collection updated successfully!");

    // Update venue collection
    const venueRes = await db.collection("venues").findOneAndUpdate(
      {},
      { $set: venueUpdate },
      { returnDocument: "after", upsert: true }
    );
    console.log("Venue collection updated successfully!");

    // Clean up any remaining "wasava" mentions across all collections
    const collections = await db.listCollections().toArray();
    for (const colInfo of collections) {
      const col = db.collection(colInfo.name);
      if (colInfo.name === "weddings") {
        await col.updateMany(
          { venue: { $regex: /wasava/i } },
          { $set: { venue: "Kannur, Kerala" } }
        );
      }
      if (colInfo.name === "venues") {
        await col.updateMany(
          { name: { $regex: /wasava/i } },
          { $set: { name: "Groom & Bride Residence" } }
        );
        await col.updateMany(
          { address: { $regex: /wasava/i } },
          { $set: { address: "Kannur, Kerala" } }
        );
        await col.updateMany(
          { googleMapLink: { $regex: /wasava/i } },
          { $set: { googleMapLink: "" } }
        );
      }
    }
    console.log("Database checked and cleared of any 'wasava' references.");

    await mongoose.disconnect();
    console.log("Done.");
  } catch (err) {
    console.error("Error updating database:", err);
    process.exit(1);
  }
}

run();
