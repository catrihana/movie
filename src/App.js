import './App.css';
import './style/landingPage.css';
import NavigationBar from "./components/NavigationBar"
import Intro from './components/Intro';
import Trending from './components/Trending';
import UpComing from './components/UpComing';

function App() {
  return (
    <div>
      {/* intro section */}
      <div className='myBG'>
        <NavigationBar />
        <Intro />
      </div>
      {/* end of intro */}

      {/* trending section */}
      <div className='trending'>
        <Trending/>
      </div>
      {/* end of trending section */}

      {/* upcoming section */}
      <div className='upcoming'>
        <UpComing/>
      </div>
      {/* end of upcoming section */}
   </div>
  )
}

export default App;
