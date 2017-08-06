jQuery(document).ready(function($){
  var colors = ['#ff0000', '#00ff00', '#0000ff', '#834e9f', '#87a401', '#f44f9b', '#049a7e', '#1ad12d', '#fdd945'];
  var numbers = [0,1,2,3,4,5,6,7,8];
  var i = 0;
  var randomNumberFromArrayWithoutRepeating = 0;
  
  //shuffling fuction used to randomize number array
  function shuffle(o) {
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
  };
  var random = shuffle(numbers);
  
  //navbar fuction
  $('.navbar-default .navbar-nav>li>a').hover(function(){
    
  	if(i <= 8){
      randomNumberFromArrayWithoutRepeating = i;
      i++;
    }
    if(i == 8){
      random = shuffle(numbers);
		i = 0;
    }
    
    var random_color = colors[random[randomNumberFromArrayWithoutRepeating]];
    
    $(this).css('color', random_color);
  	}, function(){
    $(this).css('color', '#000');//base color
  });
  //entry thumb function
   $('.entry-thumb').hover(function(){
     
     if(i <= 8){
    randomNumberFromArrayWithoutRepeating = i;
    i++;
      
    }
    if(i == 8){
      random = shuffle(numbers);
    	i = 0;
    }
    var random_color = colors[random[randomNumberFromArrayWithoutRepeating]];
    
    $(this).css("-webkit-box-shadow", '0 0 .5em' + random_color);
    $(this).css('-moz-box-shadow', '0 0 .5em ' + random_color);
    $(this).css('box-shadow', '0 0 .5em ' + random_color);
  	}, function(){
    $(this).css('-webkit-box-shadow', '0 0 0 ');
    $(this).css('-moz-box-shadow', '0 0 0');
    $(this).css('box-shadow', '0 0 0 ');
  });

});
