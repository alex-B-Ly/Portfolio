$(document).ready(function() {



// REPO SECTION

	// FETCH REPO LIST ON BUTTON CLICK
	function repoFetch(){
		$('#repo-fetch').on('click', function(e) {
			e.preventDefault();

			$.ajax({
					url: 'https://api.github.com/users/alex-b-ly/repos',
					type: 'GET',
					success: function(repo){
						for(var i=0; i<repo.length; i++){
							var repoName = repoNameBuilder(repo[i]);
							$('.repo-list').append(repoName);
						}

					},
					error: function(jqXHR, textStatus, errorThrown){
						alert('did not work');
					}
				});

				function repoNameBuilder(repoList){
					var repoCreate = $('<a>');
					repoCreate.attr('href', repoList.url);
					repoCreate.addClass('col-xs-12').addClass('text-center').addClass('repo-name');
					repoCreate.text(repoList.name);

					return repoCreate;
				}	

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