var typed = new Typed(".typing",{
    strings:["Industrial computer technician","Machine vision technician","Web, mobile Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})




// Add this to your script.js for toggling navigation on small screens
document.querySelector('.nav-toggler').addEventListener('click', () => {
    document.querySelector('.aside').classList.toggle('open');
    document.querySelector('.nav-toggler').classList.toggle('active');
});



document.querySelector('.nav-toggler').addEventListener('click', () => {
    document.querySelector('.aside').classList.toggle('open');
    document.body.classList.toggle('menu-open');
});