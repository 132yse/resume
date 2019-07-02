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
          <h3>2019.06—— 搜狐体育小程序</h3>
          <ul>
            <li>前端主程，fard / fre</li>
            <li>使用 fard 开发体育小程序，同时完善 fard</li>
            <li><span>难点：多端小程序 api 的抹平问题</span></li>
          </ul>
        </p>
        <p>
          <h3>2019.06—— 新版搜狐首页</h3>
          <ul>
            <li>前端主程，react / ssr</li>
            <li>主要是 react 开发新版搜狐首页，其中 slider 等原生组件被搜狐多个项目复用</li>
            <li><span>难点：react ssr 和 ie8 兼容</span></li>
          </ul>
        </p>
        <p>
          <h3>2018.06—— clicli弹幕网（clicli.us）</h3>
          <ul>
            <li>全栈，vue / react / ssr / node / golang</li>
            <li>vue，主要是 vue ssr；react 主要是 smox；node 主要负责解析系统；golang 主要是后端 API</li>
            <li><span>难点：前端主要是 vue ssr 和 播放器（+弹幕系统）</span></li>
          </ul>
        </p>
      </section>
      <section class="section">
        <h1>
          <i class="iconfont icon-github" />
          开源项目
        </h1>
        <p>
          <h3>fre.js - 1kb react16 like 框架</h3>
          <ul>
            <li>使用 300 行复现了 react fiber 架构，同时拥有更精巧的抽象机制</li>
            <li>你现在所看到的简历，就是基于 fre 构建的</li>

            <li><span>难点：fiber 的实现和 hooks 是如何在 fiber 上运作的，以及如何设计抽象层，使跨端成为可能</span></li>
          </ul>
        </p>
        <p>
          <h3>fard.js - fre 转多端小程序框架</h3>
          <ul>
            <li>类似于 RN 的原理，使得小程序中跑 fre 而不需要编译</li>
            <li>在 seData 之前做一层 diff，保证每次 setData 的量都是最小的，从而大幅度优化性能</li>
            <li><span>难点：整个架构设计的思路，性能优化的思路</span></li>
          </ul>
        </p>
        <p>
          <h3>smox - react 状态管理顶级设计</h3>
          <ul>
            <li>smox 是 react 状态管理顶级设计，它的封装极为精巧却强大</li>
            <li>独创 path 机制，能够精准、最小的更新状态</li>
            
            <li><span>难点：path 机制和命中匹配的思路</span></li>
          </ul>
        </p>
        <p>
          <h3>eplayer - 面向未来的视频播放器</h3>
          <ul>
            <li>基于 web-component 的 runtime，可以理解为浏览器自带的 vue</li>
            <li>
              天生自带 shadow-dom 和 scoped
              css，可以使得播放器接入网站而不受外界环境干扰
            </li>

            <li><span>难点：可能就是 web-component 的一些不为人知的，比如如何穿透 scoped css</span></li>
          </ul>
        </p>
        <p>
          <h3>use-routes - 适用于 fre 和 react 的 hooks 版本路由</h3>
          <ul>
            <li>为 hooks 而生，同时适用于 fre 和 react</li>
            <li>
              800 B ，但却提供了路由常见的 API，利用了一个巧妙的正则排位算法，去匹配 url
            </li>

            <li><span>难点：可能是 hooks 中路由的设计思路</span></li>
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
            <span>源码：</span>熟悉很多前端库的源码
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
            ，喜欢将自己的脑洞通过代码实现出来，开源的每一个轮子都有设计上的独到之处
          </li>
          <li>
            性格上比较脱线，不够严谨，仍需不断修炼。但对待技术认真，有靠谱的判断力，会
            <span>按需</span>做出妥协与调整
          </li>
        </ul>
      </section>
    </div>
  )
}

render(<App />, document.getElementById('root'))
