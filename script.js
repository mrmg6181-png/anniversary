const heartsContainer = document.querySelector(".hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["❤️","💗","💕","💖"];

    heart.innerHTML =
    hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random()*25) + "px";

    heart.style.animationDuration = (4 + Math.random()*4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);

}

setInterval(createHeart,300);

const startDate = new Date("December 9, 2022 00:00:00");

function updateCounter(){

    const now = new Date();

    let diff = now - startDate;

    let totalSeconds = Math.floor(diff / 1000);

    let totalDays = Math.floor(totalSeconds / 86400);

    let years = Math.floor(totalDays / 365);

    totalDays %= 365;

    let months = Math.floor(totalDays / 30);

    let days = totalDays % 30;

    let remainingSeconds = totalSeconds % 60;

    let remainingMinutes = Math.floor(totalSeconds / 60) % 60;

    let remainingHours = Math.floor(totalSeconds / 3600) % 24;

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = remainingHours;
    document.getElementById("minutes").textContent = remainingMinutes;
    document.getElementById("seconds").textContent = remainingSeconds;
}

setInterval(updateCounter,1000);

updateCounter();

const petals = document.querySelector(".petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌹";

    petal.style.left = Math.random()*100 + "vw";

    petal.style.animationDuration =
        (6 + Math.random()*5) + "s";

    petal.style.fontSize =
        (18 + Math.random()*20) + "px";

    petals.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },11000);

}

setInterval(createPetal,700);

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.onclick = () =>{

    if(playing){

        music.pause();

        musicBtn.innerHTML = "🔇";

    }else{

        music.play();

        musicBtn.innerHTML = "🔊";

    }

    playing = !playing;

};

const message =
`Dear Thamu,

Every day with you
is my favorite memory.

Thank you for always
making me smile.

I Love You Forever ❤️`;

const typingText = document.getElementById("typingText");

let index = 0;

function typeLetter(){

    if(index < message.length){

        typingText.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeLetter,60);

    }

}

setTimeout(()=>{

    typeLetter();

},2500);

// Loading Screen

window.addEventListener("load",()=>{

    setTimeout(()=>{

        const loader = document.getElementById("loader");

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },800);

    },2000);

});

function celebrateLove(){

    confetti({
        particleCount:150,
        spread:90,
        origin:{ y:0.6 }
    });

}

window.addEventListener("load",()=>{

    setTimeout(()=>{

        celebrateLove();

    },2200);

});

if (document.querySelector(".mySwiper")) {

    const swiper = new Swiper(".mySwiper", {
        loop: true,

        autoplay: {
            delay: 3000,
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

}

const enterBtn = document.getElementById("enterBtn");


enterBtn.onclick = ()=>{

    document.querySelector(".timeline")
    .scrollIntoView({
        behavior:"smooth"
    });

};

// ==========================
// Mobile Menu
// ==========================

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.onclick = ()=>{

    navLinks.classList.toggle("active");

};

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});

// ==========================
// Dark / Light Mode
// ==========================

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){

    document.body.classList.add("light-mode");

    themeBtn.innerHTML = "☀️";

}

themeBtn.onclick = ()=>{

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        confetti({

    particleCount:40,

    spread:60,

    origin:{ y:0.2 }

});

        themeBtn.innerHTML = "☀️";

        localStorage.setItem("theme","light");

    }else{

        themeBtn.innerHTML = "🌙";

        localStorage.setItem("theme","dark");

    }

};
// ==========================
// Gallery Lightbox
// ==========================

const galleryImages = document.querySelectorAll(".swiper-slide img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

const prevImage = document.getElementById("prevImage");
const nextImage = document.getElementById("nextImage");

let currentImage = 0;

// ပုံကိုနှိပ်ရင် Lightbox ပွင့်မယ်
galleryImages.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        currentImage = index;

        lightbox.style.display = "flex";

        lightboxImg.src = galleryImages[currentImage].src;

    });

});

// ✕ ကိုနှိပ်ရင်ပိတ်မယ်
closeLightbox.addEventListener("click",()=>{

    lightbox.style.display = "none";

});

// Background ကိုနှိပ်ရင်လည်းပိတ်မယ်
lightbox.addEventListener("click",(e)=>{

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

});
// ==========================
// Previous Image
// ==========================

prevImage.addEventListener("click",()=>{

    currentImage--;

    if(currentImage < 0){

        currentImage = galleryImages.length - 1;

    }

    lightboxImg.src = galleryImages[currentImage].src;

});

// ==========================
// Next Image
// ==========================

nextImage.addEventListener("click",()=>{

    currentImage++;

    if(currentImage >= galleryImages.length){

        currentImage = 0;

    }

    lightboxImg.src = galleryImages[currentImage].src;

});
// ==========================
// Keyboard Support
// ==========================

document.addEventListener("keydown",(e)=>{

    // Lightbox မဖွင့်ထားရင် ဘာမှမလုပ်ဘူး
    if(lightbox.style.display !== "flex") return;

    if(e.key === "ArrowLeft"){

        prevImage.click();

    }

    if(e.key === "ArrowRight"){

        nextImage.click();

    }

    if(e.key === "Escape"){

        lightbox.style.display = "none";

    }

});
// ==========================
// Timeline Scroll Animation
// ==========================

const timelineItems = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.3
});

timelineItems.forEach(item=>{

    observer.observe(item);

});
// ==========================
// Glass Card 3D Tilt
// ==========================

const glassCard = document.querySelector(".glass-card");

if (glassCard) {

    glassCard.addEventListener("mousemove",(e)=>{

        const rect = glassCard.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width / 2) / 20;
        const rotateX = (rect.height / 2 - y) / 20;

        glassCard.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)`;

    });

    glassCard.addEventListener("mouseleave",()=>{

        glassCard.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

}
// ==========================
// Scroll Progress Bar
// ==========================

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

});
// ==========================
// Premium Scroll Reveal
// ==========================

const revealElements =
document.querySelectorAll(
".hero-right, .gallery h2, .swiper, .timeline h2, .love-letter"
);


const revealObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add(
                "show-section"
            );

        }

    });

},{
    threshold:0.2
});


revealElements.forEach(element=>{

    revealObserver.observe(element);

});
// ==========================
// Cursor Glow Movement
// ==========================

const cursorGlow =
document.querySelector(".cursor-glow");


if(cursorGlow){

document.addEventListener(
"mousemove",
(e)=>{

    cursorGlow.style.left =
    e.clientX + "px";


    cursorGlow.style.top =
    e.clientY + "px";

});

}