import { BUTTON_CLICK } from "../actions/actions";

const defaultState = {
    buttonValue: "Default value"
};

export const buttonReducer = (state=defaultState, action) => {
    switch (action.type) {
        case BUTTON_CLICK:
            return Object.assign({}, state, {
                buttonValue: "Button clicked"
            });
        default:
            return state;
    }
}