window.initSectoresSlider = function (locale = 'es') {

    const i18n = window.i18nSectoresSlider({ currentLocale: locale });

    let current = 0;
    const bg = document.getElementById("bg-container");
    const listItems = document.querySelectorAll("#sectors-list li");

    if (!bg || listItems.length === 0) return;

    const sectors = [
        { name: i18n.SERVICES.SECTORS.SECTOR_SLIDE1.SECTOR, image: "/images/services/alimenticio.webp" },
        { name: i18n.SERVICES.SECTORS.SECTOR_SLIDE2.SECTOR, image: "/images/services/automotriz.webp" },
        { name: i18n.SERVICES.SECTORS.SECTOR_SLIDE3.SECTOR, image: "/images/services/carga.webp" },
        { name: i18n.SERVICES.SECTORS.SECTOR_SLIDE4.SECTOR, image: "/images/services/manufacturero.webp" },
        { name: i18n.SERVICES.SECTORS.SECTOR_SLIDE5.SECTOR, image: "/images/services/metalurgico.webp" },
    ];

    function changeSlide() {
        listItems[current].classList.remove("text-[#dddb0a]", "text-4xl", "md:text-5xl");
        listItems[current].classList.add("text-white", "text-3xl", "md:text-4xl");

        current = (current + 1) % sectors.length;

        bg.style.backgroundImage = `url('${sectors[current].image}')`;

        listItems[current].classList.remove("text-white", "text-3xl", "md:text-4xl");
        listItems[current].classList.add("text-[#dddb0a]", "text-4xl", "md:text-5xl");
    }

    // Limpiar intervalo anterior si lo hubiera (opcional por robustez)
    if (window.sectorsSliderInterval) clearInterval(window.sectorsSliderInterval);

    window.sectorsSliderInterval = setInterval(changeSlide, 4000);

}