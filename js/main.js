const sectionElms = document.querySelectorAll('section');
const navElms = document.querySelectorAll('header nav a');


const textAnim = new Typed('.changing-text',{
    strings:['an Engineer','a Full Stack Developer' ],
    typeSpeed:110,
    backSpeed:55,
    backDelay:2000,
    loop:true
});

ScrollReveal({
    reset: true,
    distance:'100px',
    duration:2000,
    delay:100
});

ScrollReveal().reveal('.home-img-box, .page-title', { origin:'top' });
ScrollReveal().reveal('.home-content-box, .about-content-box p,' +
    '.education-box-container, .technical-box-container, .project-container, .frm-wrapper', { origin:'bottom' });
ScrollReveal().reveal('.home-content-box h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-content-box p, .about-content-box h3', { origin:'right' });
window.addEventListener('scroll', ()=>{
   sectionElms.forEach(section => {
       const top = window.scrollY;
       const offset = section.offsetTop - 150;
       const height = section.offsetHeight;
       const id = section.getAttribute('id');

       if (top >= offset && top < offset + height) {
           navElms.forEach(nav => {
               nav.classList.remove("active");
               document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
           });
       }
   })
});

document.addEventListener('contextmenu', event => event.preventDefault());

// Function to show the modal
function showModal(message) {
    var modal = document.getElementById("myModal");
    var modalMessage = document.getElementById("modalMessage");



    // Set the message in the modal
    modalMessage.textContent = message;

    // Show the modal
    modal.style.display = "block";

    // Add event listener to close the modal when the close button is clicked
    var closeButton = document.getElementsByClassName("close")[0];
    closeButton.addEventListener("click", function() {
      modal.style.display = "none";
    });
  }

  // Add event listener to the form submission
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show the modal immediately to indicate form submission is in progress
    showModal("Submitting form...");

    // Perform an AJAX request to submit the form
    var xhr = new XMLHttpRequest();
    xhr.open("POST", this.action);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Successful response
          var response = xhr.responseText;
          showModal(response); // Show the modal with the response message
          document.getElementById("myForm").reset(); //Clear the form fields
        } else {
          // Error response
          showModal("Error: Something went wrong."); // Show a generic error message
        }
      }
    };
    xhr.send(new FormData(this));
  });