/**
 * Created by stefan.wang on 8/26/2016.
 */

let menuActions = {
    menuCut: (menuid) => ({
        type: 'MENU_CUT',
        now: menuid
    })
};

export default menuActions;