//Not display from the beginning the cocaZero logo 
function loadzero ()
{
	document.getElementById("logozero").style.display='none';
}

//call the beforeafter function from jquery.beforeafter-1.4.js 
$(function(){
	$('#slideContainer').beforeAfter({
		animateIntro:true, //beginning animation
		imagePath:'img/',
		introDuration : 600,
		introPosition : .25,
		cursor: 'e-resize',
		enableKeyboard: true,// possibility to move the selector with the keyboard
		dividerColor: '#FFFFFF',//white selector
		showFullLinks : false//not showing "before" and "after" link
	});
});


