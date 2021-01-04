$(document).ready(function () {
	//Center all H1 elements:
	$("h1").css("text-align", "center");

	//Center all H2 elements:
	$("h2").css("text-align", "center");

	//Replace the class that is on the element containing the text "Team Up!" 
	//with the class page-header.
	//$("h1.myBannerHeading").replaceWith("row");

	//Change the text of "The Squad" to "Yellow Team".
	$('h2:contains("The Squad")').text("Yellow Team");

	//Change the background color for each team list to match the name of the team.
	$('#orangeHeading').css({ 
		'background-color': 'Orange' });
	$('#blueHeading').css({ 
		'background-color': 'Blue' });
	$('#redHeading').css({ 
		'background-color': 'Red' });
	$('#yellowHeading').css({ 
		'background-color': 'Yellow' });

	//Add Joseph Banks and Simon Jones to the Yellow Team list.
	$('#yellowTeamList').append('<li>Joseph Banks</li>');
	$('#yellowTeamList').append('<li>Simon Jones</li>');

	//Hide the element containing the text "Hide Me!!!"
	$('h1:contains("HIDE ME!!!")').toggle();

	//Remove the element containing the text "Bogus Contact Info" from the footer.
	$('#footerPlaceholder').detach();

	//Add a paragraph element containing your name and email to the footer. 
	//The text must be in Courier font and be 24 pixels in height.
	$('<p>Rosalinda Powell | rosalindapowell1@outlook.com</p>').appendTo('#footer');
	$('#footer').css({ 'font': 'Courier', 'height': '24'});



});


