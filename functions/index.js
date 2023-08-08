import { onRequest } from "firebase-functions/v2/https";
// const logger = require("firebase-functions/logger");
import express from "express";
import cors from "cors";
import { getFiles, addFiles, updateFiles, updateAgenda, getAgendas, addAgenda } from "./src/bc-final.js";

const app = express();
// Add your frontend url to CORS
const whitelist = ['https://lms-web-yc.web.app', 'http://localhost:3000'] // URL allowed to access in app
const corsOptions = {
  origin: function (origin, callback) { //Function called when request comes in.
    if (whitelist.indexOf(origin) !== -1) { //checking if in whitelist
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS')) //if not the links in white list then it doesn't run
    }
  }
}
app.use(cors(corsOptions));
app.use(express.json());

app.get("/files", getFiles);
app.post("/files", addFiles);
app.patch("/files/:uid", updateFiles);
app.get("/agendas", getAgendas);
app.post("/agendas", addAgenda);
app.patch("/agendas/:docId", updateAgenda);

export const api = onRequest(app);
/**
 * Import function triggers from their respective submodules:
 *
 * 
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
