$(document).ready(function(){
	$('#btn').click(function(){
		let textofLink = $('#text').val();
		$('#link').attr('href', 'https://www.google.com/search?q=' + textofLink);
		$('#text').val('');
	});
});