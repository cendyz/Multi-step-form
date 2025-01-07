import styles from './Form.module.scss'
import { useGlobalContext } from '../../../Context'
import { StepOne, StepTwo, StepThree, StepFour, Confirm, BottomBar } from './Steps'

const Form = () => {
	const { handleSubmit } = useGlobalContext()
	return (
		<form
			className={styles.form}
			onSubmit={e => handleSubmit(e)}
			id='myForm'>
			<StepOne />
			<StepTwo />
			<StepThree />
			<StepFour />
			<Confirm />
			<BottomBar />
		</form>
	)
}
export default Form
