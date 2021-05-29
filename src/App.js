import './App.css';
import {Merhaba,Dugme,Dikkat} from './FunctionalComponent'
import {Sayac,Hi} from './ClassComponent';

function App() {
  return (
    <div className="App">
    <p>Hoşgeldiniz</p>
    <Hi/>
    <Sayac/>
    <Sayac/>
    <Sayac/>
    <Merhaba name ="Ayşe"/>
    <Dugme name ="Gizem"/>
    <Dikkat/>
    <Dikkat/>
    <Dikkat/>
    </div>
  );
}

export default App;
