import styles from './StepOne.module.scss'

const StepOne = () => {
	return (
		<>
			<div className={styles.labelBox}>
				<label htmlFor='name' className={styles.label}>
					Name
				</label>
				<p className={styles.textError}>This field is required</p>
			</div>
			<input
				type='text'
				className={styles.input}
				id='name'
				placeholder='e.g. Stephen King'
			/>
			<div className={styles.labelBox}>
				<label htmlFor='email' className={styles.label}>
					Email Address
				</label>
				<p className={styles.textError}>This field is required</p>
			</div>
			<input
				type='text'
				className={styles.input}
				id='email'
				placeholder='e.g. stephenking@lorem.com'
			/>
			<div className={styles.labelBox}>
				<label htmlFor='phone' className={styles.label}>
					Phone Number
				</label>
				<p className={styles.textError}>This field is required</p>
			</div>
			<input
				type='text'
				className={styles.input}
				id='phone'
				placeholder='e.g. +1 234 567 890'
			/>
		</>
	)
}
export default StepOne
