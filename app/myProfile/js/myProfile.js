/**
 * Created by zhangzhengzhe on 2016/12/21.
 */
var $ = require('jquery');
var template = require('art-template/dist/template');

var m = require("./M.js");
var c = require("./C.js");

var commonM = require("../../template/js/M.js");

//----------------nav  导航模板------------

var render = template.compile(commonM.navSource);
var htmlNav = render();
$("#f-nav").html(htmlNav);




//--------------------资料模板------------------



var render = template.compile(m.myProfileM);
$("#f-h-c").html(render(c.myProfileData));




//------------------js效果控制---------------------

$("#f-h-m a").bind("click",function(){
    $(this).find("i").toggleClass("more");
    $("#f-h-c article a:gt(4)").slideToggle(500).css({"display":"block"});
});

