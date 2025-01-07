import styles from './Footer.module.scss'
import { useGlobalContext } from '../../Context'
import classNames from 'classnames'

const Footer = () => {
	const { state, handleNextClick, handlePreviousClick } =
		useGlobalContext()
	return (
		<footer
			className={classNames(styles.footer, {
				[styles.none]: state.steps.confirm,
			})}>
			{!state.steps.stepOne && (
				<button
					type='button'
					className={styles.leftBtn}
					onClick={handlePreviousClick}>
					Go Back
				</button>
			)}
			<button
				className={classNames(styles.rightBtn, {
					[styles.confirmBtn]: state.steps.stepFour,
				})}
				type={state.steps.stepFour ? 'submit' : 'button'}
				id='myForm'
				onClick={handleNextClick}>
				{state.steps.stepFour ? 'Confirm' : 'Next Step'}
			</button>
		</footer>
	)
}
export default Footer
