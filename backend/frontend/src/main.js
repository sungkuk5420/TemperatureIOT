import Vue from 'vue'
import Main from './components/Main.vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify);
Vue.component('Main', Main);
var app = undefined;
app = new Vue({
  el: '#app',
  render: h => h(Main)
})

document.addEventListener('DOMContentLoaded', function() {
  (function($) {

    var resizeTimer; // Set resizeTimer to empty so it resets on page load

    function resizeFunction() {
      // Stuff that should happen on resize
      var $window = $(window);
      var $bgDiv = $('.backgroundDiv');

      // console.log($window.height());
      // console.log($window.width());

      if(($window.height() / $window.width()) < 0.58){
        $bgDiv.removeClass('widthMode').addClass('heightMode');
      }else{
        $bgDiv.removeClass('heightMode').addClass('widthMode');
      }
    };

    // On resize, run the function and reset the timeout
    // 250 is the delay in milliseconds. Change as you see fit.
    $(window).resize(function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resizeFunction, 250);
    });

    setTimeout(resizeFunction, 100);

  })(jQuery);
});

