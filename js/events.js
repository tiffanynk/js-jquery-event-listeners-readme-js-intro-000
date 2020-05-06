function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('#typing').on('keydown', function(event) {
    if (event.which === KeyG) {
      alert("You Pressed G!");
    }
  })
}

$(document).ready(function(){

getIt();

frameIt();

pressIt();

});
