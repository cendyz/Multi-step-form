import styles from './Confirm.module.scss'
import { useGlobalContext } from '../../../../../Context'
import classNames from 'classnames'
import thankYouIcon from '../../../../../images/icon-thank-you.svg'

const Confirm = () => {
	const { state } = useGlobalContext()
	return (
		<div
			className={classNames(styles.box, {
				[styles.current]: state.steps.confirm,
				show: state.steps.confirm,
				hide: !state.steps.confirm,
			})}
			style={{ display: state.steps.confirm ? 'block' : 'none' }}>
			<img src={thankYouIcon} alt='Success icon' className={styles.img} />
			<h3 className={styles.title}>Thank you!</h3>
			<p className={styles.desc}>
				Thanks for confirming your subscription! We hope you have fun using
				our platform. If you ever need support, please feel free to email
				us at support@loremgaming.com.
			</p>
		</div>
	)
}
export default Confirm
