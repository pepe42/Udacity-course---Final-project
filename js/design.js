//Re-design 2
$(document).ready(function () {
  	setTitle();
  	setSocialIcons();
  	setMenu();
  	setLogo();
  	setGrid();
});

function setTitle()
{
	// H1 TITLE INTRO
	$('h1').hide().fadeIn(3000);
}

function setSocialIcons()
{
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
}


function setMenu()
{
	// RESPONSIVE MENU
	$('.contact-respo').hide();

	$('#menu').on('click', function() {
			$('.contact-respo').toggle();
		});
}


function setLogo()
{
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
}


function setGrid()
{
	$('#sizePicker').submit(function makeGrid(grid) {
		//remove all tables
    	$('table tr').remove();

	    var row_input = $('#sizePicker #input_height').val();
	    var col_input = $('#input_width').val();

	    for (var i = 1; i <= row_input; i++)
	    {
			createRow();
	      	for (var j = 1; j <= col_input; j++)
	      	{
	      		createCell();
	      	}
	    }

	    grid.preventDefault();

	});
}

function createRow()
{
	$('table').append("<tr></tr>");
}
function createCell()
{
	// append cells to last row
    $('table tr:last').append("<td></td>");
    // format cell
    $('td').attr("class", 'cells');
    // add click
    $('td').click(function (event) {
		var paint = $('#colorPicker').val();
	  	$(event.target).css('background-color', paint);
	});
}






