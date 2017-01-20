$(function () {
  console.log('doc ready');



  $.ajax({
    url: '/bios',
    type: 'GET',
    success: displayPeople
  });

  $('#container').on('click', 'button', function () {
      var holder = $(this).attr('id'); // holder is the holder for the ID string on the button that was clicked
      holder = holder.substring(1); // strips off the # from the ID
      updateLikes(holder);
  });

}); // doc ready closing

function updateLikes (nameToGetMoreLikes) {
  $.ajax({
    url: '/likes',
    type: 'GET',
    success: getLikeCount
  });


console.log(nameToGetMoreLikes +'name');
  $.ajax({
    url: '/likes/' + nameToGetMoreLikes, // creates individual POST calls
    type: 'POST',
    success: updateCountonDom
  });
}


function updateCountonDom(){
  console.log('insideupdatecountondom');
}

function getLikeCount(temp){
  console.log(temp);
  console.log('insidegetlikecount');
    // console.log(nameToGetMoreLikes);
  // console.log('insidegetlikecount');
}

function displayPeople(teamMembers) {
  console.log(teamMembers);  // teamMembers is a placeholder for the people object in app.js ( and data.json )

  teamMembers.forEach( function (individual) {
    var $personDiv = $('<div><h2>' + individual.name + '</h2></div>');


    $personDiv.append('<p>' + individual.bio + '</p>');
    $personDiv.append('<img src="' + individual.imageurl + '"/> ');
    $personDiv.append('<button id=#' + individual.name + '>Like</button>');
    $('#container').append($personDiv);

  });





};
