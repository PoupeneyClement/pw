var push = require('web-push');

let vapidKeys = { 
    publicKey:
    'BMcBW3L9LaDYT8WxfviTUthtsZoM4hWtwJVMWGF7VRi2A9203CqqQrKAnEqfTHIEfZDADEdLVPakH4sexVSRS_Y',
    privateKey: 'XJWDqC0uoDazYbHu7I0dS6Ghp0w6gFSvKFUu9-GTnDE' 
}

push.setVapidDetails('mailto:clement.poupeney.monnin@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {endpoint:
    "https://fcm.googleapis.com/fcm/send/cn1JD__DAJ4:APA91bEeZzPkRP-Nlq8N-IZEqSono5cniZD4f--SpQ3-7eC7aSnNn5lxsB6kiRdD_RQy9cNSIe70PRmSjLUQABJgJ1W436EnLRvX4aSw_XbQIIeY7uCULcODxlPR6zmahGUsFKLYRl_s",
    expirationTime: null,
    keys: {p256dh:"BGLEL7rz2VofzHHoplk3ghe506hg0RbNVhUXOeCs7mpejSQZjan41kYIz_P7RRn7E-hc-Cu7WeOisVrq4V-Oh3w",
    auth: "fx5amC1c7INMbsqLuB-BtA"}}

push.sendNotification(sub, 'test test test')