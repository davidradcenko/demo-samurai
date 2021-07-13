
import reactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
 import store from './Redux/Redux-Store';
import { BrowserRouter } from 'react-router-dom';


let rerenderEntireTree=()=>{
reactDom.render(
    <BrowserRouter>
    <Provider store={store}>
          <App />
    </Provider> 
    </BrowserRouter>
    , document.getElementById('root')

);
}
window.store=store;
rerenderEntireTree(store.getState());
// store.subscribe(()=>{
//     let state=store.getState();
// rerenderEntireTree(state)
// });
