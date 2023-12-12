//review form display than you for your review
document.addEventListener('DOMContentLoaded', function() {
  const reviewForm = document.querySelector('.review-form');
  const submitButton = reviewForm.querySelector('button[type="submit"]');
  const messageContainer = document.createElement('div'); // Create a container for the thank you message

  submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    // Clear the inputs
    document.getElementById('name').value = '';
    document.getElementById('review').value = '';
    document.getElementById('rating').value = '';

    // Add thank you message
    messageContainer.textContent = 'Thank you for your review!';
    messageContainer.className = 'thank-you-message'; // Add a class for potential styling
    reviewForm.insertBefore(messageContainer, submitButton); // Insert the message container before the submit button

    // Optionally, remove the message after a few seconds
    setTimeout(function() {
      messageContainer.remove();
    }, 5000);
  });
});



// Dummy data for testimonials, replace with server response
const testimonials = [
    {
        review: "Kady Events turned our dream wedding into a reality. Every detail was perfect!",
        name: "Jamie & Alex",
        image: "https://as1.ftcdn.net/v2/jpg/02/86/53/08/1000_F_286530850_o0CDVydNj9Cg497ytnn7E2Q6FbPbthPY.jpg"
      },
      {
        review: "Absolutely amazing! The attention to detail and the level of service we received was outstanding.",
        name: "Sophia",
        image: "https://images.unsplash.com/photo-1611432579699-484f7990b127?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjB3b21hbiUyMHNtaWxpbmd8ZW58MHx8MHx8fDA%3D"
      },
  ];
  
  // Function to create estimonial slides
  function loadTestimonials() {
    const slider = document.getElementById('testimonialSlider');
    testimonials.forEach((testimonial, index) => {
      const slide = document.createElement('div');
      slide.className = 'testimonial-slide' + (index === 0 ? ' active' : '');
      slide.innerHTML = `
        <img src="${testimonial.image}" alt="Photo of ${testimonial.name}" class="testimonial-image">
        <p class="review-text">"${testimonial.review}"</p>
        <p class="reviewer-name">- ${testimonial.name}</p>
      `;
      slider.appendChild(slide);
    });
  }
  
  // Function to run the slider automatically
  function runSlider() {
    const slides = document.querySelectorAll('.testimonial-slide');
    let currentIndex = 0;
  
    setInterval(() => {
      slides[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add('active');
    }, 3000); // Slide interval in milliseconds
  }
  
  // Initialize testimonials and slider
  window.onload = function() {
    loadTestimonials();
    runSlider();
  };



  /*scripter for picures slide*/

  document.addEventListener("DOMContentLoaded", function() {
    let slider = document.querySelector('.slider-content');
    let currentSlide = 0;
    const slideWidth = 600; // Width of the slider

    function updateSlidePosition() {
        const position = -currentSlide * slideWidth;
        slider.style.transform = `translateX(${position}px)`;
    }

    document.querySelector('.prev').addEventListener('click', () => {
        currentSlide = Math.max(currentSlide - 1, 0);
        updateSlidePosition();
    });

    document.querySelector('.next').addEventListener('click', () => {
        currentSlide = Math.min(currentSlide + 1, slider.children.length - 1);
        updateSlidePosition();
    });

    updateSlidePosition(); // Initialize position
});



document.addEventListener("DOMContentLoaded", function() {
  // Dummy function to simulate a login attempt
  function attemptLogin() {
      
      var errorMessageDiv = document.querySelector('.error-message');
      errorMessageDiv.style.display = 'block'; // Show the error message
  }
  
  // Get the form and attach an event listener to it
  var form = document.querySelector('.signin-form');
  form.onsubmit = function(event) {
      event.preventDefault(); 
      attemptLogin(); // 
  };
});



/*script for services page*/
document.getElementById('custom-event-form').onsubmit = function(event) {
  event.preventDefault();
  document.getElementById('confirmation-message').style.display = 'block';
};


var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.querySelector('.close');

// Get all buttons that have the class 'reserve-btn' and attach a click event listener to them
var reserveButtons = document.querySelectorAll('.reserve');
reserveButtons.forEach(function(button) {
  button.addEventListener('click', function() {
      modal.style.display = 'block';
  });
});
document.querySelectorAll('.time-slot').forEach(function(slot) {
  slot.addEventListener('click', function() {
      document.querySelectorAll('.time-slot').forEach(function(slot) {
          slot.classList.remove('selected');
      });
      slot.classList.add('selected');
  });
});


// When the user clicks on <span> (x), close the modal
span.addEventListener('click', function() {
  modal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
  if (event.target === modal) {
      modal.style.display = 'none';
  }
});

var confirmBtn = document.getElementById('confirmBooking');
confirmBtn.onclick = function() {
  var date = document.getElementById('event-date').value;
  var time = document.getElementById('event-time').value;
  if (date && time) {
      // Process the selected date and time
      console.log('Date selected:', date);
      console.log('Time selected:', time);
      // Here you would typically send the data to the server
      // For now, just hide the modal
      modal.style.display = 'none';
  } else {
      alert('Please select both a date and time.');
  }
}
var confirmBookingBtn = document.getElementById('confirmBooking');
var selectedDate, selectedTime;

// Function to open booking modal
function openBookingModal() {
  if (selectedDate && selectedTime) {
      document.getElementById('bookingModal').style.display = 'block';
  } else {
      alert('Please select both a date and time.');
  }
}

// Event listener for the Confirm Booking button
confirmBookingBtn.addEventListener('click', function() {
  selectedDate = document.getElementById('event-date').value;
  // Find the selected time slot
  var selectedTimeSlot = document.querySelector('.time-slot.selected');
  selectedTime = selectedTimeSlot ? selectedTimeSlot.textContent : null;
  
  openBookingModal();
});

// Booking form submission
var bookingForm = document.getElementById('booking-form');
if (bookingForm) {
  bookingForm.onsubmit = function(event) {
      event.preventDefault(); // Prevent the form from submitting
      // Simulate a random booking number
      var bookingNumber = Math.floor(Math.random() * 1000000);
      document.getElementById('booking-number').textContent = bookingNumber;
      
      // Hide the booking modal
      document.getElementById('bookingModal').style.display = 'none';
      // Show the confirmation modal
      document.getElementById('confirmationModal').style.display = 'block';
  };
}

// Time slot selection logic
document.querySelectorAll('.time-slot').forEach(function(slot) {
  slot.addEventListener('click', function() {
      document.querySelectorAll('.time-slot').forEach(function(slot) {
          slot.classList.remove('selected');
      });
      slot.classList.add('selected');
      selectedTime = slot.textContent; 
  });
});

// Close modal logic (for both modals)
var closeButtons = document.querySelectorAll('.modal .close');
closeButtons.forEach(function(button) {
  button.addEventListener('click', function() {
      button.closest('.modal').style.display = 'none';
  });
});

document.getElementById('custom-event-form').onsubmit = function(event) {
event.preventDefault();

// Clear out the input fields
this.event_name.value = '';
this.number_of_persons.value = '';

// Display the confirmation message
document.getElementById('confirmation-message').style.display = 'block';
};

