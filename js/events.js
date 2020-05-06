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
    $('#typing').keydown(function(event) {
      if (event.key === 'g') {
        alert('You pressed G!')
      }
    });
}

$(document).ready(function(){

getIt();

frameIt();

pressIt();

});
