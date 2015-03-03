//about us
(function(){

  var slideshow = document.getElementById('slideshow'),
      imgs = slideshow.getElementsByTagName('img'),
      activeClass = 'is-active',
      count = 0,
      timer,
      previous;

  function next(){
    previous = count > 0 ? count - 1 : 0;
    imgs[ previous ].className = imgs[ previous ].className.replace(/\bis\-active\b/i, '' );
    
    if( count < imgs.length ){
      imgs[ count ].className += activeClass;
      count++;
    }  
    else{
      count = 0;
      next();
    }
  }

  next();

  timer = setInterval(function(){
    next();
  }, 2000);

})();

$("#myCarousel").hover(function(){//Stop the carousel on hover
 $(this).stop;
  },function(){
  $(this).resume;
});
