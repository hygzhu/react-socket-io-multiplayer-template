import { combineReducers } from "redux";

// Import reducers:
import game from "../components/game/game.reducer";

const rootReducer = combineReducers({
  game
})

export default rootReducer;
