// Fetch data.json and process it
fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
        // Display work items
        displayWork(data.work);

        //  Display work items in home
        displayWorkHome(data.work);

        // Display skills
        displaySkills(data.skill);

        // loadTestimonials
        loadTestimonials(data.testimonials)


        // load carousel
        owlCarouselFeatureSlide();


    })
    .catch((error) => console.error("Error fetching data:", error));

function displayWork(workData) {
    const workContainer = document.getElementById("works-list");

    if (workContainer != null) {
        workData.forEach((workItem) => {
            const workHTML = `
     <div class="col-md-4">
       <div class="article animate-box fadeInUp animated">
         <a href="${workItem.link}" target="_blank" class="blog-img">
           <img class="img-responsive" src="${workItem.imageSrc}" alt="${workItem.title}">
           <div class="overlay"></div>
           <div class="link">
             <span class="read">Read more</span>
           </div>
         </a>
         <div class="desc">
           
           <h2><a href="${workItem.link}">${workItem.title}</a></h2>
           <p>${workItem.description}</p>
         </div>
       </div>
     </div>
   `;

            workContainer.insertAdjacentHTML("beforeend", workHTML);
        });
    }
}

function displayWorkHome(workData) {
    const workHomeContainer = document.querySelector("#home-work-list");

    console.log(workHomeContainer);
    if (workHomeContainer != null) {

        let workHTML = "";
        workData.forEach((workItem) => {
            workHTML += `
     <div class="item">
       <div class="col-md-12">
         <div class="article">
           <a href="${workItem.link}" class="blog-img">
             <img class="img-responsive" src="${workItem.imageSrc}" alt="${workItem.title}">
             <div class="overlay"></div>
             <div class="link">
               <span class="read">Project Link</span>
             </div>
           </a>
           <div class="desc">
            <!-- <span class="meta">iOS App</span>-->
             <h2><a href="${workItem.link}">${workItem.title}</a></h2>
             <p>${workItem.description}</p>
           </div>
         </div>
       </div>
     </div>
   `;

        });
        workHomeContainer.innerHTML = workHTML



    }
}

function displaySkills(skillsData) {
    const skillsContainer = document.getElementById("skills-list");

    if (skillsContainer != null) {
        skillsData.forEach((skill) => {
                    const skillHTML = `
        <div class="col-md-6">
          <div class="services animate-box fadeInUp animated">
            <h3>${skill.category}</h3>
            <ul>
              ${skill.subskills
                .map((subskill) => `<li>${subskill}</li>`)
                .join("")}
            </ul>
          </div>
        </div>
      `;

      skillsContainer.insertAdjacentHTML("beforeend", skillHTML);
    });
  }
}


function loadTestimonials(testimonials) {
  const testimonialsContainer = document.getElementById('testimonials-container');

  // Clear any existing content
  testimonialsContainer.innerHTML = '';

  // Loop through the testimonials and create HTML elements
  testimonials.forEach((testimonial, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.innerHTML = `
      <a href="${testimonial.link}" target="_blank"><div class="col-md-12 text-center">
        <div class="testimony">
          <blockquote>
            <p>"${testimonial.quote}"</p>
            <span> &mdash; ${testimonial.author}</span>
          </blockquote>
        </div>
      </div></a>
    `;
    testimonialsContainer.appendChild(itemDiv);
  });
}



// Owl Carousel
let owlCarouselFeatureSlide = function() {
  let owl = $('.owl-carousel1');
  owl.owlCarousel({
    animateOut: 'fadeOut',
     animateIn: 'fadeIn',
     autoplay: true,
     loop:true,
     margin:0,
     nav:true,
     dots: false,
     autoHeight: false,
     responsive:{
        0:{
           items:1
        },
        600:{
           items:2
        },
        1000:{
           items:3
        }
     },
     navText: [
        "<i class='icon-arrow-left3 owl-direction'></i>",
        "<i class='icon-arrow-right3 owl-direction'></i>"
       ]
  });
  let owl2 = $('.owl-carousel');
  owl2.owlCarousel({
    animateOut: 'fadeOut',
     animateIn: 'fadeIn',
     autoplay: true,
     loop:true,
     margin:0,
     nav:false,
     dots: true,
     autoHeight: true,
     items: 1,
     navText: [
        "<i class='icon-arrow-left3 owl-direction'></i>",
        "<i class='icon-arrow-right3 owl-direction'></i>"
       ]
  });
  let owl3 = $('.owl-carousel3');
  owl3.owlCarousel({
    animateOut: 'fadeOut',
     animateIn: 'fadeIn',
     autoplay: true,
     loop:true,
     margin:0,
     nav:false,
     dots: false,
     autoHeight: true,
     items: 1,
     navText: [
        "<i class='icon-arrow-left3 owl-direction'></i>",
        "<i class='icon-arrow-right3 owl-direction'></i>"
       ]
  });	
};