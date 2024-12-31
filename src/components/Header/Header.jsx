import styles from './Header.module.scss'
import pattern from '../../images/mobile/bg-sidebar-mobile.svg'
import classNames from 'classnames'
import { useGlobalContext } from '../../Context'

const Header = () => {
	const { steps } = useGlobalContext()
	return (
		<div className={styles.header}>
			<img src={pattern} alt='' className={styles.headerPattern} />
			<div className={styles.stepBox}>
				<p
					className={classNames(styles.stepNumber, {
						[styles.activeNumber]: steps.stepOne,
					})}>
					1
				</p>
				<p
					className={classNames(styles.stepNumber, {
						[styles.activeNumber]: steps.stepTwo,
					})}>
					2
				</p>
				<p
					className={classNames(styles.stepNumber, {
						[styles.activeNumber]: steps.stepThree,
					})}>
					3
				</p>
				<p
					className={classNames(styles.stepNumber, {
						[styles.activeNumber]: steps.stepFour,
					})}>
					4
				</p>
			</div>
		</div>
	)
}
export default Header
