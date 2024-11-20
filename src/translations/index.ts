export const translations = {
	en: {
		// Navigation
		logTimeWasted: 'Log Time Wasted',
		statistics: 'Statistics',
		
		// Main page
		timeWasterTracker: 'Time Waster Tracker',
		minutesWasted: 'Minutes wasted',
		logTime: 'Log Time',
		recentTimeWasted: 'Recent Time Wasted',
		minutes: 'Minutes',
		
		// Statistics page
		detailedStatistics: 'Detailed Statistics',
		totalActivitiesLogged: 'Total activities logged',
		totalTimeWasted: 'Total time wasted',
		hours: 'hours',

		// Form
		name: 'Name',
		category: 'Category',
		duration: 'Duration',
		add: 'Add',
		delete: 'Delete',

		// Language selector
		selectLanguage: 'Select Language',
		english: 'English',
		spanish: 'Spanish'
	},
	es: {
		// Navigation
		logTimeWasted: 'Registrar Tiempo Perdido',
		statistics: 'Estadísticas',
		
		// Main page
		timeWasterTracker: 'Registro de Tiempo Perdido',
		minutesWasted: 'Minutos perdidos',
		logTime: 'Registrar Tiempo',
		recentTimeWasted: 'Tiempo Perdido Reciente',
		minutes: 'Minutos',
		
		// Statistics page
		detailedStatistics: 'Estadísticas Detalladas',
		totalActivitiesLogged: 'Total de actividades registradas',
		totalTimeWasted: 'Tiempo total perdido',
		hours: 'horas',

		// Form
		name: 'Nombre',
		category: 'Categoría',
		duration: 'Duración',
		add: 'Agregar',
		delete: 'Eliminar',

		// Language selector
		selectLanguage: 'Seleccionar Idioma',
		english: 'Inglés',
		spanish: 'Español'
	}
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;

export const getTranslation = (language: Language, key: TranslationKey): string => {
	return translations[language][key];
};