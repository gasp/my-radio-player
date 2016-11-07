const {Menu} = require('electron')

// look at accelerator
// https://github.com/electron/electron/blob/master/docs/api/accelerator.md#available-key-codes
const template = [
  {
    label: 'Playlist',
    submenu: [
      {
        label: 'Play',
        accelerator: 'CmdOrCtrl+P',
        click: function (item, focusedWindow) {
          console.log('play');
        }
      },
      {
        label: 'Next',
        accelerator: 'MediaNextTrack',
        click: function (item, focusedWindow) {
          console.log('next');
        }
      },
      {
        label: 'Pause',
        accelerator: 'Space',
        click: function (item, focusedWindow) {
          console.log('space');
        }
      },
      {
        role: 'resetzoom'
      },
      {
        type: 'separator'
      },
      {
        role: 'zoomin'
      },
      {
        role: 'zoomout'
      },
      {
        type: 'separator'
      },
      {
        role: 'togglefullscreen'
      }
    ]
  },
  {
    role: 'window',
    submenu: [
      {
        role: 'minimize'
      },
      {
        role: 'close'
      }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More ' + process.platform,
        click () {
          require('electron').shell.openExternal('http://electron.atom.io');
        }
      }
    ]
  }
];

if (process.platform === 'darwin') {
  template.unshift({
    label: 'Radio',
    submenu: [
      {
        role: 'about'
      },
      {
        type: 'separator'
      },
      {
        role: 'services',
        submenu: []
      },
      {
        type: 'separator'
      },
      {
        role: 'hide'
      },
      {
        role: 'hideothers'
      },
      {
        role: 'unhide'
      },
      {
        type: 'separator'
      },
      {
        role: 'quit'
      }
    ]
  });
}

module.exports = function () {
  setTimeout(function () {
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  }, 1000)
};
