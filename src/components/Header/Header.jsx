import styles from './Header.module.scss'
import pattern from '../../images/mobile/bg-sidebar-mobile.svg'
import classNames from 'classnames'
import { useGlobalContext } from '../../Context'
import { headerData } from '../../data'

const Header = () => {
	const { state } = useGlobalContext()
	return (
		<div className={styles.header}>
			<img src={pattern} alt='' className={styles.headerPattern} />
			<div className={styles.stepBox}>
				{headerData.map(({ step, num }, index) => {
					return (
						<p
							className={classNames(styles.stepNumber, {
								[styles.activeNumber]: state.steps[step],
							})}
							key={index}>
							{num}
						</p>
					)
				})}
				
			</div>
		</div>
	)
}
export default Header
