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
					var repoCommits = repoList.url += "/commits";
					repoCreate.attr('href', repoCommits);
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
				$('.repo-info-table').fadeIn(2000);
			}else{
				$(this).removeClass('selected-repo');
				$(this).siblings().removeClass('hide-repo');
				$('.repo-info-table').fadeOut(600);
			}
		
		});
	}

	// REPO INFO TABLE BUILDER
	function repoInfo(){
		
		$('.repo-list').on('click', '.repo-name', function(e) {
			e.preventDefault();
			
			$.ajax({
				type: 'GET',
				url: $(this).attr('href'),
				success: function(info){
					var tableBody = $('.repo-info-table tbody');
					tableBody.empty();

					for(var i=0; i<info.length; i++){
						var repoInfoRow = repoInfoRowBuilder(info[i]);
						repoInfoRow.attr('href', info[i].html_url);
						tableBody.append(repoInfoRow);
					}

					function repoInfoRowBuilder(repoItem){
						var infoRow = $('<tr>');
						var messageTd = $('<td>').text(repoItem.commit.message);
						var authorTd = $('<td>').text(repoItem.commit.author.name);
						var dateTd = $('<td>').text(repoItem.commit.author.date);

						infoRow.append(messageTd).append(authorTd).append(dateTd);
						infoRow.addClass('repo-info-row');

						return infoRow;
					}

				}
			});

		});

	}

	// REPO COMMIT RELOCATOR
	function commitRelocator(){
		$(document).on('click', '.repo-info-row', function() {
			window.open($(this).attr('href'), '_blank');
		});
	}

	//FUNCTIONS CALLED
	repoFetch();
	repoSelect();
	repoInfo();
	commitRelocator();
});