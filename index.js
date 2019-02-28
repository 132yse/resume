import './style.css'
import { h, render } from 'fre'
const config = {
  avatar:
    'https://tvax4.sinaimg.cn/crop.0.78.1422.1422.180/0065Zy9ely8fve0dvwdwnj31401z4b29.jpg'
}
function App() {
  return (
    <div class="container">
      <Left />
      <Right />
    </div>
  )
}

function Left() {
  return (
    <div class="left">
      <div class="logo">
        <img src={config.avatar} />
        <div class="name">
          <h1> 赵昌浩 </h1>
          <h3>求职意向：web 前端</h3>
        </div>
        <div class="info">
          <ul>
            <li><i class='iconfont icon-rili'></i>生日：1998-11-22</li>
            <li><i class='iconfont icon-weizhi'></i>籍贯：山东高密</li>
            <li><i class='iconfont icon-dianhua'></i>电话：18593996744</li>
            <li><i class='iconfont icon-youxiang'></i>邮箱：1533540012@qq.com</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function Right(){
  return (
    <div class='right'>
      <section class='edu'>
        <h1><i class='iconfont icon-jiaoyu'></i>教育背景</h1>
        <p>
          <h3>2016.09——2020.06 北海艺术设计学院 动画专业 二本</h3>
          <ul>
            <li>2016 年加入 ·平行世界工作室·</li>
            <li>2017 年，参与制作的《琵琶行》、《离骚》等，多次热搜，荣登环球时报、人民日报等各大报刊</li>
            <li>2018 年，《逍遥游》发布，《琵琶行》荣登央视，由方锦龙先生奏乐，任嘉伦翻唱</li>
            <li>2019 年，《琵琶行》抖音等平台高位不下</li>
          </ul>
        </p>
      </section>
    </div>
  )
}

render(<App />, document.getElementById('root'))
