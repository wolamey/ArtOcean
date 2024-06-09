import './News.css'
import NewsBlock from './Components/NewsBlock';

function App() {

  return (
    <>
        <div className="main">
          <div className="container">
            <p className='way'>Home/News</p>
            <h1 className='pageTitle'>News</h1>
            <div className="mainNewsBlock">
              <NewsBlock />
              <NewsBlock />
              <NewsBlock />
              <NewsBlock />
              <NewsBlock />
              <NewsBlock />
            </div>
          </div>
        </div>
    </>
  )
}

export default App;