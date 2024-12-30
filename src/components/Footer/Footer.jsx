import styles from './Footer.module.scss'
import { useGlobalContext } from '../../Context'

const Footer = () => {
	const { steps, handleNextClick } = useGlobalContext()
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
				onClick={handleNextClick}
				>
				{steps.stepFour ? 'Confirm' : 'Next Step'}
			</button>
			
		</footer>
	)
}
export default Footer
