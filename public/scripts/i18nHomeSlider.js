window.i18nHomeSlider = function ({ currentLocale }) {

    const locales = {
        es: {
            HOME: {
                SLIDE1: {
                    "TEXT1": "Maximizamos",
                    "TEXT2": "la cadena de suministros generando valor"
                },
                SLIDE2: {
                    "TEXT1": "Importación y exportación,",
                    "TEXT2": "servicios integrales que maximizan el rendimiento de tu cadena de suministros"
                },
                SLIDE3: {
                    "TEXT1": "Agilizamos las",
                    "TEXT2": "operaciones logísticas,",
                    "TEXT3": "garantizando la disponibilidad de tus inventarios"
                },
            },
        },
        en: {
            HOME: {
                SLIDE1: {
                    TEXT1: "We optimize",
                    TEXT2: "the supply chain to create value"
                },
                SLIDE2: {
                    TEXT1: "We offer integrated import and export services",
                    TEXT2: "that provide comprehensive solutions to boost your supply chain performance"
                },
                SLIDE3: {
                    TEXT1: "We expedite",
                    TEXT2: "logistics activities",
                    TEXT3: "to maintain the readiness of your inventories"
                },
            },
        },
    };

    return locales[currentLocale] || locales["es"];
};