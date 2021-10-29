var push = require('web-push');

let vapidKeys = { 
    publicKey:
    'BMcBW3L9LaDYT8WxfviTUthtsZoM4hWtwJVMWGF7VRi2A9203CqqQrKAnEqfTHIEfZDADEdLVPakH4sexVSRS_Y',
    privateKey: 'XJWDqC0uoDazYbHu7I0dS6Ghp0w6gFSvKFUu9-GTnDE' 
}

push.setVapidDetails('mailto:clement.poupeney.monnin@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test test test')