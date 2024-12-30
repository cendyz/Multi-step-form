import styles from './Header.module.scss'
import pattern from '../../images/mobile/bg-sidebar-mobile.svg'
import classNames from 'classnames'
import { useGlobalContext } from '../../Context'

const Header = () => {
	const { numbers } = useGlobalContext()
	return (
		<div className={styles.header}>
			<img src={pattern} alt='' className={styles.headerPattern} />
			<div className={styles.stepBox}>
				<p className={classNames(styles.stepNumber, styles.activeNumber)}>
					1
				</p>
				<p
					className={classNames(styles.stepNumber, {
						[styles.activeNumber]: numbers.numTwo,
					})}>
					2
				</p>
				<p
					className={classNames(styles.stepNumber, {
						[styles.activeNumber]: numbers.numThree,
					})}>
					3
				</p>
				<p
					className={classNames(styles.stepNumber, {
						[styles.activeNumber]: numbers.numFour,
					})}>
					4
				</p>
			</div>
		</div>
	)
}
export default Header
