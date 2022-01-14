import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Appbar from './components/header/Appbar';
import Carousel from './components/main/Carousel';
import OurService from './components/main/OurService';
import FrequentlyAskQuestions from './components/main/FrequentlyAskQuestions';
import Articles from './components/main/Articles';


function App() {
  return (
    <div className="App">
      <header className="App-header sticky-top">
        <Appbar />
      </header>
      <main className=" container-xl d-grid gap-5">
        <Carousel />
        <div className="d-grid gap-5">
          <OurService />
          <Articles />
          <FrequentlyAskQuestions />
        </div>
      </main>
      <footer className="mt-5 p-3 shadow-sm" style={{ backgroundColor: "#97DFF4" }}>
        <small><b>Ansnow Founder</b>: Assaufie, Azhar, Julkarnain, Rayyan Azka, Sabiq Muhammad</small>
      </footer>
    </div>
  );
}

export default App;
