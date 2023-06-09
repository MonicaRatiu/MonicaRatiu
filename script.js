// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Perform form submission logic here
    // For example, send data to a server using AJAX or perform client-side validation
    // You can access form field values using the following syntax:
    // const name = contactForm.elements['name'].value;
    // const email = contactForm.elements['email'].value;
    // const message = contactForm.elements['message'].value;

    // Reset the form after submission
    contactForm.reset();
});

class Section {
    constructor(link, title, description) {
        this.link = link;
        this.title = title;
        this.description = description;
    }

    render() {
        const section = document.createElement('section');

        const sectionLink = document.createElement('a');
        sectionLink.href = this.link;
        sectionLink.textContent = this.title;

        const sectionTitle = document.createElement('h3');
        sectionTitle.appendChild(sectionLink);

        const sectionDescription = document.createElement('p');
        sectionDescription.textContent = this.description;

        section.appendChild(sectionTitle);
        section.appendChild(sectionDescription);

        return section;
    }
}
// Create instances of Section
const aboutSection = new Section('#about', 'About', 'Learn more about me.');
const romanianFriend = new Section('https://www.facebook.com/your.romanianfriend', 'Romanian Friend', 'Romanian Friend este un website care ajută turiștii români și străini să găsească cei mai buni ghizi din țara noastră și astfel să îi desopere atât zonele populare, cât și pe cele ascunse între munți și văi. Eu sunt vocea care interacționează cu aceștia în social media, cea care le arată cât de frumoasă este țara noastră și cea care le dă sfaturi despre excursiile pe care să le aleagă și de ce.');
const bippidiDesign = new Section('https://www.facebook.com/bippidi', 'Bippidi Design', 'Lumea copiilor este una minunată și merită să fie trăită fiecare etapă la maximum. La Bippidi Desing facem această lume mai frumoasă cu ajutorul jucăriilor și a hăinuțelor vesele pe care copii le poartă cu mult drag oriunde ar merge. Confortul celor mici este prioritatea noastră și ne bucurăm că putem să fim alături de părinții care caută tot ce-i mai bun pentru cei mici.');
const musicHub = new Section('https://www.facebook.com/musichub.cluj', 'Music Hub', 'Muzica trebuie trăită de la mic la mare, iar Music Hub tocmai asta face: aduce muzica mai aproape de copii și de părinți cu ajutorul cursurilor pe care le organizeaza. Mai mult decât atât, aici găsești și săli de repetiții sau de concerte, în funcție de nevoile fiecăruia.');
const itfactory = new Section("https://www.facebook.com/BackToBasics.ro", "Back to Basics", "Lumea profesională este plină de suișuri și coborâșuri și tocmai de aceea este nevoie de cei mai buni ghizi. Cei de la Back to Basics sunt mereu aproape atât de manageri, cât și de angajați pentru a le veni în ajutor în momentele de impas și de a sărbători reușite împreună. Coaching, traininguri sau teambuldinguri, sunt toate mai bine organizate alături de ei.")
const projectsSection = new Section('#projects', 'Projects', 'Explore my portfolio.');

const main = document.querySelector('#project-list');
main.appendChild(romanianFriend.render());
main.appendChild(bippidiDesign.render());
main.appendChild(musicHub.render());
main.appendChild(itfactory.render());

let heroCounter = 1
document.querySelector('#hero-image-' + heroCounter).style.display = "block";

function navigateleft() {
    console.log("left", heroCounter)
    document.querySelector('#hero-image-' + heroCounter).style.display = "none";
    if (heroCounter === 1) {
        heroCounter = 4;
    } else {
        heroCounter--;
    }
    document.querySelector('#hero-image-' + heroCounter).style.display = "block";
}

function navigateright() {
    console.log("right", heroCounter)
    document.querySelector('#hero-image-' + heroCounter).style.display = "none";
    if (heroCounter === 4) {
        heroCounter = 1;
    } else {
        heroCounter++;
    }
    document.querySelector('#hero-image-' + heroCounter).style.display = "block";
}