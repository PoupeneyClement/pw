self.addEventListener('push', () =>{
    self.ServiceWorkerRegistration.sendNotification('test test test', {});
});
