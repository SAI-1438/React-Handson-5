import './App.css';
import HocCom from './HOCComponents/HocCom';
import ClickCom from './HOCComponents/ClickCom';
import MouseOverCom from './HOCComponents/MouseOverCom';
import PureComponent from './PureComponents/PureComponent';
import NormalComponent from './PureComponents/NormalComponent';

function App() {
  return (
    <div className="App">
      <HocCom/>
      <ClickCom/>
      <MouseOverCom/>
      <br/>
      <hr/>
      <NormalComponent/>
      <PureComponent/>
    </div>
  );
}

export default App;
