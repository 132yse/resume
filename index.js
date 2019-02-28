import './style.css'
import { h, render } from 'fre'
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
        <img src="https://tvax4.sinaimg.cn/crop.0.78.1422.1422.180/0065Zy9ely8fve0dvwdwnj31401z4b29.jpg" />
        <div class="name">
          <h1> 赵昌浩 </h1>
          <h3>求职意向：web 前端</h3>
        </div>
        <div class="info">
          <ul>
            <li>
              <i class="iconfont icon-rili" />
              生日：1998-11-22
            </li>
            <li>
              <i class="iconfont icon-weizhi" />
              籍贯：山东高密
            </li>
            <li>
              <i class="iconfont icon-dianhua" />
              电话：18593996744
            </li>
            <li>
              <i class="iconfont icon-youxiang" />
              邮箱：1533540012@qq.com
            </li>
          </ul>
        </div>
        <div class="link">
          <h2>作品链接</h2>
          <ul>
            <li>
              <i class="iconfont icon-github" />
              <a href="https://github.com/132yse" target='_blank'>开源作品</a>
            </li>
            <li>
              <i class="iconfont icon-lofter" />
              <a href="http://caowoa.lofter.com" target='_blank'>设计作品</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function Right() {
  return (
    <div class="right">
      <section class="section">
        <h1>
          <i class="iconfont icon-jiaoyu" />
          校园实践
        </h1>
        <p>
          <h3>2016.09——2020.06 北海艺术设计学院 动画专业 二本</h3>
          <ul>
            <li>2016 年加入 ·平行世界工作室·</li>
            <li>
              2017
              年，参与制作的《琵琶行》、《离骚》等，多次热搜，荣登环球时报、人民日报等各大报刊
            </li>
            <li>
              2018
              年，《逍遥游》发布，《琵琶行》荣登央视，由方锦龙先生奏乐，任嘉伦翻唱
            </li>
          </ul>
        </p>
      </section>
      <section class="section">
        <h1>
          <i class="iconfont icon-gongzuoliu" />
          项目经验
        </h1>
        <p>
          <h3>2018.06—— clicli弹幕网（c站） 个人项目</h3>
          <ul>
            <li>全栈，B 端 vue ，C 端 react，后端 golang + node</li>
            <li>我的开源项目 smox、fre、ep 等，都得到了大规模应用</li>
          </ul>
        </p>
        <p>
          <h3>2017.06——2017.08 北京无维科技 web 前端</h3>
          <ul>
            <li>vue 栈，负责开发《微信编辑器》，参考有赞、秀米</li>
          </ul>
        </p>
        <p>
          <h3>2018.06——2018.08 北京呈天游戏 web 前端</h3>
          <ul>
            <li>react 栈，负责 pwa 相关</li>
            <li>窝的开源项目 smox 得到应用，配合重构，使原项目更易维护</li>
          </ul>
        </p>
      </section>
      <section class="section">
        <h1>
          <i class="iconfont icon-github" />
          开源贡献
        </h1>
        <p>
          <h3>fre.js - 又一个小而美的前端 AOP 框架</h3>
          <ul>
            <li>受 react hooks API 启发，fre 是只有 hooks 的 AOP 框架</li>
            <li>
              世上少有的 fiber 调度的框架，fre 的 fiber 实现也是最小而美的
            </li>
            <li>您现在所看到的简历，就是基于 fre 构建的</li>
          </ul>
        </p>
        <p>
          <h3>smox - react 状态管理顶级设计</h3>
          <ul>
            <li>smox 是 react 状态管理顶级设计，它的封装极为精巧却强大</li>
            <li>独创 path 机制，能够精准、最小的更新状态</li>
            <li>支持微信小程序 setData 时传入的 path</li>
          </ul>
        </p>
        <p>
          <h3>eplayer - 面向未来的视频播放器</h3>
          <ul>
            <li>eplayer 是基于 web-component 的视频播放器</li>
            <li>
              天生自带 shadow-dom 和 scoped
              css，可以使得播放器接入网站而不受外界环境干扰
            </li>
          </ul>
        </p>
      </section>
      <section class="section">
        <h1>
          <i class="iconfont icon-gongju" />
          专业技能
        </h1>
        <ul class="common">
          <li>
            <span>开发：</span>熟练 vue、react、node、golang 等技术栈
          </li>
          <li>
            <span>设计：</span>熟练使用 ps、ae、maya 等设计软件
          </li>
          <li>
            <span>源码：</span>熟悉 preact 源码，了解 vue、react 部分源码
          </li>
          <li>
            <span>开源：</span>参与
            Omi（腾讯前端框架）、gatsby（facebook）等开源项目
          </li>
        </ul>
      </section>
      <section class="section">
        <h1>
          <i class="iconfont icon-pingjia" />
          自我评价
        </h1>
        <ul class="common">
          <li>
            <span>热爱开源</span>
            ，喜欢前端基础建设，也一直为此而努力，同时写大量业务支撑基建
          </li>
          <li>
            性格上比较脱线，还不够严谨，仍需不断修炼。但对待技术认真，有靠谱的判断力，会
            <span>按需</span>做出妥协与调整
          </li>
          <li>
            我不太爱钱，有超强的<span>熬夜</span>能力
          </li>
        </ul>
      </section>
    </div>
  )
}

render(<App />, document.getElementById('root'))
