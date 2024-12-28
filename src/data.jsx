import iconTodo from './images/icon-todo.svg'
import iconCalendar from './images/icon-calendar.svg'
import iconReminders from './images/icon-reminders.svg'
import iconPlanning from './images/icon-planning.svg'
import arrowIcon from './images/icon-arrow-down.svg'

export const menuBtnsData = [
	{
		id: 1,
		btnText: 'Features',
		icon: arrowIcon,
	},
	{
		id: 2,
		btnText: 'Company',
		icon: arrowIcon,
	},
	{
		id: 3,
		btnText: 'Careers',
	},
	{
		id: 4,
		btnText: 'About',
	},
]

export const insideLinksData = [
	{
		id: 1,
        linkOne: 'Todo List',
		icon: iconTodo,
        linkTwo: 'History'
	},
	{
		id: 2,
		linkOne: 'Calendar',
        icon: iconCalendar,
        linkTwo: 'Our Team'
	},
	{
		id: 3,
		linkOne: 'Reminders',
        icon: iconReminders,
        linkTwo: 'Blog'
	},
	{
		id: 4,
		linkOne: 'Planning',
        icon: iconPlanning,
	},

]
