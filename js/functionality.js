$(document).ready(function() {



// REPO SECTION

	// FETCH REPO LIST ON BUTTON CLICK
	function repoFetch(){
		$('#repo-fetch').on('click', function(e) {
			e.preventDefault();
			$(this).fadeOut(800, function() {
				$('.repo-title').fadeIn(2000);
				$('.repo-instructions').fadeIn(2000);
				$('.repo-list').fadeIn(3000);
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