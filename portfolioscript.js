document.addEventListener("DOMContentLoaded", () => {
    // Adjust Navigation Visibility
    const homeContainer = document.querySelector("#home");
    const nav = document.querySelector(".navbar");

    if (homeContainer && nav) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        nav.classList.add("hidden");  // Hide navigation
                    } else {
                        nav.classList.remove("hidden");  // Show navigation
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(homeContainer);
    }

    // Adjust Text Alignment
    const adjustTextAlignment = () => {
        const introName = document.getElementById('introName');
        const brand = document.getElementById('brand');
        if (introName && window.innerWidth < 576) {
            introName.innerHTML = "Hello, I'm <span style='color: #007bff;'>&lt;/Rex&gt;</span>";
        } else if (introName) {
            introName.textContent = "";
        }
        if (brand && window.innerWidth < 991) {
            brand.innerHTML = "<span style='color: white;'>&lt;/<span style='color: #007bff;'>Rex</span>&gt;</span>";
        } else if (brand) {
            brand.textContent = "";
        }
    };

    window.addEventListener('load', adjustTextAlignment);
    window.addEventListener('resize', adjustTextAlignment);

    // Typing Effect
    new Typed('#role', {
        strings: ['Web Developer.', 'Web Designer.', 'Graphic Designer.', 'Video Editor.'],
        typeSpeed: 100,
        loop: true,
        backDelay: 1000,
        backSpeed: 50
    });

    // Intersection Observer for Containers and Timeline
    const containers = document.querySelectorAll(".eaContainer");
    const timeline = document.querySelector(".timeline");

    if (containers.length > 0 && timeline) {
        const observer2 = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        timeline.classList.add("visible");
                    } else {
                        entry.target.classList.remove("visible");
                        timeline.classList.remove("visible");
                    }
                });
            },
            { threshold: 0.01 }
        );

        containers.forEach((container) => observer2.observe(container));
        observer2.observe(timeline);
    }

    // General Animation Observers
    const leftAnimate = document.querySelectorAll(".animate-left-to-right");
    const rightAnimate = document.querySelectorAll(".animate-right-to-left");
    const centerAnimate = document.querySelectorAll(".animate-center");
    const downAnimate = document.querySelectorAll(".animate-down");

    const observer3 = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        },
        { threshold: 0.3 }
    );

    leftAnimate.forEach((el) => observer3.observe(el));
    rightAnimate.forEach((el) => observer3.observe(el));
    centerAnimate.forEach((el) => observer3.observe(el));
    downAnimate.forEach((el) => observer3.observe(el));

    // Navbar Toggler Logic
    const navbarToggler = document.querySelector('.navbar-toggler');
    const containerNav = document.querySelector('.container-nav');
    const collapse = document.querySelector('.collapse');

    if (navbarToggler && containerNav && collapse) {
        navbarToggler.addEventListener('click', () => {
            containerNav.classList.toggle('open');
            collapse.style.display = containerNav.classList.contains('open') ? 'block' : 'none';
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        emailjs.init("wTK2bWVUAu2mpLKRa"); // Replace with your EmailJS User ID
    
        // Handle form submission
        document.getElementById("contactForm").addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent actual form submission
    
            // Collect form data matching EmailJS template placeholders
            let formData = {
                to_name: "John Rex",  // The recipient's name (static or dynamic)
                from_name: document.getElementById("name").value,  // Sender's name from the form
                email: document.getElementById("email").value,  // Sender's email from the form
                phone: document.getElementById("phone").value,  // Sender's phone number from the form
                message: document.getElementById("message").value  // Sender's message from the form
            };
    
            emailjs.send("service_3ol2ajs", "template_7tvvyeb", formData)
                .then(function (response) {
                    alert("Email sent successfully!");
                    document.getElementById("contactForm").reset(); // Clear form after submission
                    var modal = bootstrap.Modal.getInstance(document.getElementById('confirmationModal'));
                    modal.hide(); // Hide modal after submission
                }, function (error) {
                    alert("Error sending email: " + error.text);
                });
        });
    
        // Add event listener to modalSubmit button to trigger emailJS when confirmed
        document.getElementById("modalSubmit").addEventListener("click", function () {
            document.getElementById("contactForm").dispatchEvent(new Event("submit"));
        });
    });
});



