import styles from './Main.module.scss'
import LeftPart from './LeftPart'
import Form from './Form'
import Footer from '../Footer/'

const Main = () => {
	return (
		<main className={styles.main}>
			<LeftPart />
			<Form />
			<Footer />
		</main>
	)
}
export default Main
