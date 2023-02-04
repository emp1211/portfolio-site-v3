const reveal = () => {
    // Select all elements to reveal
    let reveals = document.querySelectorAll(".reveal");

    // Determine element relative positions
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight; // vh
        let elementTop = reveals[i].getBoundingClientRect().top; // distance of element from top of vp
        let elementHeightToReveal = 150; 
    
        // Check if element is in viewport
        if (elementTop < windowHeight - elementHeightToReveal) {
            reveals[i].classList.add("active");
        } 
    } 
};

window.addEventListener("scroll", reveal);

reveal();

console.log('js linked and run');