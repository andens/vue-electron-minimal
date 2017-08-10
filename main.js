'use strict';

// app controls application life
// BrowserWindow creates native browser window
const {app, BrowserWindow} = require('electron');
const spawn = require('child_process').spawn;
const path = require('path');
require('electron-reload')(path.join(__dirname, 'dist'));

// Detach from shell to run independently. Also it sets a proper working dir.
if (process.env.detached === undefined) {
  // argv[0] is the command to run. We ignore argument because we run with
  // current working directory set to the app path.
  const child = spawn(process.argv[0], ["."], {
    cwd: __dirname,
    env: {
      detached: '' // Prevent child from creating new children
    },
    stdio: 'ignore',
    detached: true,
  });

  // Don't wait for child to finish
  child.unref();

  // Quit parent process
  app.quit();
}
// This else makes only the child process create a window. Despite calling app.quit
// in the main process code the window is still created but immediately closed,
// causing a brief flash.
else {
  // Keep a global reference of the window object. If we don't, the window will
  // be automatically closed when the JS object is garbage collected.
  let main_window = null;

  // When Electron is ready, create application window
  app.on('ready', function() {
    // Create main window
    // Other options available at:
    // http://electron.atom.io/docs/latest/api/browser-window/#new-browserwindow-options
    main_window = new BrowserWindow({
      title: "Vue App",
      width: 1280,
      height: 720,
    });
    main_window.setMenuBarVisibility(false);

    // Target HTML file which will be opened in window. This is essentially the
    // actual application to run.
    const url = require('url');
    main_window.loadURL(url.format({
      pathname: path.join(__dirname, "dist", "index.html"),
      protocol: "file:",
      slashes: true
    }));

    // Uncomment to use Chrome developer tools
    //main_window.webContents.openDevTools({detach: true});

    // Cleanup when window is closed
    main_window.on('closed', function() {
      // Dereference
      main_window = null;
    });
  });

  // Quit when all windows are closed
  app.on('window-all-closed', function() {
    app.quit();
  });
}
