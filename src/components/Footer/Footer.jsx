import styles from './Footer.module.scss'
import { useGlobalContext } from '../../Context'

const Footer = () => {
	const { state, handleNextClick, handlePreviousClick } =
		useGlobalContext()
	return (
		<footer className={styles.footer}>
			{!state.steps.stepOne && (
				<button
					type='button'
					className={styles.leftBtn}
					onClick={handlePreviousClick}>
					Go Back
				</button>
			)}
			<button
				className={styles.rightBtn}
				type={state.steps.stepFour ? 'submit' : 'button'}
				id='myForm'
				onClick={handleNextClick}>
				{state.steps.stepFour ? 'Confirm' : 'Next Step'}
			</button>
		</footer>
	)
}
export default Footer
