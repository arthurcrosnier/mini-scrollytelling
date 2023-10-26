const express = require("express");
const path = require("path");

const app = express();

// Servez les fichiers statiques depuis le dossier dist
app.use(express.static(path.join(__dirname, "dist")));

// Renvoyez l'index.html pour toutes les requêtes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
