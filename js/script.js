document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', function() {
        card.style.backgroundColor = '#f0f0f0';
    });
    card.addEventListener('mouseout', function() {
        card.style.backgroundColor = '';
    });
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent.',
        icon: 'success',
        confirmButtonText: 'OK'
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelectorAll('.card-img-top').forEach(img => {
    img.addEventListener('click', function() {
        if (img.style.transform === 'scale(1.5)') {
            img.style.transform = 'scale(1)';
        } else {
            img.style.transform = 'scale(1.5)';
        }
    });
});

window.addEventListener('load', function() {
    Swal.fire({
        title: 'Welcome!',
        text: 'Welcome to our magazine website.',
        icon: 'info',
        confirmButtonText: 'OK'
    });
});

