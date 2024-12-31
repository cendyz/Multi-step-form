import styles from './StepTwo.module.scss'
import arcadeIcon from '../../../../../images/icon-arcade.svg'
import advancedIcon from '../../../../../images/icon-advanced.svg'
import proIcon from '../../../../../images/icon-pro.svg'

const StepTwo = () => {
	return (
		<>
			<h2 className={styles.title}>Select your plan</h2>
			<p className={styles.desc}>
				You have the option of monthly or yearly billing.
			</p>
			<div className={styles.btnsBox}>
				<button type='button' className={styles.btn}>
					<img
						src={arcadeIcon}
						alt='Joystick icon'
						className={styles.icon}
					/>
					<div className={styles.descBox}>
						<h3 className={styles.descTitle}>Arcade</h3>
						<p className={styles.price}>$90/yr</p>
						<p className={styles.free}>2 months free</p>
					</div>
				</button>
				<button type='button' className={styles.btn}>
					<img
						src={advancedIcon}
						alt='Old console gamepad icon'
						className={styles.icon}
					/>
					<div className={styles.descBox}>
						<h3 className={styles.descTitle}>Arcade</h3>
						<p className={styles.price}>$90/yr</p>
						<p className={styles.free}>2 months free</p>
					</div>
				</button>
				<button type='button' className={styles.btn}>
					<img src={proIcon} alt='Gamepad icon' className={styles.icon} />
					<span className={styles.descBox}>
						<h3 className={styles.descTitle}>Pro</h3>
						<p className={styles.price}>$150/yr</p>
						<p className={styles.free}>2 months free</p>
					</span>
				</button>
			</div>
		</>
	)
}
export default StepTwo
