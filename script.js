// Smooth scrolling for navigation links
document.querySelectorAll('nav table tr td a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href'); // Get the target section ID
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth' // Smooth scroll effect
        });
    });
});
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let currentSlide = 0; // Start with the first slide
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Show current slide
    slides[currentSlide].style.display = "block";  
}

function changeSlide(n) {
    const slides = document.getElementsByClassName("slide");
    
    // Update current slide index
    currentSlide += n;

   // Loop back to first slide if at end or go to last slide if at beginning
   if (currentSlide >= slides.length) {
       currentSlide = 0;
   } else if (currentSlide<0) {
       currentSlide = slides.length -1 ;
   }

   showSlides(); // Show updated slide
}

// Contact form submission with validation
    document.getElementById('contact-form').addEventListener('submit', function(event) {
    const email = document.querySelector('input[name=email]').value;
    const name = document.querySelector('input[name=username]').value;
    const message = document.querySelector('textarea[name=message]').value;

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!name || !message) {
        alert('Please fill in all fields.');
        event.preventDefault(); // Prevent form submission
    } else if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        event.preventDefault(); // Prevent form submission
    } else {
        alert('Thank you for contacting me! 💖');
        
        // Show loader on form submission (optional)
        document.querySelector('.loader').classList.add('show');
        
        // Simulate loading time before hiding loader (for demonstration)
        setTimeout(() => {
            document.querySelector('.loader').classList.remove('show');
            this.reset(); // Reset form fields after submission
        }, 2000); // Adjust time as needed
    }
});