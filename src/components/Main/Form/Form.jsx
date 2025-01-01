import styles from './Form.module.scss'
import { useGlobalContext } from '../../../Context'
import { StepOne, StepTwo } from './Steps'

const Form = () => {
	const { handleSubmit, steps } = useGlobalContext()
	return (
		<form
			className={styles.form}
			onSubmit={e => handleSubmit()}
			id='myForm'>
			{/* {steps.stepOne && <StepOne />} */}
			{/* {steps.stepTwo && <StepTwo />} */}
			<StepOne />
			<StepTwo />
		</form>
	)
}
export default Form
