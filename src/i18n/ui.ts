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