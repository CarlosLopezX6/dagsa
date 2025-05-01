export const defaultLang = 'es';
export const showDefaultLang = false;


export const languages: Record<
	string,
	{ code: string; name: string; }
> = {
	en: {
		code: 'en',
		name: 'English'
	},
	es: {
		code: 'es',
		name: 'Español'
	},
};


export const ui = {
	es: {
		'nav.inicio': 'Inicio',
		'nav.nosotros': 'Nosotros',
		'nav.servicios': 'Servicios',
		'nav.contacto': 'Contacto',
	},
	en: {
		'nav.inicio': 'Home',
		'nav.nosotros': 'About Us',
		'nav.servicios': 'Services',
		'nav.contacto': 'Contact',
	},
} as const;


export const routes = {
	es: {
		nosotros: "nosotros",
		servicios: "servicios",
		contacto: 'contacto',
	},
	en: {
		nosotros: "about",
		servicios: "services",
		contacto: 'contact',
	}
};



export const slideTranslations: any = {
	es: {
		HOME: {
			SLIDE1: {
				TEXT1: "Maximizamos",
				TEXT2: "la eficiencia de la cadena de suministros, generando valor"
			},
			SLIDE2: {
				TEXT1: "Importación, exportación y optimización logística:",
				TEXT2: "Servicios integrales que maximizan el rendimiento de tu cadena de suministros"
			},
			SLIDE3: {
				TEXT1: "Agilizamos las",
				TEXT2: "operaciones logísticas",
				TEXT3: "para maximizar la productividad y el rendimiento"
			}
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
			}
		},
	},
};

export function slidesGetI18N({ currentLocale }: any ) {
	return slideTranslations[currentLocale] || slideTranslations['es'];
}