import './App.css'
import 'normalize.css'
import Title from "./components/Title/Title";
import Avatar from "./components/Avatar/Avatar";
import Ui from "./components/Ui/Ui";
import AlpacaProvider from './context/AlpacaProvider';


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
