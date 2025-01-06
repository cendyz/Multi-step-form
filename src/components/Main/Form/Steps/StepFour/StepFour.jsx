import styles from './StepFour.module.scss'
import { useGlobalContext } from '../../../../../Context'
import classNames from 'classnames'

const StepFour = () => {
	const { state } = useGlobalContext()
	return (
		<div
			className={classNames(styles.box, {
				[styles.current]: state.steps.stepFour,
				show: state.steps.stepFour,
				hide: !state.steps.stepFour,
			})}
			style={{ display: state.steps.stepFour ? 'block' : 'none' }}>
			<h2 className={styles.title}>Finishing up</h2>
			<p className={styles.desc}>
				Double-check everything look OK before confirming.
			</p>
			<div className={styles.boxItemsInfo}>
				<div className={styles.topBox}>
					<div className={styles.topLeft}>
						<p className={styles.leftTitle}>Arcade (Monthly)</p>
						<button className={styles.btnChange}>Change</button>
					</div>
					<p className={styles.topPrice}>$90/yr</p>
				</div>
				<div className={styles.midBox}>
					<p className={styles.midTitle}>Online service</p>
					<p className={styles.midPrice}>+$10/yr</p>
				</div>
				<div className={styles.midBox}>
					<p className={styles.midTitle}>Online service</p>
					<p className={styles.midPrice}>+$10/yr</p>
				</div>
			</div>
				<div className={styles.botBox}>
					<p className={styles.botTitle}>Total (per year)</p>
					<p className={styles.botPrice}>$120/yr</p>
				</div>
		</div>
	)
}
export default StepFour
