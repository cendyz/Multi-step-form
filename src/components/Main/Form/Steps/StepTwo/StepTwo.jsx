import styles from './StepTwo.module.scss'
import classNames from 'classnames'
import { plansData } from '../../../../../data'
import { useGlobalContext } from '../../../../../Context'

const StepTwo = () => {
	const { handlePlan, buttonRef, plan, handlePlanEnter, state } =
		useGlobalContext()

	return (
		<>
			<div
				className={classNames(styles.box, {
					[styles.current]: state.steps.stepTwo,
					show: state.steps.stepTwo,
					hide: !state.steps.stepTwo,
				})}
				style={{ display: state.steps.stepTwo ? 'block' : 'none' }}>
				<h2 className={styles.title}>Select your plan</h2>
				<p className={styles.desc}>
					You have the option of monthly or yearly billing.
				</p>
				<div className={styles.btnsBox}>
					{plansData.map(({ title, price, icon, alt }, index) => {
						return (
							<div
								tabIndex='0'
								role='button'
								className={classNames(styles.btn, {
									[styles.active]: state.plan.name === title,
								})}
								key={index}
								onClick={() => handlePlan({ title }, { price }, { index })}
								onKeyDown={e =>
									handlePlanEnter(e, { title }, { price }, { index })
								}
								ref={buttonRef}>
								<img src={icon} alt={alt} className={styles.icon} />
								<div className={styles.descBox}>
									<h3 className={styles.descTitle}>{title}</h3>
									<p className={styles.price}>${price}/yr</p>
									<p className={styles.free}>2 months free</p>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}
export default StepTwo
