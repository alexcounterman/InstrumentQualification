# InstrumentQualification

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
