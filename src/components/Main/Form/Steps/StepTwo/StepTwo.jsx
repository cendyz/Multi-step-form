import styles from './StepTwo.module.scss'
import { plansData } from '../../../../../data'
import { nanoid } from 'nanoid'

const StepTwo = () => {
	return (
		<>
			<h2 className={styles.title}>Select your plan</h2>
			<p className={styles.desc}>
				You have the option of monthly or yearly billing.
			</p>
			<div className={styles.btnsBox}>
				{plansData.map(({ title, price, icon, alt }) => {
					return (
						<button type='button' className={styles.btn} key={nanoid()}>
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
		</>
	)
}
export default StepTwo
