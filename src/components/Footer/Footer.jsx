import styles from './Footer.module.scss'
import { useGlobalContext } from '../../Context'

const Footer = () => {
	const { steps, handleNextSteps } = useGlobalContext()
	return (
		<footer className={styles.footer}>
			{!steps.stepOne && (
				<button type='button' className={styles.leftBtn}>
					Go Back
				</button>
			)}
			<button
				className={styles.rightBtn}
				type={steps.stepFour ? 'submit' : 'button'}
				id='myForm'
				onClick={handleNextSteps}
				>
				{steps.stepFour ? 'Confirm' : 'Next Step'}
			</button>
			
		</footer>
	)
}
export default Footer
