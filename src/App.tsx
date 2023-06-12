import './App.css';
import Gallery from './components/Gallery/Gallery';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Gallery />
      </div>
    </>
  );
}

export default App;
