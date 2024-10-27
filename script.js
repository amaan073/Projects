
document.addEventListener('DOMContentLoaded', function() {
    const navbarItems = document.querySelectorAll('.navbar-item');

    navbarItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const contactBtn = document.getElementById("contact");
    contactBtn.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });




    //FADE IN ANIMATION


    const fadeInElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    },{
        threshold: 0.25   //for the animation to only happen when we reach 25% across the target div
    });

    //applying the observer function to all the elements to we want to applly the animation
    fadeInElements.forEach(element => {
        observer.observe(element);
    });


    //for responsive navbar menu

    const sections = document.querySelectorAll("section");

    let currentActiveLink = null;

    const observerForNavbar = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                let targetName = entry.target.classList[1];
                targetName = targetName.charAt(0).toUpperCase() + targetName.slice(1);
                const targetLink = document.querySelector(`[data-target="${targetName}"]`)  //selects the navbar item with the value of targetName
                
                if (currentActiveLink) {
                    currentActiveLink.classList.remove('underline');
                }


                targetLink.classList.add('underline');

                currentActiveLink = targetLink;
                
            }
        })
    });

    sections.forEach((section) => {
        observerForNavbar.observe(section);
    })


    //dropdown button function

    const dropdownBtn = document.querySelector(".dropdownBtn");
    console.log(dropdownBtn)
});


