/**
 * Created by iFan on 16/8/25.
 */
function itemsReducer(state = [], action) {
    switch (action.type) {
        case "ADD_ITEM":
            return [
                ...state,
                action.item
            ];
        default:
            return state;
    }
}

export default itemsReducer;