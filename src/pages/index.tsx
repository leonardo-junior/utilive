// components
import Layout from '../components/Layout/Layout'
import Card from '../components/Card/Card'

// styles
import styles from '../styles/Home.module.scss'

function Home (): JSX.Element {
  return (
    <Layout title='Home Page' description='A simple page'>
      <div className={styles.container}>
        <Card anchor='/random-number' keyName='Loteria' />
        <Card anchor='/pomodoro' keyName='Pomodoro'/>
        <Card anchor='/' keyName='Cálculo Gastos' className={styles.incomplete} />
        <Card anchor='/' keyName='Contador palavras' className={styles.incomplete} />
      </div>
    </Layout>
  )
}

export default Home
