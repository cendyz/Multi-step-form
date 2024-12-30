import styles from './Form.module.scss'
import { useGlobalContext } from '../../../Context'
import { StepOne } from './Steps'

const Form = () => {
	const { handleSubmit } = useGlobalContext()
	return (
		<form className={styles.form} onSubmit={e => handleSubmit()} id='myForm'>
			<h2 className={styles.title}>Personal info</h2>
			<p className={styles.desc}>
				Please provide your name, email address, and phone number.
			</p>
			<StepOne />
		</form>
	)
}
export default Form
