import styles from './Header.module.scss'
import pattern from '../../images/mobile/bg-sidebar-mobile.svg'

const Header = () => {
	return <div className={styles.header}>
        <img src={pattern} alt="" className={styles.headerPattern} />
        <div className={styles.stepBox}>
            <p className={styles.stepNumber}>1</p>
            <p className={styles.stepNumber}>2</p>
            <p className={styles.stepNumber}>3</p>
            <p className={styles.stepNumber}>4</p>
        </div>
    </div>
}
export default Header
