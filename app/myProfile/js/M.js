/**
 * Created by zhangzhengzhe on 2016/12/21.
 */
var $ = require('jquery');
var template = require('art-template/dist/template');

var c = require("./C.js");

//---------------——————资料模板--------------------


var myProfileM = '<article id="f-h-c1" class="clear">'+
                    '{{each data as val index}}'+
                        '<a href="{{val.link}}">'+
                            '<span class="f-h-c-s">{{val.name}}</span>'+
                            '<i class="f-span f-span1"></i>'+
                        '</a>'+
                    '{{/each}}'+
                '</article>';



//--------------对外接口暴露------------


module.exports = {
    "myProfileM" : myProfileM
}