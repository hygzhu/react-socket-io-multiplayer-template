const game = function(previousState = {}, action) {
    switch (action.type) {
      case "SOME_CASE":
        return { ...previousState,
      };
      default:
        return previousState;
    }
  }
  
  export default game;