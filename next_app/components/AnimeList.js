import css from '../public/styles.scss'
import AnimeData from './AnimeData'

export default class AnimeList extends React.Component {
  render() {
    // アニメデータ
    const animeNodes = this.props.anime.map((anime) => {
      // 聖地のみ出力するか判定する部分
      if(this.props.checked) {
        if(`${anime.city_name}`) {
          return(
            <AnimeData key={anime.id} title={anime.title} url={anime.public_url} img={anime.ogp.og_image} city={anime.city_name} twitter={anime.twitter_account}></AnimeData>
          )
        }
      } else {
        return(
          <AnimeData key={anime.id} title={anime.title} url={anime.public_url} img={anime.ogp.og_image} city={anime.city_name} twitter={anime.twitter_account}></AnimeData>
        )
      }
    })

    return (
      <div className={css.tile}>
        {animeNodes}
      </div>
    )
  }
}