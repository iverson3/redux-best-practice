/**
 * Created by stefan.wang on 8/25/2016.
 */
import $ from 'jquery'
// 对ajax请求进行封装

function ajax(url) {
    $.ajax({
        type: 'get',
        url : url,
        dataType: 'jsonp',
        jsonp: "jsoncallback",
        success: function(data) {

        },
        error: function() {
            console.log('error');
        }
    });
}