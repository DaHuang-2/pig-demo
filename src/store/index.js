//仓库的实例

//引入 redux 中的 createStore 方法
import {createStore} from 'redux'
import reducer from './reducer'

const Store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default Store