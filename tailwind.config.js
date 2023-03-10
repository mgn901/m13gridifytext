/**@type {import('tailwindcss').Config}*/
module.exports = {
	content: ['src/**/*.{html,tsx}'],
	theme: {
		colors: {
			'gw-light': {
				'0': '#ffffff',
				'1': '#ebeae9',
				'2': '#d8d5d3',
				'3': '#c5c0be',
				'4': '#b2aca9',
				'5': '#a09995',
				'6': '#8e8581',
				'7': '#7c736d',
				'8': '#6a615c',
				'9': '#59514c',
				'10': '#49413c',
				'11': '#39312c',
				'12': '#29221e',
				'13': '#1b140f',
				'14': '#000000',
			},
			'gc-light': {
				'0': '#ffffff',
				'1': '#e8eaed',
				'2': '#d1d6db',
				'3': '#bbc2c9',
				'4': '#a5afb7',
				'5': '#909ba6',
				'6': '#7b8995',
				'7': '#667685',
				'8': '#556573',
				'9': '#455461',
				'10': '#354451',
				'11': '#253440',
				'12': '#162531',
				'13': '#061722',
				'14': '#000000',
			},
			'rd-light': {
				'0': '#fee7ef',
				'1': '#fdcfde',
				'2': '#fab6ce',
				'3': '#f69dbe',
				'4': '#f184af',
				'5': '#eb68a0',
				'6': '#e44991',
				'7': '#dc1a82',
				'8': '#c90072',
				'9': '#b70063',
				'10': '#a40055',
				'11': '#920046',
				'12': '#7f0039',
				'13': '#6d002b',
				'14': '#5b001f',
			},
			'yl-light': {
				'0': '#f1ede0',
				'1': '#e2dbc1',
				'2': '#d3caa3',
				'3': '#c4b985',
				'4': '#b4a868',
				'5': '#a4984b',
				'6': '#93882d',
				'7': '#827800',
				'8': '#716900',
				'9': '#605a00',
				'10': '#504b00',
				'11': '#423d00',
				'12': '#362f00',
				'13': '#2d2100',
				'14': '#271400',
			},
			'gr-light': {
				'0': '#e4f0e7',
				'1': '#c8e1cf',
				'2': '#add2b8',
				'3': '#92c3a1',
				'4': '#77b48b',
				'5': '#5aa575',
				'6': '#3a9660',
				'7': '#00874b',
				'8': '#00773c',
				'9': '#00672e',
				'10': '#005820',
				'11': '#004912',
				'12': '#003a03',
				'13': '#002c00',
				'14': '#002300',
			},
			'bu-light': {
				'0': '#eaecfd',
				'1': '#d4dafb',
				'2': '#bec7f8',
				'3': '#a6b6f6',
				'4': '#8da4f3',
				'5': '#7193f0',
				'6': '#4e83ed',
				'7': '#0073ea',
				'8': '#0064d8',
				'9': '#0055c6',
				'10': '#0047b5',
				'11': '#003aa3',
				'12': '#002d93',
				'13': '#002282',
				'14': '#001772',
			},
			'gw-dark': {
				'0': '#000000',
				'1': '#1f1813',
				'2': '#312a25',
				'3': '#453d38',
				'4': '#5a524d',
				'5': '#706762',
				'6': '#877d78',
				'7': '#9e948e',
				'8': '#aba39e',
				'9': '#b9b2ad',
				'10': '#c6c1bd',
				'11': '#d4d0cd',
				'12': '#e2dfde',
				'13': '#f1efee',
				'14': '#ffffff',
			},
			'gc-dark': {
				'0': '#000000',
				'1': '#0b1b26',
				'2': '#1e2d39',
				'3': '#31414d',
				'4': '#465563',
				'5': '#5b6b79',
				'6': '#71818f',
				'7': '#8898a7',
				'8': '#98a6b3',
				'9': '#a9b4bf',
				'10': '#bac3cc',
				'11': '#cbd2d8',
				'12': '#dce1e5',
				'13': '#edf0f2',
				'14': '#ffffff',
			},
			'rd-dark': {
				'0': '#5c0026',
				'1': '#730036',
				'2': '#8a0048',
				'3': '#a1005a',
				'4': '#b8006d',
				'5': '#cf1b81',
				'6': '#e73b95',
				'7': '#ff54a9',
				'8': '#ff6fb4',
				'9': '#ff86be',
				'10': '#ff9cc9',
				'11': '#ffb1d3',
				'12': '#ffc5de',
				'13': '#ffd8e9',
				'14': '#ffecf4',
			},
			'yl-dark': {
				'0': '#2b1800',
				'1': '#332900',
				'2': '#403a00',
				'3': '#514c00',
				'4': '#645f00',
				'5': '#797200',
				'6': '#8f8500',
				'7': '#a69900',
				'8': '#b3a533',
				'9': '#c0b253',
				'10': '#ccbe70',
				'11': '#d8cb8c',
				'12': '#e2d7a8',
				'13': '#ede4c5',
				'14': '#f6f2e2',
			},
			'gr-dark': {
				'0': '#002700',
				'1': '#003400',
				'2': '#00470f',
				'3': '#005a21',
				'4': '#006e32',
				'5': '#008244',
				'6': '#009757',
				'7': '#00ad6a',
				'8': '#43b77c',
				'9': '#64c28e',
				'10': '#80cda0',
				'11': '#9bd7b2',
				'12': '#b4e1c5',
				'13': '#cdebd8',
				'14': '#e6f5eb',
			},
			'bu-dark': {
				'0': '#001e69',
				'1': '#002d7d',
				'2': '#003e92',
				'3': '#004fa7',
				'4': '#0061bc',
				'5': '#0074d2',
				'6': '#0087e8',
				'7': '#009bff',
				'8': '#52a7ff',
				'9': '#76b3ff',
				'10': '#92bfff',
				'11': '#aacbff',
				'12': '#c1d8ff',
				'13': '#d6e5ff',
				'14': '#ebf2ff',
			},
		},
		fontFamily: {
			sans: ['Inter', 'Roboto', '????????????????????? JP', 'Noto Sans JP', 'ui-sans-serif', '-apple-system', 'BlinkMacSystemFont', 'Hiragino Sans', '???????????????????????????', 'Segoe UI', '????????????', 'Meiryo', 'sans-serif'],
		},
		extend: {
			minWidth: {
				'32': '8rem',
			},
			boxShadow: {
				'top-sm': '0 -1px 2px 0 rgb(0 0 0 / 0.05)',
				'top': '0 -1px 3px 0 rgb(0 0 0 / 0.1), 0 -1px 2px -1px rgb(0 0 0 / 0.1)',
				'top-md': '0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1)',
				'top-lg': '0 -10px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -4px rgb(0 0 0 / 0.1)',
				'top-xl': '0 -20px 25px -5px rgb(0 0 0 / 0.1), 0 -8px 10px -6px rgb(0 0 0 / 0.1)',
				'top-2xl': '0 -25px 50px -12px rgb(0 0 0 / 0.25)',
				'left-sm': '-1px 0 2px 0 rgb(0 0 0 / 0.05)',
				'left': '-1px 0 3px 0 rgb(0 0 0 / 0.1), -1px 0 2px -1px rgb(0 0 0 / 0.1)',
				'left-md': '-4px 0 6px -1px rgb(0 0 0 / 0.1), -2px 0 4px -2px rgb(0 0 0 / 0.1)',
				'left-lg': '-10px 0 15px -3px rgb(0 0 0 / 0.1), -4px 0 6px -4px rgb(0 0 0 / 0.1)',
				'left-xl': '-20px 0 25px -5px rgb(0 0 0 / 0.1), -8px 0 10px -6px rgb(0 0 0 / 0.1)',
				'left-2xl': '-25px 0 50px -12px rgb(0 0 0 / 0.25)',
				'right-sm': '1px 0 2px 0 rgb(0 0 0 / 0.05)',
				'right': '1px 0 3px 0 rgb(0 0 0 / 0.1), 1px 0 2px -1px rgb(0 0 0 / 0.1)',
				'right-md': '4px 0 6px -1px rgb(0 0 0 / 0.1), 2px 0 4px -2px rgb(0 0 0 / 0.1)',
				'right-lg': '10px 0 15px -3px rgb(0 0 0 / 0.1), 4px 0 6px -4px rgb(0 0 0 / 0.1)',
				'right-xl': '20px 0 25px -5px rgb(0 0 0 / 0.1), 8px 0 10px -6px rgb(0 0 0 / 0.1)',
				'right-2xl': '25px 0 50px -12px rgb(0 0 0 / 0.25)',
			},
		},
	},
}
