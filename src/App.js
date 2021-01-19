import logo from './logo.svg';
import './App.css';
import CakeContainer from './component/CakeContainer';
import {Provider} from 'react-redux'
import store from './component/redux/store'
import HooksCakeContainer from './component/HooksCakeContainer';
import IceCreamContainer from './component/IceCreamContainer';
import NewCakeContainer from './component/NewCakeContainer';
import ItemContainer from './component/ItemContainer';
import UsersContainer from './component/UsersContainer';
function App() {
  return ( 
    <Provider store={store}>
       <div className="App">

         <ItemContainer cake  />
         <ItemContainer/>

         <hr/>

         <NewCakeContainer/>

         <hr/>
            <CakeContainer/>
            <IceCreamContainer/>
            <hr/>

            <HooksCakeContainer/>
            <hr/>
          <UsersContainer/>
       </div>
    </Provider>
 
  );
}

export default App;
