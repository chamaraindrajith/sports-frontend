let button = document.querySelectorAll('.btn-outline-info');
if (button.length == 0) {
  let button = document.querySelectorAll('.btn');
}

let content_inside = document.querySelectorAll('.team-card-container');

Array.from(button).forEach(function(buttonArray, i) {
  buttonArray.addEventListener('click', function() {
    Array.from(button).forEach(buttonAll => buttonAll.classList.remove('clicked'));
    
    Array.from(content_inside).forEach(content_insideAll => content_insideAll.classList.remove('team-card-container-active'));
    
    button[i].classList.add('clicked'); 
    
    content_inside[i].classList.add('team-card-container-active'); 
  });
});