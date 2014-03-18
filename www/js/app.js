var APP = {};
var MT = {};

APP.init = function(){

    $( "#slider" ).slider({
      value:20,
      min: 20,
      max: 240,
      step: 20,
      slide: function( event, ui ) {
        $( "#bpm" ).val( ui.value );
      }
    });
    $( "#bpm" ).val( $( "#slider" ).slider( "value" ) );


    $('#start').on('click', MT.play);
};

MT.play = function(){
    console.log(getPath());
    var sound = new Media(getPath() + 'sounds/PingHi.mp3',
        function(){ alert("dabuti"); }, 
        function(){ alert("fatal"); });
    sound.play();
    // $('#status').html("started");
    // var sounds = [0, 0, 0, 1];
    // var index = 0;
    // setInterval(function(){
    //     if (index >= sounds.length) index = 0;
    //     $("#audio" + sounds[index])[0].play();
    //     index++;
    // }, 60000 / $('#bpm').val());
};

$(function() {
  APP.init();
});

        function getPath() {
            var str = location.pathname;
            var i = str.lastIndexOf('/');
            return str.substring(0,i+1);
        }