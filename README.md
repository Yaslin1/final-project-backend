# final-project-backend
Backend for a versatile File Manager and Curriculum Developer application, leveraging Firestore for efficient data storage, Firebase Authentication for security, and Node.js/Express for API functionality.

# Firestore-Powered File Manager & Curriculum Developer Backend

This is the backend for a comprehensive File Manager and Curriculum Developer application. It utilizes Firestore as the database for efficient data storage and retrieval, while Firebase Authentication ensures robust security measures. The backend is powered by Node.js and Express, providing a reliable API for seamless communication between the frontend and the database.

## Features

- Firestore database integration for organized data storage.
- Firebase Authentication ensures secure user access.
- Node.js and Express API for seamless communication.
- Designed to support File Manager and Curriculum Developer frontends.

## Setup

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Configure Firestore settings in `config.js`.
4. Set up Firebase Authentication in your Firebase project.
5. Initiate the server using `npm start`.

## API Endpoints

- `GET /files`: Fetch a list of files.
- `POST /files`: Upload new files.
- `PATCH /files/:uid`: Update current files.
- `GET /agendas`: Retrieve agenda list.
- `POST /agendas`: Add new agenda topic.
- `PATCH /agendas/:docId`: Updates current agenda.

## Contributions

Contributions are appreciated! Follow these steps:

1. Fork the repository.
2. Create a feature/fix branch.
3. Implement your changes and commit.
4. Submit a pull request.

