import React from 'react'
import axios from 'axios'
import Header from './Header.js'
import AnimeForm from './AnimeForm.js'
import AnimeList from './AnimeList.js'
import css from '../public/styles.scss'

// ページ全体
export default class Anime extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      anime: [],
      coursList: [],
      checked: false
    }
    this.check = this.check.bind(this)
    this.animeSearch = this.animeSearch.bind(this)
    this.getNowCours = this.getNowCours.bind(this)
  }

  componentDidMount() {
    // 現在放送中のデータを最初に表示する
    this.animeSearch(this.getNowCours())
    this.setDateList()
  }

  // アニメ検索
  // coursはYYYY/Xの形式で渡される
  animeSearch(cours) {
    const url = "https://api.moemoe.tokyo/anime/v1/master/"+ cours + "?ogp=1"
    axios.get(url).then(res => {
      this.setState({anime: res.data})

      // 聖地のみなら0件チェック
      // 絞り込みが無い状態は0件がありえないので実装しない
      if(this.state.checked) {
        this.cityEnptyCheck(res.data)
      }
    }).catch(error => {
      alert("データの表示ができません")
      console.log("データ表示NG")
      console.log(error)
    })
  }

  // 聖地のみ絞りこむチェックボックスの状態を変更する
  check() {
    if(this.state.checked) {
      this.setState({checked: false})
    } else {
      this.setState({checked: true})
      this.cityEnptyCheck(this.state.anime)
    }
  }

  // 聖地データが0件かチェック
  cityEnptyCheck(data) {
    const isCityEmpty = data.every((anime) => {
      return(
        anime.city_name === ""
      )
    })
    if(isCityEmpty) {
      alert("データは0件です")
    }
  }

  // 月から放送クールを求める
  getCours(month) {
    if(month <= 3) {
      return 1
    } else if(month <= 6) {
      return 2
    } else if(month <= 9) {
      return 3
    } else if(month <= 12) {
      return 4
    }
  }

  // 放送クールから季節を求める
  getSeason(cours) {
    if(cours === 1){
      return '冬'
    } else if(cours === 2) {
      return '春'
    } else if(cours === 3) {
      return '夏'
    } else if(cours === 4) {
      return '秋'
    }
  }

  // 現在放送中の放送クールをYYYY/Xの形式で求める
  getNowCours() {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const now = year + '/' + this.getCours(month)
    return now
  }

  // 検索フォームに表示するリストボックス用の値を設定する。
  // 2014年冬から放送中の放送クールまで
  setDateList() {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const cours = this.getCours(month)
    let coursList = []

    for(var i = year; i >= 2014; i--) {
      if(i === year) {
        for(var j = cours; j >= 1; j--) {
          const cours = i + '/' + j
          const season = i + '年 ' + this.getSeason(j)
          coursList.push({season: season, cours: cours})
        }
      } else {
        for(var j = 4; j >= 1; j--) {
          const cours = i + '/' + j
          const season = i + '年 ' + this.getSeason(j)
          coursList.push({season: season, cours: cours})
        }
      }
    }
    this.setState({coursList: coursList})
  }

  render() {
    return (
      <div>
        <div className={css.header}>
          <Header />
          <AnimeForm search={(cours) => this.animeSearch(cours)} check={this.check} coursList={this.state.coursList} now={this.getNowCours}/>
        </div>
        <AnimeList anime={this.state.anime} checked={this.state.checked} />
      </div>
    )
  }
}