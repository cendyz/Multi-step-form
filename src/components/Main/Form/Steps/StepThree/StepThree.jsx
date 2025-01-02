import styles from './StepThree.module.scss'
import { useGlobalContext } from '../../../../../Context'
import classNames from 'classnames'

const StepThree = () => {
	const { state } = useGlobalContext()
	return (
		<>
			<div
				className={classNames(styles.box, {
					[styles.current]: state.steps.stepThree,
					show: state.steps.stepThree,
					hide: !state.steps.stepThree,
				})}
				style={{ display: state.steps.stepThree ? 'block' : 'none' }}>
				<h2 className={styles.title}>Pick add-ons</h2>
				<p className={styles.desc}>
					Add-ons help enhance your gaming experience.
				</p>
				<div className={styles.btnsBox}>
					<label htmlFor='online'>
						<input type='checkbox' />
						<span className={styles.midText}></span>
					</label>
				</div>
			</div>
		</>
	)
}
export default StepThree
