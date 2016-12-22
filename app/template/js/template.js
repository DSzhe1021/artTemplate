/**
 * Created by yanyuanyuan on 16/12/12.
 */
 // ------------------加载依赖模块----------------------
var $ = require('jquery');
var template = require('art-template/dist/template');

var m = require("./M.js");
var c = require("./C.js");




//----------------full_header 默认输出顶部信息模板------------

    var render = template.compile(m.headerSource);
    var htmlFullHeader= render(c.headerData);
    $(".full-header").append(htmlFullHeader);
    // 如有特殊样式。请在单独的js文件重新传参


//----------------full_footer 底部信息模板------------

    var render = template.compile(m.footerSource);
    var htmlFullFooter = render(c.footerData);
    $(".full-footer").html(htmlFullFooter);


