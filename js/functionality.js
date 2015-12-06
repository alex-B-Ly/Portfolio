$(document).ready(function() {

	function repoFetch(){
		$('#repo-fetch').on('click', function(e) {
			e.preventDefault();
			$(this).fadeOut(800, function() {
				$('.repo-title').css('display', 'block');
			});
		});
	}

	//FUNCTIONS CALLED
	repoFetch();

});