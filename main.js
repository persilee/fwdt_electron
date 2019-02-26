const {
    app,
    BrowserWindow,
    Menu
} = require('electron')

let win

const createWindow = () => {
    win = new BrowserWindow({
        // fullscreen : true,
        skipTaskbar: true,
        show: false,
        alwaysOnTop: true,
        fullscreenable: true
    })
    win.loadFile(`${__dirname}/notice_board/index.html`)
    win.maximize()
    win.once('ready-to-show', () => {
        win.show()
    })
}

// let template = [{
//     label: "Application",
//     submenu: [
//         {
//             label: "Fullscreen",
//             accelerator: "F12",
//             click: function () {
//                 win.setFullScreen(true)             
//             }
//         },
//         {
//             label: "Quit",
//             accelerator: "Command+Q",
//             click: function () {
//                 app.quit()
//             }
//         }
//     ]
// }];

// //注册菜单 
// Menu.setApplicationMenu(Menu.buildFromTemplate(template));

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', () => {
    if(win === null){
        createWindow()
    }
})