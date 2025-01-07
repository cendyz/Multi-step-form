import styles from './StepTwo.module.scss'
import classNames from 'classnames'
import { plansData } from '../../../../../data'
import { useGlobalContext } from '../../../../../Context'

const StepTwo = () => {
	const {
		handlePlan,
		buttonRef,
		handlePlanEnter,
		state,
		handleButtonPlan,
	} = useGlobalContext()

	return (
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
				{plansData.map(({ title, icon, alt }, index) => {
					return (
						<div
							tabIndex='0'
							role='button'
							className={classNames(styles.btn, {
								[styles.active]: state.plan.name === title,
								[styles.redBorder]: state.planBorder === true,
							})}
							key={index}
							onClick={() => handlePlan({ title }, index)}
							onKeyDown={e => handlePlanEnter(e, { title }, index)}
							ref={buttonRef}>
							<img src={icon} alt={alt} className={styles.icon} />
							<div className={styles.descBox}>
								<h3 className={styles.descTitle}>{title}</h3>
								<p className={styles.price}>
									{state.periodTime === 'Monthly'
										? state.monthly[index]
										: state.yearly[index]}
								</p>
								<p
									className={classNames(styles.free, {
										[styles.show]: state.periodTime === 'Yearly',
									})}>
									2 months free
								</p>
							</div>
						</div>
					)
				})}
				<div className={styles.periodTime}>
					<p
						className={classNames(styles.periodText, {
							[styles.activeBtn]: !state.planBtn,
						})}>
						Monthly
					</p>
					<button
						className={classNames(styles.periodBtn, {
							[styles.btnPosition]: state.planBtn,
						})}
						type='button'
						onClick={handleButtonPlan}></button>
					<p
						className={classNames(styles.periodText, {
							[styles.activeBtn]: state.planBtn,
						})}>
						Yearly
					</p>
				</div>
			</div>
		</div>
	)
}
export default StepTwo
