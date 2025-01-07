import styles from './StepFour.module.scss'
import { useGlobalContext } from '../../../../../Context'
import classNames from 'classnames'

const StepFour = () => {
	const { state, handleChangePlan } = useGlobalContext()
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
						<p className={styles.leftTitle}>
							{state.plan.name} ({state.periodTime})
						</p>
						<button
							className={styles.btnChange}
							type='button'
							onClick={handleChangePlan}>
							Change
						</button>
					</div>
					<p className={styles.topPrice}>{state.plan.price}</p>
				</div>
				{state.items.map(({ title, price }, index) => {
					return (
						<div className={styles.midBox} key={index}>
							<p className={styles.midTitle}>{title}</p>
							<p className={styles.midPrice}>{price}</p>
						</div>
					)
				})}
			</div>
			<div className={styles.botBox}>
				<p className={styles.botTitle}>Total (per year)</p>
				<p className={styles.botPrice}>
					${state.totalSum}/{state.periodTime === 'Monthly' ? 'mo' : 'yr'}
				</p>
			</div>
		</div>
	)
}
export default StepFour
