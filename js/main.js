var $target = $('.wrapper');
inView('.spacing').on('enter', function(el){
  var color = $(el).attr('data-bg-enter');
  $target.css('background-color', color );
});
inView('.spacing').on('exit', function(el){
  var color = $(el).attr('data-bg-exit');
  $target.css('background-color', color );
});




inView('.bruh').on('enter', el => {
  el.style.opacity = 1;
  el.style.transform = "translateY(0%)";
});
inView('.bruh').on('exit', el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(-200%)";
});
