import styles from './Main.module.scss'
import LeftPart from './LeftPart'
import Form from './Form'

const Main = () => {
	return (
		<main className={styles.main}>
			<LeftPart />
      <Form />
		</main>
	)
}
export default Main
