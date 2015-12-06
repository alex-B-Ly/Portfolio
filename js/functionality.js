$(document).ready(function() {

	function repoFetch(){
		$('#repo-fetch').on('click', function(e) {
			e.preventDefault();
			$(this).hide();
		});
	}

	//FUNCTIONS CALLED
	repoFetch();

});