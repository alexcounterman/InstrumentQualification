const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const electronOauth2 = require('electron-oauth2');

const config = {
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  authorizationUrl: 'https://provider.com/oauth/authorize',
  tokenUrl: 'https://provider.com/oauth/token',
  redirectUri: 'http://localhost/callback',
};

const oauth2 = electronOauth2(config, {
  alwaysOnTop: true,
  autoHideMenuBar: true,
  webPreferences: { nodeIntegration: false },
});

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    },
  });
  
  // Load the built React app in production
  win.loadFile(path.join(__dirname, 'build', 'index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

ipcMain.on('login', async (event) => {
  try {
    const token = await oauth2.getAccessToken({});
    event.reply('login-success', token);
  } catch (error) {
    event.reply('login-error', error);
  }
});
