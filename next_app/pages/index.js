import Anime  from '../components/Anime.js'
import Head from 'next/head'

const Index = () => (
  <div>
    <Head>
      <title>アニメ検索</title>
      <meta name="viewport" content="width=1280"></meta>
    </Head>
    <Anime />
  </div>
)

export default Index