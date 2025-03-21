

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const form = event.target;
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById("successMessage").style.display = "block";
            form.reset();
        } else {
            alert("There was an error submitting the form. Please try again.");
        }
    }).catch(error => {
        alert("There was an error submitting the form. Please try again.");
    });
});

function scrollToSection(event, sectionId) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

const scrollToTopBtn = document.getElementById("scrollToTopBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    // console.log("scrollY", window.scrollY);
    // console.log("doctop", document.documentElement.scrollTop);
    // console.log("offHt", document.body.offsetHeight);
    // console.log("inn", window.innerHeight );
    // console.log("scrolly", window.scrollY);
    // console.log("tot", window.innerHeight + window.scrollY);
    // console.log("scrollHt", document.body.scrollHeight);

    if (document.documentElement.scrollTop < 100 || (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        scrollToTopBtn.style.display = "none";
    } else {
        scrollToTopBtn.style.display = "block";
    }

    // if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    //     scrollToTopBtn.style.display = "none";
    // }
};

// When the user clicks on the button, scroll to the top of the document
// scrollToTopBtn.addEventListener("click", function () {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// });