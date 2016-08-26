/**
 * Created by stefan.wang on 8/22/2016.
 */


export function setName(name) {
    return {
        type: 'SET_NAME',
        name: name
    };
}

export function addItem(item) {
    return {
        type: 'ADD_ITEM',
        item: item
    };
}

export function menuCut(menuid) {
    return {
        type: 'MENU_CUT',
        now: menuid
    };
}