window.i18nHomeSlider = function ({ currentLocale }) {

    const locales = {
        es: {
            HOME: {
                SLIDE1: {
                    "TEXT1": "Maximizamos",
                    "TEXT2": "la eficiencia de la cadena de suministros, generando valor"
                },
                SLIDE2: {
                    "TEXT1": "Importación, exportación y optimización logística:",
                    "TEXT2": "Servicios integrales que maximizan el rendimiento de tu cadena de suministros"
                },
                SLIDE3: {
                    "TEXT1": "Agilizamos las",
                    "TEXT2": "operaciones logísticas",
                    "TEXT3": "para maximizar la productividad y el rendimiento"
                },
            },
        },
        en: {
            HOME: {
                SLIDE1: {
                    TEXT1: "We maximize",
                    TEXT2: "the efficiency of the supply chain, creating value"
                },
                SLIDE2: {
                    TEXT1: "Import, export, and logistics optimization:",
                    TEXT2: "Comprehensive services that maximize the performance of your supply chain"
                },
                SLIDE3: {
                    TEXT1: "We streamline",
                    TEXT2: "logistics operations",
                    TEXT3: "to maximize productivity and performance"
                },
            },
        },
    };

    return locales[currentLocale] || locales["es"];
};