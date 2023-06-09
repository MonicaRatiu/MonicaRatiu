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
const romanianFriend = new Section('https://www.facebook.com/your.romanianfriend', 'Romanian Friend', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum interdum lacus, ut pulvinar mi gravida vitae. Duis eu commodo erat. Curabitur placerat id elit sit amet mattis. Maecenas lobortis iaculis tincidunt. Mauris laoreet urna non leo ornare rhoncus. Nunc molestie dui a tortor sollicitudin efficitur. Pellentesque aliquam quam elit, non tempus odio auctor in. Aenean volutpat eu ipsum vel rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas nec arcu posuere, ullamcorper urna at, malesuada turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum cursus tempor porta. Ut venenatis gravida urna.');
const bippidiDesign = new Section('https://www.facebook.com/bippidi', 'Bippidi Design', 'Aunc auctor leo nec nulla porttitor tincidunt. Pellentesque id purus bibendum, iaculis massa eget, vestibulum sem. Suspendisse nec accumsan nunc. Quisque quis mauris euismod quam porttitor fringilla non a nibh. Duis tempor molestie magna, sit amet aliquet risus posuere ut. Vivamus gravida mauris vel ligula tempus, et rhoncus arcu fringilla. Quisque aliquam nibh tortor, eu pharetra est mollis vel. Pellentesque aliquam ac turpis sit amet finibus. Nulla facilisi. Suspendisse consequat arcu enim, vel tincidunt mi sollicitudin ut. Nullam dolor massa, aliquam eget porta quis, molestie non est. In eleifend lacus at enim blandit, nec porta magna pellentesque. Aenean at felis fringilla nisi pulvinar aliquam quis eget ex. Nunc eget hendrerit augue. Nunc hendrerit tincidunt sapien sed viverra.');
const musicHub = new Section('https://www.facebook.com/musichub.cluj', 'Music Hub', 'Mauris suscipit tristique consectetur. Donec faucibus dui tempor ultricies dictum. Sed aliquet vehicula velit sit amet feugiat. Suspendisse potenti. Mauris ultricies fringilla magna, vel dapibus ipsum commodo eget. Phasellus ultricies dignissim est, nec tincidunt metus vestibulum rhoncus. Praesent in vehicula ligula. Sed dignissim, magna ut tincidunt congue, ipsum turpis consequat elit, eget bibendum neque urna at sapien.');
const backtobasics = new Section("https://www.facebook.com/BackToBasics.ro", "Back to Basics", "Praesent maximus, massa eu consectetur scelerisque, sem ex ornare urna, vitae mattis tortor magna quis massa. Mauris convallis metus lobortis nisl egestas, in faucibus sapien ultrices. Pellentesque tincidunt tellus non cursus iaculis. Nullam ex ligula, ornare in ante in, imperdiet volutpat felis. Nullam scelerisque placerat posuere. Aliquam sit amet diam ipsum. Donec semper pretium ex, non vulputate est tempus nec.")
const projectsSection = new Section('#projects', 'Projects', 'Explore my portfolio.');

const main = document.querySelector('#project-list');
main.appendChild(romanianFriend.render());
main.appendChild(bippidiDesign.render());
main.appendChild(musicHub.render());
main.appendChild(backtobasics.render());

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