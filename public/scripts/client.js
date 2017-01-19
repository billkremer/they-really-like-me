$(function () {
  console.log('doc ready');



  $.ajax({
    url: '/bios',
    type: 'GET',
    success: displayPeople
  });




});



function displayPeople(teamMembers) {
  console.log(teamMembers);  // teamMembers is a placeholder for the people object in app.js ( and data.json )

  teamMembers.forEach( function (individual) {
    var $personDiv = $('<div><h2>' + individual.name + '</h2></div>');


    $personDiv.append('<p>' + individual.bio + '</p>');
    $personDiv.append('<img src="' + individual.imageurl + '"/> ');
    $personDiv.append('<button>Like</button>');
    $('#container').append($personDiv);

  });





};
