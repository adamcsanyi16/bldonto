require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { diakok, tanarok } = require("./adatok");
const mongoose = require("mongoose");
const Mancity = require("./models/Mancity");
const Inter = require("./models/Inter");

const PORT = process.env.PORT || 3500;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.get("/", (req, res) => {
  try {
    res.status(200).json({ msg: "Bajnokok Ligája" });
  } catch (error) {
    res.status(500).json({ msg: "Valami hiba történt!" });
  }
});

app.get("/mancity", async (req, res) => {
  try {
    const city = await Mancity.find({});
    res.status(200).json({ msg: city });
  } catch (error) {
    res.status(500).json({ msg: "Valami hiba történt!" });
  }
});

app.post("/mancity", async (req, res) => {
  try {
    const { nev, kor, lab, poszt, kep } = req.body;
    console.log(req.body);
    const ujJatekosm = new Mancity({
      nev,
      kor,
      lab,
      poszt,
      kep,
    });
    console.log(ujJatekosm);
    await ujJatekosm.save();
    res.status(201).json({ msg: "Sikeres játékos létrehozás!" });
  } catch (error) {
    res.status(500).json({ msg: "Valami hiba történt!" });
  }
});

app.put("/mancity", async (req, res) => {
  try {
    const { paramId, nev, kor, lab, poszt, kep } = req.body;
    console.log(req.body);
    await Mancity.findOneAndUpdate(
      { _id: paramId },
      { nev, kor, lab, poszt, kep },
      { new: true }
    );
    res.status(201).json({ msg: "Sikeres játékos módosítás!" });
  } catch (error) {
    res.status(500).json({ msg: "Valami hiba történt!" });
  }
});

app.delete("/mancity", async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const toroltJatekos = await Mancity.findOneAndDelete({ _id: body.id });
    console.log(toroltJatekos);
    res.status(200).json({ msg: "Sikeres játékos törlés!" });
  } catch (error) {
    res.status(500).json({ msg: "Valami hiba történt!" });
  }
});

app.get("/inter", async (req, res) => {
  try {
    const inter = await Inter.find({});
    res.status(200).json({ msg: inter });
  } catch (error) {
    res.status(500).json({ msg: "Valami hiba történt!" });
  }
});

app.post("/inter", async (req, res) => {
  try {
    const { nev, kor, lab, poszt, kep } = req.body;
    console.log(req.body);
    const ujJatekosi = new Inter({
      nev,
      kor,
      lab,
      poszt,
      kep,
    });
    console.log(ujJatekosi);
    await ujJatekosi.save();
    res.status(201).json({ msg: "Sikeres játékos létrehozás!" });
  } catch (error) {
    res.status(500).json({ msg: "Valami hiba történt!" });
  }
});

app.delete("/inter", async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const toroltJatekos = await Inter.findOneAndDelete({ _id: body.id });
    console.log(toroltJatekos);
    res.status(200).json({ msg: "Sikeres játékos törlés!" });
  } catch (error) {
    res.status(500).json({ msg: "Valami hiba történt!" });
  }
});

//adatbázis
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Sikeres adatbázis csatlakozás!"))
  .catch(() => console.log(error.message));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
