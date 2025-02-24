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
desktop app setup 
cd client
    npm install electron react-router-dom @mui/material @emotion/react @emotion/styled formik yup axios redux react-redux electron-oauth2 java pdfkit
cd ../server
    npm install express cors pg body-parser socket.io
 
Set up PostgreSQL and run database/schema.sql.
        Replace placeholders (e.g., OAuth credentials in main.js, database config in server.js and traceability.js) with real values.

1. Build the React app:
       cd client
       npm run build
2.  Package the Electron app:
        npm run dist
            *This creates a distributable in client/dist/:

    Windows: A .exe or portable .exe.
    macOS: A .dmg.
    Linux: An .AppImage.

3.  Create a Desktop Icon
Windows:
Locate the generated .exe in client/dist/.
Right-click it, select “Create shortcut.”
Move the shortcut to your desktop and rename it (e.g., “Instrument Qualification”).

macOS:
Open the .dmg, drag the app to /Applications.
Drag it from /Applications to the Dock or create an alias on the desktop.

Linux:
Move the .AppImage to a desired location (e.g., ~/Apps).
Create a desktop shortcut using your DE’s tools (e.g., GNOME’s “Create Launcher”).

4. Launch the App
Double-click the desktop icon or executable to open the app. It will display the UI starting at the Login page, and you can navigate to the Dashboard and other components.

_________________________________________________________________________________________

#Alternative way to Run Application 
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

Notes: 
Notes on Running the App
Server Dependency: The app assumes the backend (server/server.js) is running on localhost:5000. For a standalone app:
Bundle the server into the Electron app (e.g., run it as a child process in main.js), or
Deploy the server separately and update API URLs in api.js to point to it.
UI Expansion: The current UI is minimal. To make it more robust:
Add a navigation bar in App.js.
Expand Dashboard.js with tables or charts (e.g., using @mui/x-data-grid).
Integrate QualificationForm.js and ReviewPanel.js into the workflow.
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


Example of adding modifications such as navigation:
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>Instrument Qualification</Typography>
          <Button color="inherit" component={Link} to="/">Login</Button>
          <Button color="inherit" component={Link} to="/home">Home</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

