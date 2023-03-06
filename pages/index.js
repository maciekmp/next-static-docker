import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  return (
    <div className={styles.container}>
      {JSON.stringify(props)}
    </div>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      people: await fetch('https://swapi.dev/api/people').then(r => r.json()),
    }, // will be passed to the page component as props
  }
}