import './App.css';
import { Table10 } from './components/Table10';
import {Table11} from './components/Table11';
import {Table12} from './components/Table12';
import { Table9 } from './components/Table9';

function App() {
  return (
    <div>
    <div className="App">
      <h3 className='heading'>9. Landholding Information (in acres)</h3>
      <Table9/>
      <h3 className='heading'>10. Agricultural Produce in a normal year (Top 5)</h3>
      <Table10/>
      <h3 className='heading'>11. Livestock Numbers (in numbers)</h3>
      <Table11/>
      <h3 className='heading'>12. Major Problems in village, if any (Top 3)</h3>
      <Table12/>
      
    </div>
    </div>
  );
}

export default App;