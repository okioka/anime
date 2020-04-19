import css from '../public/styles.scss'

// 検索フォーム
export default class AnimeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cours: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  // リストボックスを変更せずに検索ボタンをクリックすると
  // 404エラーになってしまう
  // ここで現在放送中の放送クールを初期値として設定
  componentDidMount() {
    const now = this.props.now()
    this.setState({cours: now})
  }

  // リストボックスクリック時に呼ばれる
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    // リストボックス内のデータ
    const coursNodes = this.props.coursList.map((list, index) => {
      return(
        <option key={index} value={list.cours}>{list.season}</option>
      )
    })
    return (
      <div className={css.form}>
        <div className={css.move}>
          <select name="cours" onChange={this.handleChange}>
            {coursNodes}
          </select>
        </div>
        <button className={css.btn} onClick={() => this.props.search(this.state.cours)}>検索</button>
        <input type="checkbox" id="city_chk" onClick={this.props.check} onLoad={this.props.check}/>
        <label htmlFor="city_chk">聖地があるアニメのみ</label>
      </div>
    )
  }
}