import './style.css'
import { h, render } from 'fre'
function App(){
  return (
    <div class='container'>
      <div class="left"></div>
      <div class="right"></div>
    </div>
  )
}

render(<App />, document.getElementById('root'))
