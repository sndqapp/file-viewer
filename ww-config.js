export default{
	inherit: {
		type: 'ww-text',
		exclude: ['text'],
	},
	editor: {
		label: { en: 'Form Input', fr: 'Entrée de Formulaire' },
		customStylePropertiesOrder: [
			'placeholderColor',
			'advancedPlaceholder',
			'forceAnimation',
			[
				'animationTrigger',
				'placeholderPosition',
				'placeholderScaling',
				'positioningAjustment',
				'transition',
				'timingFunction',
			],
		],
	},
	triggerEvents: [
		{ name: 'change', label: { en: 'On change' }, event: { value: '' }, default: true },
		{ name: 'initValueChange', label: { en: 'On init value change' }, event: { value: '' } },
	],
	properties: {
		fileurl: {
            label: { en: 'File URL' },
            type: 'Text',
            section: 'settings',
            bindable: true,
            defaultValue: 'https://weweb-production.s3.amazonaws.com/designs/5fdf509b-9db3-44af-9974-1f631c06a0b9/files/sample-3pp.pdf'
        },
		FullHeightOfParent:{
			label: { en: 'Full Height Of Parent' },
			type: 'OnOff',
			section: 'settings',
			defaultValue: false
		},
		height: {
			label: { en: 'Height' },
			type: 'Number',
			section: 'settings',
			defaultValue: '529',
			bindable: true,
		},
		FullWidthOfParent:{
			label: { en: 'Full Width Of Parent' },
			type: 'OnOff',
			section: 'settings',
			defaultValue: false
		},
		width: {
			label: { en: 'Width' },
			type: 'Number',
			section: 'settings',
			defaultValue: '400',
			bindable: true,
		},
		OverflowY: {
			label: { en: 'OverflowY' },
			type: 'TextSelect',
			options: {
				options: [
					{ value: 'scroll', label: { en: 'Scroll bar' } },
					{ value: 'cut', label: { en: 'Cut off' } },
					{ value: 'grow', label: { en: 'Grow' } },
				],
			},
			responsive: true,
			defaultValue: 'scroll',
			hidden: content => !content.advancedPlaceholder,
		},
		NoFileText: {
            label: { en: 'No File Text' },
            type: 'Text',
            section: 'settings',
            bindable: true,
            defaultValue: 'No file selected'
        },
		MenuPadding:{
			label: { en: 'MenuPadding' },
			type: 'Number',
			section: 'settings',
			defaultValue: ''
		},
		stepZoomScale:{
			label: { en: 'stepZoomScale' },
			type: 'Number',
			section: 'settings',
			defaultValue: '10'
		},
		MaxAllowedZoomScale:{
			label: { en: 'MaxAllowedZoomScale' },
			type: 'Number',
			section: 'settings',
			defaultValue: '500'
		},
		MinAllowedZoomScale:{
			label: { en: 'MinAllowedZoomScale' },
			type: 'Number',
			section: 'settings',
			defaultValue: '10'
		},
		ShowFileNav:{
			label: { en: 'ShowFileNav' },
			type: 'OnOff',
			section: 'settings',
			defaultValue: false
		}
	}
};