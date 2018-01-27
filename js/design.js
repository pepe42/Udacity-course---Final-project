// H1 TITLE INTRO
$('h1').hide().fadeIn(3000);

//SOCIAL-ICONS ANIMATION
var icons = $('.social-icon'),
	styles = {
		position: 'relative',
		color: 'black',
		zIndex: 10
	},
	settings = { opacity: .5 },
	speed = 5000;

icons.css(styles);

icons.on('mouseenter', function() {
	$(this).fadeOut(settings, speed).fadeIn(settings, speed);
})

// RESPONSIVE MENU
$('.contact-respo').hide();

$('#menu').on('click', function() {
		$('.contact-respo').toggle();
	});

// Udacity logo IMAGE ROTATION
$(".logo").rotate({
  bind:
  {
    mouseover : function() {
    $(this).rotate({animateTo:360})
  },
  mouseout : function() {
    $(this).rotate({animateTo:0})
    }
  }
});











// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

/*function makeGrid() {

// Your code goes here!

}*/


//Benjamin code
$(document).ready(function () {
  	$('#sizePicker').submit(function makeGrid(grid) {
    	$('table tr').remove();
	    var theRow = $('#input_height').val();
	    var theCol = $('#input_width').val();
		    for (var i = 1; i <= theRow; i++) {
				$('table').append("<tr></tr>");
		      	for (var j = 1; j <= theCol; j++) {
		        $('tr:last').append("<td></td>");
		        $('td').attr("class", 'cells')
		      	}
		    }
	    grid.preventDefault();

	    $('.cells').click(function (event) {
	    	var color = $('#colorPicker').val();
	      	$(event.target).css('background-color', color);
	    });
	});
});

