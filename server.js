import express from "express";
import path from "path";

const app = express();

// Pour obtenir le chemin du répertoire actuel avec ES6
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
