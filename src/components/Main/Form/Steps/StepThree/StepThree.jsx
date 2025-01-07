import styles from './StepThree.module.scss'
import { useGlobalContext } from '../../../../../Context'
import classNames from 'classnames'
import { addonsData } from '../../../../../data'
import { nanoid } from 'nanoid'

const StepThree = () => {
	const { state, handleActiveAddon } = useGlobalContext()
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
					{addonsData.map(({ title, text }, index) => {
						return (
							<div
								className={classNames(styles.inputBox, {
									[styles.selected]: state.addons.active[index],
								})}
								style={{
									borderColor: state.addons.error && 'hsl(354, 84%, 57%)',
								}}
								key={nanoid()}
								// role='button'
								// tabIndex='0'
								onClick={() =>
									handleActiveAddon(
										index,
										title,
										state.periodTime === 'Monthly'
											? state.addons.monthly[index]
											: state.addons.yearly[index]
									)
								}>
								<input
									type='checkbox'
									className={styles.input}
									checked={state.addons.active[index]}
									onMouseDown={e => e.preventDefault()}
									onKeyDown={e => {
										if (e.key === 'Enter')
											handleActiveAddon(
												index,
												title,
												state.periodTime === 'Monthly'
													? state.addons.monthly[index]
													: state.addons.yearly[index]
											)
									}}
									onChange={() => {}}
								/>
								<div className={styles.midText}>
									<h3 className={styles.addonTitle}>{title}</h3>
									<p className={styles.addonText}>{text}</p>
								</div>
								<p className={styles.price}>
									{state.periodTime === 'Monthly'
										? state.addons.monthly[index]
										: state.addons.yearly[index]}
								</p>
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}
export default StepThree
