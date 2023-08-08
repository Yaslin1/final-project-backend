import { FieldValue } from "firebase-admin/firestore";
import db from "./dbConnection.js"; //firebase connection

const coll = db.collection("files");
const agendaCol = db.collection("agendas");

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
        const { uid } = req.params; //parameter need to go to this route
        const updatedInfo = req.body; //update that was made
        await coll.doc(uid).update(updatedInfo); // Updates it based off the uid
        getFiles(req, res); //get the lastest list of all files
    } catch (err) {
        res.status(500).send(err);
    }
}

export async function getAgendas(req, res) {
    try {
        const agendas = await agendaCol.get();
        //arranges task in an array:
        const filesArray = agendas.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.send(filesArray);
    } catch (err) {
        res.status(500).send(err);
    }

}

export async function updateAgenda(req, res) {
    try {
        const { docId } = req.params; //which agenda to update
        const updatedInfo = req.body; //request change with details in agenda they want to update
        await agendaCol.doc(docId).update(updatedInfo); //locating name of collection based off id and updating 

        res.send({ success: true })
    } catch (err) {
        res.status(500).send(err);
    }
}

export async function addAgenda(req, res) {
    try {

        const newfiles = { //creating object, make a copy, adding it to CreateAt with timestamp
            ...req.body,
            createdAt: FieldValue.serverTimestamp(),
        }
        await agendaCol.add(newfiles); // referencing agendaCol and adding a new file

        res.send({ success: true })

    } catch (err) {
        res.status(500).send(err);
    }

}
