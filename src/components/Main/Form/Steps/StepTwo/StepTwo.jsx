import styles from './StepTwo.module.scss'
import classNames from 'classnames'
import { plansData } from '../../../../../data'
import { nanoid } from 'nanoid'
import { useGlobalContext } from '../../../../../Context'

const StepTwo = () => {
	const { handlePlan, buttonRef, steps } = useGlobalContext()
	return (
		<>
			<div
				className={classNames(styles.box, {
					[styles.current]: steps.stepTwo,
					show: steps.stepTwo,
					hide: !steps.stepTwo,
				})}
				style={{ display: steps.stepTwo ? 'block' : 'none' }}>
				<h2 className={styles.title}>Select your plan</h2>
				<p className={styles.desc}>
					You have the option of monthly or yearly billing.
				</p>
				<div className={styles.btnsBox}>
					{plansData.map(({ title, price, icon, alt }, index) => {
						return (
							<button
								type='button'
								className={styles.btn}
								key={index}
								onClick={() => handlePlan({ title }, { price }, { index })}
								ref={buttonRef}>
								<img src={icon} alt={alt} className={styles.icon} />
								<div className={styles.descBox}>
									<h3 className={styles.descTitle}>{title}</h3>
									<p className={styles.price}>${price}/yr</p>
									<p className={styles.free}>2 months free</p>
								</div>
							</button>
						)
					})}
				</div>
			</div>
		</>
	)
}
export default StepTwo
