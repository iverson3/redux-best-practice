/**
 * Created by stefan.wang on 8/26/2016.
 */

// 表单字段类型验证库

// 支持验证的类型集合
export const validateType = {
    username: 'username',
    password: 'password',
    email: 'email',
    phone: 'phone',
    age: 'age'
};


// 验证处理器
let validateHandler = [];

validateHandler[validateType.username] = function (...value) {
    var str = value[0].trim();
    if(str.length != 0){
        let reg = /^[a-zA-Z0-9_]+$/;
        if(!reg.test(str)){
            return false;
        }
    } else {
        return false;
    }
    return true;
};

validateHandler[validateType.password] = function (...value) {
    if (value[0] === value[1]) {
        return true;
    } else {
        return false;
    }
};

validateHandler[validateType.age] = function (...value) {
    let str = value[0];
    if (str.length !== 0 && str !== 0) {
        let reg = /^[-+]?\d*$/;
        if(!reg.test(str)){
            if (str >= parseInt('18') && str < parseInt('100')) {
                return true;
            }
        }
    }
    return false;
};

validateHandler[validateType.email] = function (...value) {
    let str = value[0];
    if(str.length !== 0){
        let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (!reg.test(str)) {
            return false;
        }
        return true;
    } else {
        return false;
    }
};

validateHandler[validateType.phone] = function (...value) {
    let str = value[0];
    if (str.length !== 0) {
        let reg = /^0?(13[0-9]|15[012356789]|18[0236789]|14[57])[0-9]{8}$/;
        if (!reg.test(str)) {
            return false;
        }
        return true;
    } else {
        return false;
    }
};



// 验证调用函数
export function validate(type, ...value) {
    return validateHandler[type](...value);
};