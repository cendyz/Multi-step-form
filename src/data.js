import arcadeIcon from './images/icon-arcade.svg'
import advancedIcon from './images/icon-advanced.svg'
import proIcon from './images/icon-pro.svg'

export const headerData = [
	{
		step: 'stepOne',
		num: 1,
	},
	{
		step: 'stepTwo',
		num: 2,
	},
	{
		step: 'stepThree',
		num: 3,
	},
	{
		step: 'stepFour',
		num: 4,
	},
]

export const stepOneData = [
	{
		name: 'name',
		placeholder: 'e.g. Stephen King',
	},
	{
		name: 'email',
		placeholder: 'e.g. stephenking@lorem.com',
	},
	{
		name: 'phone',
		placeholder: 'e.g. +1 234 567 890',
	},
]

export const plansData = [
	{
		title: 'Arcade',
		price: 90,
		icon: arcadeIcon,
		alt: 'Joystick icon',
	},
	{
		title: 'Advanced',
		price: 120,
		icon: advancedIcon,
		alt: 'Old console gamepad icon',
	},
	{
		title: 'Pro',
		price: 150,
		icon: proIcon,
		alt: 'Gamepad icon',
	},
]
