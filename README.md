# InstrumentQualification

How to use: 
#Environment Setup: 
npm install electron react-router-dom @mui/material @emotion/react @emotion/styled formik yup axios redux react-redux electron-oauth2 java pdfkit socket.io cors pg body-parser

*** Download pdfbox.jar ***

#Run Application 
1. Database: Run PostgreSQL and execute schema.sql
2. Server: cd server && node server.js
3. Client cd client && npm start (for React), then node main.js (For Electron)

#Customize: 
Replace placeholders (E.g., OAuth Credentials, database config)
Expand components like InstrumentList.js or Home.js as needed. 

#Desktop Icon -> 


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
