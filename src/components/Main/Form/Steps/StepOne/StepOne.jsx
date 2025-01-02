import { useGlobalContext } from '../../../../../Context'
import classNames from 'classnames'
import styles from './StepOne.module.scss'
import React from 'react'
import { stepOneData } from '../../../../../data'

const StepOne = () => {
	const { handleUser, user, inputRef, error, steps, emailError, state } =
		useGlobalContext()
	return (
		<>
			<div
				className={classNames(styles.box, {
					[styles.current]: steps.stepOne,
					show: steps.stepOne,
					hide: !steps.stepOne,
				})}
				style={{ display: steps.stepOne ? 'block' : 'none' }}>
				<h2 className={styles.title}>Personal info</h2>
				<p className={styles.desc}>
					Please provide your name, email address, and phone number.
				</p>
				{stepOneData.map(({ name, placeholder }, index) => {
					const actualError = state.error[index]

					return (
						<React.Fragment key={index}>
							<div className={styles.labelBox}>
								<label htmlFor={name} className={styles.label}>
									{name}
								</label>
								<p
									className={styles.textError}
									style={{
										opacity: actualError && '1',
										visibility: actualError && 'visible',
									}}>
									{index === 1 ? state.emailError : 'This field is required.'}
								</p>
							</div>
							<input
								type='text'
								className={styles.input}
								style={{
									borderColor: actualError && 'hsl(354, 84%, 57%)',
								}}
								id={name}
								placeholder={placeholder}
								name={name}
								value={state.user[name]}
								onChange={e => handleUser(e, index)}
								ref={inputRef}
							/>
						</React.Fragment>
					)
				})}
			</div>
		</>
	)
}
export default StepOne
