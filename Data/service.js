const servicesData = [
    {
        icon: "icon-webpage",
        title: "Web Development",
        description: "We have a variety of experienced people who can work on website design development, mobile-friendly design development, and e-commerce design and development."
    },
    {
        icon: "icon-innovation",
        title: "Software Solution",
        description: "Our uplifted, full-stack engineering competence results in matchless digital experiences. Proficiency and extensive experience in agile software development."
    },
    {
        icon: "icon-webpage",
        title: "Social Media Marketing",
        description: "We have an expert team who handles our clients' social media marketing. Our team specializes in creating tailored strategies that engage your audience."
    },
    {
        icon: "icon-webpage",
        title: "Business Strategy",
        description: "We have a variety of experienced people who can work on website design development, mobile-friendly design development, e-commerce design and development."
    },
    {
        icon: "icon-innovation",
        title: "Customer Services",
        description: "Our comprehensive full-stack engineering expertise delivers unparalleled digital experiences. With deep proficiency and extensive experience."
    },
    {
        icon: "icon-app-development",
        title: "Inbound and Outbound Sales",
        description: "When it comes to telemarketing, we have vast experience in services including Inbound and Outbound Sales, and Lead Generation."
    }
];



// Get the container where services will be rendered
const servicesContainer = document.getElementById("services-container");

// Generate the HTML for each service using map and join them
const servicesHTML = servicesData.map(service => `
<div class="col-sm-12 col-md-6 col-lg-4">
   <div class="card">
       <div class="text-center mt-3 services-one__icon">
           <span class="${service.icon}"></span>
       </div>
       <div class="card-body">
           <h5 class="card-title text-center">${service.title}</h5>
           <p class="card-text text-center">${service.description}</p>
       </div>
   </div>
</div>
`).join(""); // Convert array of HTML strings into a single HTML string

// Inject the generated HTML into the container
servicesContainer.innerHTML = servicesHTML;
