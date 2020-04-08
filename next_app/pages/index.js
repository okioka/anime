import App  from '../components/App.js'
import Head from 'next/head'
import css from '../public/styles.scss'

const Index = () => (
  <div>
    <Head>
      <title>アニメ検索</title>
      <meta name="viewport" content="width=1280"></meta>
    </Head>
    <App />
  </div>
)

export default Index