var closebar = document.getElementById('close-bar')
var hiddenPanel = document.getElementById('hiddenPanel')
var closeButton = document.getElementById('closeButton')
closebar.addEventListener("click",()=>{
  if(hiddenPanel.style.right==="35px")
{
  hiddenPanel.style.right="-300px";
}
else{hiddenPanel.style.right="35px"}
})

closeButton.addEventListener("click",()=>{
  hiddenPanel.style.right="-300px"
})

$(document).ready(function () {
    $(".placements-carousel").owlCarousel({
      loop: true, // Enable infinite loop
      margin: 10, // Margin between items
      nav: true, // Enable navigation
      autoplay: true, // Enable auto-scrolling
      autoplayTimeout: 1000, // Autoplay interval (3 seconds)
      autoplaySpeed: 600, 
      slideTransition: 'linear',// Speed of the scrolling
      navText: [
        '<i class="fas fa-chevron-left"></i>', // Left arrow icon
        '<i class="fas fa-chevron-right"></i>', // Right arrow icon
      ],
      responsive: {
        // Set responsive behavior
        0: {
          items: 1, // Show 1 item on small screens
        },
        600: {
          items: 3, // Show 3 items on medium screens
        },
        1000: {
          items: 5, // Show 5 items on larger screens
        },
      },
    });
  });
