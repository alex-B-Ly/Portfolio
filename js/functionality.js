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
			}else{
				$(this).removeClass('selected-repo');
				$(this).siblings().removeClass('hide-repo');
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
						tableBody.append(repoInfoRow);
					}
				}
			});

			function repoInfoRowBuilder(repoItem){
				var infoRow = $("<tr>");
				var commitNumTd = $("<td>").text('test');
				var messageTd = $("<td>").text(repoItem.commit.message);
				var authorTd = $("<td>").text(repoItem.commit.author.name);
				var dateTd = $("<td>").text(repoItem.commit.author.date);

				infoRow.append(commitNumTd).append(messageTd).append(authorTd).append(dateTd);

				return infoRow;
			}

		});

	}


	//FUNCTIONS CALLED
	repoFetch();
	repoSelect();
	repoInfo();
});