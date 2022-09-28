import "./App.css";
import "./components/Hero.css";
import "./components/Articles.css";
import "./components/Footer.css";
import Header from "./components/Header";
import Digital from "./components/Digital";
import Hero from "./components/Hero";
import Articles from "./components/Articles";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">

    <Header/>
  <main>
    <Digital />
    <Hero />
    <Articles />
  </main>
    <Footer />
    </div>
  );
}

export default App;
