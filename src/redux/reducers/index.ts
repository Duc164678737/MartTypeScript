
import { combineReducers } from "redux";
import addItems from './item'
import searchItem from './search'

const rootReducers = combineReducers({
    addItems,
    searchItem
})
export default rootReducers;

export type State = ReturnType<typeof rootReducers>;