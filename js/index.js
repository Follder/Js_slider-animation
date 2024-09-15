window.addEventListener("DOMContentLoaded", () => {
  /* Customize your slider here */
  const data = [
    {
      id: 1,
      text: "“The first time I used the Samsung Bespoke Jet™, I cried. I’m not being sensational; I really did. Of course, this vacuum worked great. But that’s not all.” ",
      url: "img/slides/01.jpg",
      readMore: '#45454545',
      triggerBtn: '',
    },
    {
      id: 2,
      text: "“If you’re an over-cleaner, like myself, you’ll nerd out on all of the functions. If you avoid this chore at all costs, you’ll appreciate how simple Samsung makes it.”",
      url: "img/slides/02.jpg",
      readMore: '',
      triggerBtn: '',
    },
    {
      id: 3,
      text: "“Both the floor and pet hair attachments are cleverly designed to eliminate the dreaded hair wrap. (In other words, you’ll never have to tackle hair tangles with a pair of scissors again.)”",
      url: "img/slides/03.jpg",
      readMore: '',
      triggerBtn: '',
    },
    {
      id: 4,
      text: "“When I learned the Samsung Bespoke Vac cleaned itself with amazing technology, that’s when I cried. No more scraping spider legs and hair out of the crevices with my hands. Its suction power is so strong, the canister is left perfectly clean after every use. It’s like a vacuum for your vacuum.” ",
      url: "img/slides/04.jpg",
      readMore: '',
      triggerBtn: '',
    },
    {
      id: 5,
      text: "“Because it’s so nice-looking, it can live right in the kitchen. No more hauling a vacuum up and down the basement stairs on the daily”",
      url: "img/slides/05.jpg",
      readMore: '',
      triggerBtn: '',
    },
    {
      id: 6,
      text: "“Because it’s so nice-looking, it can live right in the kitchen. No more hauling a vacuum up and down the basement stairs on the daily”",
      url: "https://img.freepik.com/free-photo/wide-angle-shot-of-a-single-tree-growing-under-a-clouded-sky-during-a-sunset-surrounded-by-grass_181624-22807.jpg",
      readMore: '',
      triggerBtn: '',
    },
    {
      id: 7,
      text: "“Because it’s so nice-looking, it can live right in the kitchen. No more hauling a vacuum up and down the basement stairs on the daily”",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpdV5eKcBMzjs7ltDev4YxvWvnNxcFk7wUg&s",
      readMore: '',
      triggerBtn: '',
    },
  ];

  const AUTO_PLAY_DELAY = 4000;

  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");
  const navbar = document.querySelector('.navigation');
  const current = document.querySelector(".current-slide");
  const total = data.length;
  let counter = 1;
  let intervalId;

  current.textContent = counter;
  document.querySelector(".total-slides").textContent = total;

  /* Change slide */

  const getSlide = (id) => {
    const currentImg = document.querySelector(".current-slide-img");
    const nextImg = document.querySelector(".next-slide-img");
    const readMoreLink = document.querySelector('.slider-info_link');
    const btn = document.querySelector('.btn a');

    gsap.to(".slider-info", {
      duration: 0.5,
      opacity: 0,
      onComplete: () => {
        document.querySelector(".slider-info_text").textContent =
          data[id - 1].text;

        gsap.to(".slider-info", {
          duration: 0.5,
          opacity: 1,
        });
      },
    });

    btn.setAttribute('href', data[id - 1].triggerBtn);
    readMoreLink.setAttribute('href', data[id - 1].readMore);
    nextImg.setAttribute("src", data[id - 1].url);
    gsap.to(nextImg, { opacity: 1 });

    gsap.to(currentImg, {
      duration: 0.5,
      opacity: 0,

      onComplete: () => {
        gsap.to(currentImg, { opacity: 1 });
        currentImg.setAttribute("src", nextImg.getAttribute("src"));
      },
    });
  };

  const nextSlide = () => {
    counter++;

    if (counter > data.length) {
      counter = 1;
    }

    getSlide(counter);
    current.textContent = counter;
  }

  const prevSlide = () => {
    counter--;

    if (counter < 1) {
      counter = data.length;
    }

    getSlide(counter);
    current.textContent = counter;
  }

  /* Auto play slider */

  const startAutoPlay = () => {
    intervalId = setInterval(() => nextSlide(), AUTO_PLAY_DELAY);
  };

  const stopAutoPlay = () => {
    clearInterval(intervalId);
  }

  /*** Start screen animation ***/

  const mm = gsap.matchMedia();

  /* For desktop */
  mm.add("(min-width: 576px)", () => {
    gsap.from(".logo", {
      duration: 1,
      x: -300,
      onComplete: () => {
        gsap.to(".logo", { duration: 1, y: 0 });
        gsap.to(".slider-title_l1", { duration: 1, delay: 0.5, x: 0 });
        gsap.to(".slider-title_l2", { duration: 1, delay: 0.7, x: 0 });
        gsap.to(".slider-title_l3", {
          duration: 1,
          delay: 0.9,
          x: 0,
          onComplete: () => {
            gsap.to(".slider-content-fill", { duration: 1, right: 0 });
            gsap.to(".btn", { delay: 0.8, duration: 0, display: "flex" });
            gsap.to(".slider-info", {
              delay: 0.8,
              duration: 0,
              display: "block",
            });
            gsap.to(".navigation", {
              delay: 0.8,
              duration: 0,
              display: "flex",
            });
            gsap.to(".slider-wrapper", {
              duration: 1,
              backgroundPosition: "275px 25%",
              backgroundSize: "81%",
              ease: "power2.out",
              onComplete: () => {
                gsap.to(".promo", { duration: 0, display: "none" });
                gsap.to(".slider-images", { duration: 0.5, opacity: 1 });
                gsap.to(".btn", { duration: 1, opacity: 1 });
                gsap.to(".slider-info", { duration: 1, opacity: 1 });
                gsap.to(".navigation", { duration: 1, opacity: 1 });
                startAutoPlay();
              },
            });
          },
        });
      },
    });
  });

  /* For mobile */
  mm.add("(max-width: 575px)", () => {
    gsap.from(".logo", {
      duration: 1,
      x: -300,
      onComplete: () => {
        gsap.to(".logo", { duration: 1, y: 0 });
        gsap.to(".slider-title_l1", { duration: 1, delay: 0.5, x: 0 });
        gsap.to(".slider-title_l2", { duration: 1, delay: 0.7, x: 0 });
        gsap.to(".slider-title_l3", {
          duration: 1,
          delay: 0.9,
          x: 0,
          onComplete: () => {
            gsap.to(".slider-content-fill", { duration: 1, bottom: 0 });
            gsap.to(".btn", { delay: 0.8, duration: 0, display: "flex" });
            gsap.to(".slider-info", {
              delay: 0.8,
              duration: 0,
              display: "block",
            });
            gsap.to(".navigation", {
              delay: 0.8,
              duration: 0,
              display: "flex",
            });
            gsap.to(".slider-wrapper", {
              duration: 1,
              backgroundPosition: "76% 119%",
              backgroundSize: "180%",
              ease: "power2.out",
              onComplete: () => {
                gsap.to(".promo", { duration: 0, display: "none" });
                gsap.to(".slider-images", { duration: 0.5, opacity: 1 });
                gsap.to(".btn", { duration: 1, opacity: 1 });
                gsap.to(".slider-info", { duration: 1, opacity: 1 });
                gsap.to(".navigation", { duration: 1, opacity: 1 });
                gsap.to(".slider-annotation", { duration: 1, opacity: 1 });
                gsap.to(".brand", { duration: 1, opacity: 1 });
                startAutoPlay();
              },
            });
          },
        });
      },
    });
  });

  gsap.from(".promo-title", { duration: 1, x: -300 });
  gsap.from(".promo-subtitle", { duration: 1, x: -200 });

  /* Trigger button animation */

  const pulse = gsap.to(".btn", {
    duration: 1,
    scale: 1.05,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });

  document.querySelector(".btn").addEventListener("mouseover", () => {
    pulse.pause();
  });

  document.querySelector(".btn").addEventListener("mouseleave", () => {
    pulse.play();
  });

  /* Arrow navigation events */

  arrowRight.addEventListener("click", () => {
    nextSlide();

    gsap.to(arrowRight, {
      scale: 0.8, onComplete: () => {
      gsap.to(arrowRight, {scale: 1})
    } })
  });

  arrowLeft.addEventListener("click", () => {
    prevSlide();

    gsap.to(arrowLeft, {
      scale: 0.8, onComplete: () => {
      gsap.to(arrowLeft, {scale: 1})
    } })
  });

  navbar.addEventListener('mouseover', stopAutoPlay);
  navbar.addEventListener('mouseleave', startAutoPlay);
});
