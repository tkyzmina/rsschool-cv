const tl = gsap.timeline({
    duration: 1,
    ease: "power2.out"
});

tl.fromTo('.header',{y:"-100%", opacity:0},{y:'0%', opacity:1});
tl.fromTo('.page__wrapper__a1',{x:'-100%', opacity:0},{x:'0%', opacity:1});
tl.fromTo('.page__wrapper__a2',{x:"100%", opacity:0},{x:0, opacity:1});
tl.fromTo('.tg-icon', { y: 0, x: 0, opacity: 1, scale: 1 }, { y: -20, x: 20, opacity: 0, scale: 0.5, duration: 2.5, repeat: -1 });

gsap.fromTo('.discord-icon', { fill: "#000000", scale: 1 }, { fill: '#5865f2', scale: 1.2, yoyo: true, repeat: -1, duration: 2.5 });

const emailContainer = document.querySelector('.header__item--email');
gsap.set('.flap', { transformOrigin: 'top' });

function animateEmail(e) {
    e.preventDefault();
    tl.fromTo('.messages-svg', { scale: 1 }, { scale: 0.9 });
    tl.fromTo('.flap', { scale: 1 }, { scale: -1 }, '<50%');
    tl.fromTo('.messages-svg', { scale: 0.9 }, { scale: 1 }, '<50%');
    tl.fromTo('.note', { y: 0, opacity: 1, }, { y: -40, opacity: 0, duration: 0.75 });
    tl.to('.flap', { scale: 1 }, '<50%');
}

emailContainer.addEventListener('click', animateEmail)
