import InterfaceStunt from "../interfaces/InterfaceStunt";

const initialState = {
  choices: []
}

interface InterfaceStuntsAction {
  type: string;
  choice: InterfaceStunt;
}

const ChoicesReducer = (state = initialState, action: InterfaceStuntsAction) => {
    switch (action.type) {
      case 'ADD_STUNT_CHOICE':
        const newChoices: InterfaceStunt[] = [...state.choices];
        newChoices.push(action.choice);
        return {...state, choices: newChoices};
      default:
        return state
    }
  }

export default ChoicesReducer;