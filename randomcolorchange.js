jQuery(document).ready(function($){

  $('class/id').hover(function(){
    var colors = ['#ff0000', '#00ff00', '#0000ff'];//those are hover color codes, add/change what you like
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    $(this).css('color', random_color);
  	}, function(){
      $(this).css('color', '#000');//base color
  });

   $('class/id').hover(function(){
    var colors = ['#ff0000', '#00ff00', '#0000ff'];//those are hover color codes, add/change what you like
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    $(this).css("-webkit-box-shadow", '0 0 .5em' + random_color);
    $(this).css('-moz-box-shadow', '0 0 .5em ' + random_color);
    $(this).css('box-shadow', '0 0 .5em ' + random_color);
  	}, function(){
    $(this).css('-webkit-box-shadow', '0 0 0 ');
    $(this).css('-moz-box-shadow', '0 0 0');
    $(this).css('box-shadow', '0 0 0 ');
  });

});