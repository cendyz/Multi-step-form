import arcadeIcon from './images/icon-arcade.svg'
import advancedIcon from './images/icon-advanced.svg'
import proIcon from './images/icon-pro.svg'
export const headerData = [
	{
		step: 'stepOne',
		num: 1,
		desc: 'your info',
	},
	{
		step: 'stepTwo',
		num: 2,
		desc: 'select plan',
	},
	{
		step: 'stepThree',
		num: 3,
		desc: 'add-ons',
	},
	{
		step: 'stepFour',
		num: 4,
		desc: 'summary',
	},
]

export const stepOneData = [
	{
		name: 'name',
		placeholder: 'e.g. Stephen King',
	},
	{
		name: 'email',
		fullName: 'Address',
		placeholder: 'e.g. stephenking@lorem.com',
	},
	{
		name: 'phone',
		fullName: 'Number',
		placeholder: 'e.g. +1 234 567 890',
	},
]

export const plansData = [
	{
		title: 'Arcade',
		icon: arcadeIcon,
		alt: 'Joystick icon',
	},
	{
		title: 'Advanced',
		icon: advancedIcon,
		alt: 'Old console gamepad icon',
	},
	{
		title: 'Pro',
		icon: proIcon,
		alt: 'Gamepad icon',
	},
]

export const addonsData = [
	{
		title: 'Online service',
		text: 'Access to multiplayer games',
	},
	{
		title: 'Larger storage',
		text: 'Extra 1TB of cloud save',
	},
	{
		title: 'Customizable Profile',
		text: 'Custom theme on your profile',
	},
]
