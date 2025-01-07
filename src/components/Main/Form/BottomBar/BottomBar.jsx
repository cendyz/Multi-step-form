import styles from './BottomBar.module.scss'
import classNames from 'classnames'
import { useGlobalContext } from '../../../../Context'

const BottomBar = () => {
	const { state, handlePreviousClick, handleNextClick } =
		useGlobalContext()

	return (
		<div
			className={classNames(styles.footer, {
				[styles.none]: state.steps.confirm,
			})}>
			{!state.steps.stepOne && (
				<button
					type='button'
					className={styles.leftBtn}
					onClick={handlePreviousClick}>
					Go Back
				</button>
			)}
			<button
				className={classNames(styles.rightBtn, {
					[styles.confirmBtn]: state.steps.stepFour,
				})}
				type='button'
				onClick={handleNextClick}>
				{state.steps.stepFour ? 'Confirm' : 'Next Step'}
			</button>
		</div>
	)
}
export default BottomBar
