import styles from './Footer.module.scss'
import { useGlobalContext } from '../../Context'

const Footer = () => {
	const { steps } = useGlobalContext()
	return (
		<footer className={styles.footer}>
			{steps.stepTwo && (
				<button type='button' className={styles.leftBtn}>
					Go Back
				</button>
			)}
			<button
				className={styles.rightBtn}
				type={steps.stepFour ? 'submit' : 'button'}
				id='myForm'
				>
				{steps.stepFour ? 'Confirm' : 'Next Step'}
			</button>
		</footer>
	)
}
export default Footer
