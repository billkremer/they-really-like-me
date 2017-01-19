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

  console.log("does this even work?");




};
