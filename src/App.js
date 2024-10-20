import './App.css';
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
//import Header from "./components/Navbar.js";

const App = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#000000',
  };

  const itemStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97fdce',
    margin: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={itemStyle}><Introduction /></div>
      <div style={itemStyle}> <Projects /></div>
    </div>
  );
}

export default App;

