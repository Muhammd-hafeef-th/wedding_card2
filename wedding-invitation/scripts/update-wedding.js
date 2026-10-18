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
  venue: "Wasava Cliff House, Kannur",
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
  name: "Wasava Cliff House",
  address: "Kannur, Kerala",
  googleMapLink: "https://maps.google.com/?q=Wasava+Cliff+House+Kannur",
  nikkahVenue: { name: "", address: "", googleMapLink: "", googleMapEmbed: "" },
  brideVenue: { name: "", address: "", googleMapLink: "", googleMapEmbed: "" },
  groomVenue: { name: "", address: "", googleMapLink: "", googleMapEmbed: "" },
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

    await mongoose.disconnect();
    console.log("Done.");
  } catch (err) {
    console.error("Error updating database:", err);
    process.exit(1);
  }
}

run();
