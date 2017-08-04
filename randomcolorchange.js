jQuery(document).ready(function($){

  $('class/id').hover(function(){
    var colors = ['#ff0000', '#00ff00', '#0000ff'];//those are hover color codes, add/change what you like
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    $(this).css('color', random_color);
  	}, function(){
      $(this).css('color', '#000');//base color
  });
  
});