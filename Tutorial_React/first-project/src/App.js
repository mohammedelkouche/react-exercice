// import logo from './logo.svg';
// import './App.css';
import Header from "./components/Header" ;
import Contact from "./components/Contact" ;
import Shopping from "./components/shopping";
function App() {
  return (
    <div className="App">
      <Header branding = "Contact Manager" />
      <Contact name = "john doe"
              email = "john@hmail.com"
              phone = "0612334439" />
      <Shopping/>      

    </div>
  );
}

export default App;
