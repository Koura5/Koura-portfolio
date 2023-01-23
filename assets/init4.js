 $(document).ready(function(){
    
    /* get random placement within window */

    // store height and width of the window as variables
    var width = $(window).width();
    var height = $(window).height();

    // function to get random number between a range of twpo numbers
    function randomIntFromInterval(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    // get a random height within the height of the window
    const rndTop = randomIntFromInterval(1, height)
    // get a random width within the width of the window
    const rndLeft = randomIntFromInterval(1, width)     

    // set the position of the current image
    $('#moving-text').css({
      'top': rndTop+'px',
      'left': rndLeft+'px'
    })
    
    /* slideshow */
    var $carousel = $('.carousel').flickity({
      
      // set slideshow options
      autoPlay: true,
      wrapAround: true,

      on: {
        ready: function() {
        },
        change: function( index ) {

          // get new random number and move text when slide changes
          const rndTop = randomIntFromInterval(1, height)
          const rndLeft = randomIntFromInterval(1, width)     
          $('#moving-text').css({
            'top': rndTop+'px',
            'left': rndLeft+'px'
          })
        }
      }
    });   

  });
 
/*
      $('body').append('<div id="follow">🦍</div>');
     $(document).on("mousemove", function (event) {
         $('#follow').css({
             'position' : 'absolute',
             'left' : event.pageX+10+'px',
             'top' : event.pageY+10+'px'
         });
     });
*/
