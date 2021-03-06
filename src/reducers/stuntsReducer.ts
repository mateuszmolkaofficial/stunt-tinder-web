const initialState = {
  stunts: []
}

interface InterfaceStuntsAction {
  type: string;
  stunts: any;
}

const StuntsReducer = (state = initialState, action: InterfaceStuntsAction) => {
    switch (action.type) {
      case 'REMOVE_FIRST_STUNT':
        const newStunts = [...state.stunts];
        newStunts.shift();
        return {...state, stunts: newStunts};
      case 'UPDATE_STUNTS':
        return {...state, stunts: action.stunts};
      default:
        return state
    }
  }

export default StuntsReducer;