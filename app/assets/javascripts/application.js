// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require ace-rails-ap
//= require ace/theme-tomorrow_night_blue
//= require ace/mode-javascript
//= require jquery
//= require jquery_ujs
//= require underscore
//= require gmaps/google
//= require_tree .

$(document).ready(function(){
// flash messages disappear after 10 seconds
setTimeout(function(){
  $('#flash_fail').fadeOut('slow');
},4000);
setTimeout(function(){
  $('#flash_success').fadeOut('slow');
},4000);
setTimeout(function(){
  $('#flash_notice').fadeOut('slow');
},4000);
setTimeout(function(){
  $('#flash_awesome').fadeOut('slow');
},4000);
setTimeout(function(){
  $('#flash_miss').fadeOut('slow');
},4000);
//hint button opens on click
  $('#hint-btn').on('click', function(){
      $('#hint').show();
      $('#content-box').scrollTop(600);
   });
//signin and signout prompts toggle on clicks
   $('#sgnin-prompt').on('click', function(){
      $(this).hide();
      $('#sgnup-prompt').show();
      $('#signup').hide();
      $('#signin').show();
   });

   $('#sgnup-prompt').on('click', function(){
      $(this).hide();
      $('#sgnin-prompt').show();
      $('#signin').hide();
      $('#signup').show();
   });

   // jellyfish bounce animation
   $("#jelly").effect("bounce", {time:4, distance:250}, 5500);

    // auto scroll courses#show description
   $('#speech').delay(5400);
   $('#speech').animate({
      scrollTop: 1050}, 36000);

   //course index hover dropdown
   $(".courseHolder").on('click', function(){
      $(".si-dropdown").show(2000);
   });

//hides the completed link on load, then shows if the editor value equals the decoded value
//of the answer. When the answer is correct the editor gets locked.
   $('#compLink').hide();
   if(editor){
      editor.getSession().on('change', function () {
        $('#content').val(editor.getSession().getValue().trim());
        if(editor.getValue() == atob(document.getElementById('answer').innerHTML)){
          $('#compLink').show();
          editor.setReadOnly(true);
        }
      });
      $('#content').val(editor.getSession().getValue().trim());
   }

});

