

document.addEventListener('DOMContentLoaded', function(){
  Notification.requestPermission(function(Permission){

      var notification = new Notification("TSNsoft", 
      {
        body: 'Thank for clicking that button', 
        icon:'http://jagocoding.com/theme/New/img/logo.png',
        dir: 'auto'
      });

  });
});