var APP = {};

APP.init = function(){
    setInterval(function(){
        $("#audio")[0].play();
    }, 1000);
};

$(function() {
  APP.init();
});