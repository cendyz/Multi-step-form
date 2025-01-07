import styles from './LeftPart.module.scss'
import { useGlobalContext } from '../../../Context'
import classNames from 'classnames'
import { headerData } from '../../../data'
import pattern from '../../../images/desktop/bg-sidebar-desktop.svg'

const LeftPart = () => {
	const { state } = useGlobalContext()
	return (
		<div className={styles.leftBox}>
			<img
				src={pattern}
				alt='Pattern image'
				className={styles.headerPattern}
			/>
			<div className={styles.stepBox}>
				{headerData.map(({ step, num, desc }, index) => {
					return (
						<div className={styles.numBox} key={index}>
							<p
								className={classNames(styles.stepNumber, {
									[styles.activeNumber]:
										state.steps[step] ||
										(step === 'stepFour' && state.steps.confirm),
								})}>
								{num}
							</p>
							<div className={styles.infoBox}>
								<p className={styles.stepNumBox}>Step {num}</p>
								<p className={styles.stepDescInfo}>{desc}</p>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
export default LeftPart
