window.initHomeSlider = function (locale = 'es') {
    
    const i18n = window.i18nHomeSlider({ currentLocale: locale });

    let currentIndex = 0;

    const text1El = document.getElementById('slider-text1');
    const text2El = document.getElementById('slider-text2');
    const text3El = document.getElementById('slider-text3');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');

    if (!text1El || !text2El || !text3El || !prevBtn || !nextBtn) return;

    const slides = [
        {
            text1: { text: i18n.HOME.SLIDE1.TEXT1, style: "big" },
            text2: { text: i18n.HOME.SLIDE1.TEXT2, style: "normal" },
        },
        {
            text1: { text: i18n.HOME.SLIDE2.TEXT1, style: "big" },
            text2: { text: i18n.HOME.SLIDE2.TEXT2, style: "normal" },
        },
        {
            text1: { text: i18n.HOME.SLIDE3.TEXT1, style: "normal" },
            text2: { text: i18n.HOME.SLIDE3.TEXT2, style: "big" },
            text3: { text: i18n.HOME.SLIDE3.TEXT3, style: "normal" },
        },
    ];

    function applyText(el, slideText) {
        if (slideText) {
            el.textContent = slideText.text;
            el.className = `fade text-shadow-lg/30 ${slideText.style === 'big' ? 'font-bold text-3xl md:text-5xl lg:text-5xl' : 'text-sm md:text-xl lg:text-4xl'} show`;
        } else {
            el.textContent = '';
            el.className = 'fade text-shadow-lg/30 hidden';
        }
    }

    function showSlide(index) {
        text1El.classList.remove('show');
        text2El.classList.remove('show');
        text3El.classList.remove('show');

        setTimeout(() => {
            const slide = slides[index];
            applyText(text1El, slide.text1);
            applyText(text2El, slide.text2);
            applyText(text3El, slide.text3);
        }, 600);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    let interval = setInterval(nextSlide, 6000);

    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(nextSlide, 6000);
    }
};