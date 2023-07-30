import { onRequest } from "firebase-functions/v2/https";
// const logger = require("firebase-functions/logger");
import express from "express";
import cors from "cors";
import { getFiles, addFiles, updateFiles } from "./src/bc-final.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/files", getFiles);
app.post("/files", addFiles);
app.patch("/files/:uid", updateFiles);

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
