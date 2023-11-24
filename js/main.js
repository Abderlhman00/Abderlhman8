

var submitBtn = document.getElementById("submitbtn")
//submitBtn.disabled = true

function valid() {
  var email = document.getElementById("email").value
  var password = document.getElementById("password").value
  var emailError = document.getElementById("emailError")
  var passwordError = document.getElementById("passwordError")

  if (email.indexOf("@") == -1 || email.length <= 0) {
    emailError.innerHTML = "Please Enter a Valid Email";
   // submitBtn.disabled = true;

  } else if (email.indexOf("@") > -1 && email.length > 0) {
    emailError.innerHTML = "";
  }



  if (password.length < 4 || password.length > 15) {
    passwordError.innerHTML = "Please Enter a Valid Password";
   // submitBtn.disabled = true;
  } else if (password.indexOf("@") > 4 || password.length < 15) {
    passwordError.innerHTML = "";
  }

  if (email.indexOf("@") > -1 && email.length > 0 && password.indexOf("@") > 4 && password.length < 15) {
    //submitBtn.disabled = false;

  }


}

/*=======================search==================== */

let products = document.getElementById('product_title')


function searchData(value) {
  let table = '';
  for (let i = 0; i < products.length; i++) {
    if (searchMood == 'title') {

      if (detaPro[i].title.includes(value.toLowerCase())){
        table += `
        <h3>${products[i].title}</h3>
        <p>${products[i].title}</p>
          `
      }
      document.getElementById('product_title').innerHTML = table;
    }
  }
}

/*=============== SWIPER TESTIMONIAL ===============*/

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');
/*===== Menu Show =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== Hide Show =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== IMAGE GALLERY ===============*/

function imgGallery() {
  const mainImg = document.querySelector('.details_img'),
    smallImg = document.querySelectorAll('.details_small-img');


  smallImg.forEach((img) => {
    img.addEventListener('click', function () {
      mainImg.src = this.src
    });
  });
}

imgGallery();



/*=============== SWIPER CATEGORIES ===============*/

var swiperCategories = new Swiper(".categories_container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});


/*=============== SWIPER PRODUCTS ===============*/

var swiperProducts = new Swiper(".new_container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});
/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContent = document.querySelectorAll('[content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);
    tabContent.forEach((tabContent) => {
      tabContent.classList.remove('active-tab');
    });
    target.classList.add('active-tab');


    tabs.forEach((tab) => {
      tab.classList.remove('active-tab');


    });
    tab.classList.add('active-tab')

  });
});

//================================================


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('form-total'),
      contactName = document.getElementById('username'),
      contactEmail = document.getElementById('email'),
      contactProject = document.getElementById('password'),
      contactProjects = document.getElementById('confirm-password'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
// Check if the field has a value
    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === '' || contactProjects.value === ''){
    // Add and remove color
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')

    // Show message
    contactMessage.textContent = 'Write all the input fields'

   }else{

    // serviceID - templateID - #form - publicKey
     emailjs.sendForm('service_0vq5olc', 'template_hijkmh9', '#form-total', 'hL6MOQCYZnCBtwSPv')
        .then(()  =>{
            // Show message and add color
            contactMessage.classList.add('coler-blue')
            contactMessage.textContent = 'Message sent'

            // Remove message after five seconds
            setTimeout(()  =>{
                contactMessage.textContent = ''
            }, 5000)
        },(error) =>{
            alert('OOPS! SOMETHING HAS FAILED...', error)
        })

        // To clear the input field
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
        contactProjects.value = ''

   }
}
contactForm.addEventListener('submit', sendEmail)


/*================= GOOGLE MAP=====================*/
function initMap() {
  // Map options
  var options = {
    center: { lat: 37.7749, lng: -122.4194 }, // Set the initial map center
    zoom: 10 // Set the initial zoom level
  };

  // Create the map
  var map = new google.maps.Map(document.getElementById("map"), options);
}

