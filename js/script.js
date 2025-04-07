// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// php progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 30,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    
    // Remove active class from all buttons and add to clicked button
    $(".filter-item").removeClass("active");
    $(this).addClass("active");

    if (value == "all") {
      $(".post").show(400);
    } else {
      $(".post")
        .not("." + value)
        .hide(200);
      $("." + value)
        .show(400)
        .css('display', 'block'); // Force display block
    }

    // Trigger AOS refresh to show animations
    AOS.refresh();
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-item');
    const projects = document.querySelectorAll('.post');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projects.forEach(project => {
                if (filterValue === 'all' || project.classList.contains(filterValue)) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});

// Update the form submission handler
function submitForm(e) {
    e.preventDefault();
    
    // Get the submit button
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    // Change button text and disable it
    submitButton.innerHTML = '<i class="bi bi-arrow-repeat spin"></i> Sending...';
    submitButton.disabled = true;
    
    const form = e.target;
    const formData = new FormData(form);
    
    fetch("https://formsubmit.co/ajax/premrauniyar2019@gmail.com", {
        method: "POST",
        headers: { 
            'Accept': 'application/json'
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Show the thank you modal
        const modal = new bootstrap.Modal(document.getElementById('thankYouModal'));
        modal.show();
        
        // Reset form and button
        form.reset();
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again.');
        
        // Reset button on error
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    });

    return false;
}

// Add event listener for modal close
document.getElementById('thankYouModal').addEventListener('hidden.bs.modal', function () {
    // Any additional actions after closing the modal
});

// Add this to check image loading
document.addEventListener('DOMContentLoaded', function() {
    const companyImages = document.querySelectorAll('.timeline-icon img');
    companyImages.forEach(img => {
        img.onerror = function() {
            console.error('Error loading image:', img.src);
        };
        img.onload = function() {
            console.log('Image loaded successfully:', img.src);
        };
    });
});

// Add this to ensure animations work on filter change
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS
  AOS.init({
    duration: 800,
    once: false, // Allow animations to repeat
    mirror: true // Animate elements on scroll up as well
  });
});

// Scroll to top on button click
mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-item');
  const projects = document.querySelectorAll('.post');

  // 👇 Set "ml" filter as default active and show only ML projects
  const defaultFilter = "ml";

  filterButtons.forEach(btn => {
    if (btn.getAttribute('data-filter') === defaultFilter) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  projects.forEach(project => {
    if (project.classList.contains(defaultFilter)) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });

  // 👇 Filtering logic on button click
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.getAttribute('data-filter');

      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      projects.forEach(project => {
        if (filterValue === 'all' || project.classList.contains(filterValue)) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    });
  });
});