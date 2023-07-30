import { FieldValue } from "firebase-admin/firestore";
import db from "./dbConnection.js";

const coll = db.collection("files");

export async function getFiles(req, res) {
    try {
        // const { uid } = req.params;
        // const files = await coll.where('uid', '==', uid).get();
        //get all task by user;
        const files = await coll.get();
        //arranges task in an array:
        const filesArray = files.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.send(filesArray);
    } catch (err) {
        res.status(500).send(err);
    }

}

export async function addFiles(req, res) {
    try {
        const { uid } = req.body;
        if (!uid) {
            res.status(400).send({ success: false, message: "Not a valid request" });
            return;
        }
        const newfiles = {
            ...req.body,
            createdAt: FieldValue.serverTimestamp(),
        }
        await coll.add(newfiles);
        getfiles(req, res);

    } catch (err) {
        res.status(500).send(err);
    }

}

export async function updateFiles(req, res) {
    try {
        const { uid } = req.params;
        const updatedInfo = req.body;
        await coll.doc(uid).update(updatedInfo);
        getFiles(req, res);
    } catch (err) {
        res.status(500).send(err);
    }
}

