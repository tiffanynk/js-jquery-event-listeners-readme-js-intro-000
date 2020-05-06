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
  input.addEventListener("keydown", event => {
    if (event.keyCode === 71) {
      alert('You pressed G!');
    }
  })
}

$(document).ready(function(){

getIt();

frameIt();

pressIt();

});
