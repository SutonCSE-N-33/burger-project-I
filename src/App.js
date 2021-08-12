import Main from './Component/Main';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Store} from '../src/Redux/Store';
function App() {
  return (
    <div >
      <Provider store={Store}>
      <BrowserRouter>
          <Main />
          </BrowserRouter>
      </Provider>
    </div>
    
  );
}

export default App;
