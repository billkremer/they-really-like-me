$(function () {

getPeople();

getLikes(); //need to update likes beforehand, because some may likes have alreay occured.

  $('#container').on('click', 'button', function () {
      updateLikes($(this).attr('id'));
  });

}); // doc ready closing


function updateLikes (nameToGetMoreLikes) {
// console.log(nameToGetMoreLikes);

  $.ajax({
    url: '/likes/' + nameToGetMoreLikes, // creates individual POST calls
    type: 'POST',
    // data: nameToGetMoreLikes,  // {person: nameToGetMoreLikes}
    success: getLikes,
    error: displayError
  });
}

function displayError (response) {
  console.log('error resp', response);
  $('#errormessage').text('Could not add update: ' + response.responseText);

};


function getLikes(){
// should update all on dom?
  $.ajax({
    url: '/likes/', // creates individual POST calls
    type: 'GET',
    // data: nameToGetMoreLikes,
    success: updateCountonDom
  });
}

function updateCountonDom (likesArray) {
//   $('.likes').empty(); // would empty all likes, but not necessary because of .text() below

  likesArray.forEach( function (individual) {
    var idPlaceholder = individual.name.split(" ").join("");

    $("#container").find("#"+idPlaceholder).next('span').text(individual.likes + " Likes!");
  });

}

function getLikeCount(temp){
  console.log(temp);
  console.log('insidegetlikecount');
    // console.log(nameToGetMoreLikes);
  // console.log('insidegetlikecount');
}


function getPeople() {
  $.ajax({
    url: '/bios',
    type: 'GET',
    success: displayPeople
  });
};


function displayPeople(teamMembers) {
// teamMembers is a placeholder for the people object in app.js ( and data.json )
  var idName = "";

  teamMembers.forEach( function (individual) {
    idName = individual.name.split(" ").join("");
    // creates an id name of their whole name without spaces.

    // buildup of div text
    var $personDiv = $('<div><h2>' + individual.name + '</h2></div>');

    $personDiv.append('<p>' + individual.bio + '</p>');
    $personDiv.append('<img src="' + individual.imageurl + '" alt="Photo of ' + individual.name + '"/> ');
    $personDiv.append('<button id="' + idName + '">Like</button>');
    $personDiv.append('<span class="likes">0 Likes!</span>');

    $('#container').append($personDiv);
  });
};
