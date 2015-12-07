$(document).ready(function() {



// REPO SECTION

	// FETCH REPO LIST ON BUTTON CLICK
	function repoFetch(){
		$('#repo-fetch').on('click', function(e) {
			e.preventDefault();
			$(this).fadeOut(500, function() {
				$('.repo-title').fadeIn(800);
				$('.repo-instructions').fadeIn(800);
				$('.repo-list').fadeIn(1200);
			});
		});
	}

	// SELECT REPO AND HIDE OTHERS
	function repoSelect(){
		$(document).on('click', '.repo-name', function(e) {
			e.preventDefault();

			if(!($(this).hasClass('selected-repo'))){
				$(this).addClass('selected-repo');
				$(this).siblings().addClass('hide-repo');
			}else{
				$(this).removeClass('selected-repo');
				$(this).siblings().removeClass('hide-repo');
			}
		
		});
	}


	//FUNCTIONS CALLED
	repoFetch();
	repoSelect();

});