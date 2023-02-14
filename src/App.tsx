import './App.css'
import 'normalize.css'
import Title from "./components/Title/Title";
import Avatar from "./components/Avatar/Avatar";
import AlpacaProvider from './context/AlpacaProvider';
import Ui from './components/Ui/Ui';


function App() {

  return (
    <div className="App">
      <AlpacaProvider>
        <Title />
          <Avatar/>
          <Ui/>
        </AlpacaProvider>
    </div>
  )
}

export default App
