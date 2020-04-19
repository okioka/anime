import css from '../public/styles.scss'

export default class AnimeData extends React.Component {
  render() {
    // 作品タイトル+聖地名でGoogle検索するURL
    const searchURL  = `https://www.google.com/search?q=${this.props.title}+${this.props.city}`
    // 公式TwitterアカウントのURL
    const twitterURL = `https://twitter.com/${this.props.twitter}`

    // 聖地が無ければ聖地データは入れない
    let   city       = `${this.props.city}`.replace(/\|/g, '')

    // 聖地にパイプが入っていることがるので除去する
    city = city.replace('|', '')

    if(city === "") {
      city = ""
    } else {
      city = "聖地 : " + city
    }

    // 画像のURLはテスト用
    return (
      <div className={css.card}>
        <div className={css.card_imgframe + ' ' + css.box_1x1}>
          <a href={this.props.url} target="_blank">
            <img className={css.card_img} src={this.props.img} onError={(e) => e.target.src = 'http://design-ec.com/d/e_others_50/m_e_others_500.png'}/>
          </a>
        </div>
        <div className={css.card_textbox}>
          <a href={searchURL} target="_blank">
            <div className={css.card_titletext}>
              {this.props.title}
            </div>
            <div className={css.card_overviewtext}>
              {city}
            </div>
          </a>
          <a href={twitterURL} target="_blank">
            <div className={css.card_overviewtext}>
              twitter : @{this.props.twitter}
            </div>
          </a>
        </div>
      </div>
    );
  }
}