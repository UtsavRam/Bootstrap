
document.addEventListener('scroll', function() {
var scrollPosition = window.scrollY;

if (scrollPosition > 50) {
    document.querySelector('.navbar1').style.backgroundColor = 'rgb(0, 51, 85)'; 
} else {
    document.querySelector('.navbar1').style.backgroundColor = 'transparent'; 
}
});

function handleClick(){
    var ulTag = document.getElementById('about-1')
    if (ulTag.style.display === "none") {
        ulTag.style.display = "block";
      } else {
        ulTag.style.display = "none";
      }
}

// Jquery start Here

$(document).ready(function () {
  // $('i').css({'transform': 'rotate(0deg)'});

  $('.smallblock').css({ 'display': 'none' });

  $('#title1').click(function () {

      $('#one').slideToggle(1000);
      $('#plus1').toggleClass("fa-solid fa-plus fa-solid fa-x ");

  });



  $('#title2').click(function () {
      $('#plus2').toggleClass("fa-solid fa-plus fa-solid fa-x ");
      $('#two').slideToggle(1000);


  });
  $('#title3').click(function () {
      $('#plus3').toggleClass("fa-solid fa-plus fa-solid fa-x ");

      $('#three').slideToggle(1000);
  });

  $('#title4').click(function () {
      $('#plus4').toggleClass("fa-solid fa-plus fa-solid fa-x ");
      $('#four').slideToggle(1000);


  });
  $('#title5').click(function () {
      $('#plus5').toggleClass("fa-solid fa-plus fa-solid fa-x ");

      $('#five').slideToggle(1000);
  });

  $('#title6').click(function () {
      $('#plus6').toggleClass("fa-solid fa-plus fa-solid fa-x ");
      $('#six').slideToggle(1000);


  });          

});        

