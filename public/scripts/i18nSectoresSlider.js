window.i18nSectoresSlider = function ({ currentLocale }) {

    const locales = {
        es: {
            SERVICES: {
                SECTORS: {
                    SECTOR_SLIDE1: {
                        SECTOR: "Alimenticion"
                    },
                    SECTOR_SLIDE2: {
                        SECTOR: "Automotriz"
                    },
                    SECTOR_SLIDE3: {
                        SECTOR: "Carga Proyecto"
                    },
                    SECTOR_SLIDE4: {
                        "SECTOR": "Manufacturero"
                    },
                    SECTOR_SLIDE5: {
                        "SECTOR": "Metalúrgico"
                    }
                },
            }
        },
        en: {
            SERVICES: {
                SECTORS: {
                    SECTOR_SLIDE1: {
                        SECTOR: "Food"
                    },
                    SECTOR_SLIDE2: {
                        SECTOR: "Automotive"
                    },
                    SECTOR_SLIDE3: {
                        SECTOR: "Project Cargo"
                    },
                    SECTOR_SLIDE4: {
                        SECTOR: "Manufacturing"
                    },
                    SECTOR_SLIDE5: {
                        SECTOR: "Metallurgica"
                    }
                }
            }
        },
    };

    return locales[currentLocale] || locales["es"];
};