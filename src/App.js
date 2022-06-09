
import './styles/App.css';
import Desktop from './Desktop'
import Mobile from './Mobile';

function App() {
  return (
    <div className="App">
      <Mobile className="mobile" />
      {/* <Desktop className="desktop" />       */}
      <Desktop className="desktop" />
    </div>
  );
}

export default App;
