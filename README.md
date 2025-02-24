# InstrumentQualification

How to use: 
_________________________________________________________________________________________
#Environment Setup: 

cd client
    npm install electron react-router-dom @mui/material @emotion/react @emotion/styled formik yup axios redux react-redux electron-oauth2 java pdfkit socket.io cors pg body-parser
cd ../server
    npm install express cors pg body-parser socket.io

*** Download pdfbox.jar ***
_________________________________________________________________________________________
#Run Application 
1. Database: Run PostgreSQL and execute schema.sql
2. Server: cd server && node server.js
3. Client cd client && npm start (for React), then node main.js (For Electron)
__________________________________________________________________________________________
#Customize: 
Replace placeholders (E.g., OAuth Credentials, database config)
Expand components like InstrumentList.js or Home.js as needed. 
__________________________________________________________________________________________
#Desktop Icon -> 

__________________________________________________________________________________________
App structure: 
my-instrument-qualification-app/
├── client/                  # Electron/React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.js
│   │   │   ├── InstrumentList.js
│   │   │   ├── QualificationForm.js
│   │   │   ├── ReauthDialog.js
│   │   │   └── ReviewPanel.js
│   │   ├── pages/
│   │   │   └── Login.js
│   │   │   └── Home.js
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── fileParser.js
│   │   │   ├── report.js
│   │   │   ├── traceability.js
│   │   │   └── workflow.js
│   │   ├── utils/
│   │   │   └── errorHandler.js
│   │   ├── App.js
│   │   └── index.js
│   ├── main.js             # Electron main process
│   └── preload.js          # Placeholder (not detailed here)
├── server/                 # Node.js backend
│   └── server.js
└── database/               # SQL schemas
    └── schema.sql
__________________________________________________________________________________________

FAQ:
1. Is There a UI for This?
Yes, the code provided includes a user interface (UI) built with React and Material-UI (MUI), which is bundled into an Electron desktop application. The UI components include:

Login Page: A simple screen with an SSO button (Login.js).
Dashboard: An overview of instruments (Dashboard.js and InstrumentList.js).
Qualification Form: A form for entering qualification data with validation (QualificationForm.js).
Review Panel: A panel for reviewing and signing documents (ReviewPanel.js and ReauthDialog.js).
These components provide a basic but functional UI. However, it’s a starting point—you as the user are going to want to expand it (e.g., adding more detailed dashboards, tables, or wizards) based on your specific needs.

2. Does That Run When I Run the Client?
Yes, the UI is part of the client application and will run when you launch the Electron app. Here’s how it works:

React App: The React code (in client/src/) defines the UI and logic.
Electron: The main.js file wraps the React app into a desktop window.
When you run the client, Electron loads the React app (served at http://localhost:3000 by default) into a desktop window, giving you a standalone desktop experience.
However, running the client involves two steps in development mode:

Starting the React development server (npm start in the client/ directory).
Launching Electron (node main.js in the client/ directory).
In production, you’d build the React app and package it with Electron into a single executable file, eliminating the need for these separate steps.

3. I Want to Just Use a Desktop Icon and Open It
To achieve this, you need to package the Electron app into a standalone executable that can be launched with a desktop icon. (Built as secondary part of use case) 

