//Udacity Final Project
$(document).ready(function () {
  	setIntro();
  	setSocialIcons();
  	setMenu();
  	setLogo();
  	setGrid();
});

// INTRO PAGE ANIMATION
function setIntro() {

	$('h1').hide().fadeIn(3000);
	$('h2').addClass('animated shake');
}

// SOCIAL-ICONS ANIMATION
function setSocialIcons() {

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
}

// RESPONSIVE MENU ON CLICK
function setMenu() {

	$('.contact-respo').hide();

	$('#menu').on('click', function() {
			$('.contact-respo').toggle();
		});
}

// UDACITY LOGO ROTATION
function setLogo() {

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
}

// GRID SETTING
function setGrid() {

	$('#sizePicker').submit(function makeGrid(grid) {

    	$('table tr').remove(); //remove all tables

	    var theRow = $('#sizePicker #input_height').val(); // defining variables
	    var theCol = $('#input_width').val();

	    for (var i = 1; i <= theRow; i++) {
			createRow();
	      	for (var j = 1; j <= theCol; j++) {
	      		createCell();
	      	}
	    }

	    grid.preventDefault();
	});
}

// ROW CREATING
function createRow() {

	$('table').append("<tr></tr>");
}

// CELLS CREATING
function createCell() {

    $('table tr:last').append("<td></td>"); // append cells to last row
    $('td').attr("class", 'cells'); // format cell
    $('td').click(function (event) {     // add click
		var paint = $('#colorPicker').val();
	  	$(event.target).css('background-color', paint);
	});
}

