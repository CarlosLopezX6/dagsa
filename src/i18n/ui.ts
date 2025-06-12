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
		'nav.avisoPrivacidad': "Aviso de privacidad",
		'nav.politicaLegal': "Política legal",
		'nav.politicaCookies': "Política de cookies",
	},
	en: {
		'nav.inicio': 'Home',
		'nav.nosotros': 'About Us',
		'nav.servicios': 'Services',
		'nav.contacto': 'Contact',
		'nav.avisoPrivacidad': "Privacy notice",
		'nav.politicaLegal': "Legal policy",
		'nav.politicaCookies': "Cookie policy",
	},
} as const;


export const routes = {
	es: {
		nosotros: "nosotros",
		servicios: "servicios",
		contacto: 'contacto',
		"aviso-privacidad": 'aviso-privacidad',
		"politica-legal": 'politica-legal',
		"politica-cookies": 'politica-cookies',
	},
	en: {
		nosotros: "about",
		servicios: "services",
		contacto: 'contact',
		"aviso-privacidad": 'privacy-notice',
		"politica-legal": 'legal-policy',
		"politica-cookies": 'cookie-policy',
	}
};