/**
 * Created by zhangzhengzhe on 16/12/12.
 */
var $ = require('jquery');
var template = require('art-template/dist/template');

var c = require("./C.js");
//----------------full_header 顶部信息模板------------
    var headerSource =  '{{if title}}'+
                              
                            '<a href="###" class="icon-back"></a>'+
                            '<a href="###" class="icon-login"></a>'+
                             
                        '{{else}}'+
                          '<a href="###" class="icon-home"></a>'+
                          '<a href="###" class="icon-login"></a>'+
                        '{{/if}}';


     var loginHeaderSource = '{{if title == "login"}}'+
                                  '用户登录'+
                              '{{/if}}'+
                             '{{if title == "register"}}'+
                                  '用户注册'+
                              '{{/if}}'+
                              '{{if title == "selecter"}}'+
                                  '请选择您的身份'+
                              '{{/if}}'+
                               '<a href="###" class="icon-home"></a>';
//----------------full_footer 底部信息模板------------
   var footerSource = "<article>"+
                            "{{each title as value i}}"+
                                '<p class="{{claify[i]}} clear">' +
                                   " {{each value as key i}}"+
                                       ' <a href="###" class="{{if i == 0}} touch {{/if}}">{{key}}</a>'+
                                   ' {{/each}}'+
                               ' </p>'+
                            '{{/each}}'+
                           ' <p class="copyright">'+
                               ' copyright &copy; 2016 北京华夏商盟版权所有 京ICP备16041114号'+
                           ' </p> '+
                        '</article>';


// ----------------nav 主导航------------
  var　navSource =  '<a href="###">'+
                          '<p class="nav-color-1">'+
                            '<i></i>'+
                            '<span>找资金</span>'+
                          '</p>'+   
                     ' </a>'+
                      '<a href="###">'+
                         ' <p class="nav-color-2">'+
                            '<i></i>'+
                           ' <span>选项目</span>'+
                         ' </p>'+ 
                     ' </a>'+
                      '<a href="###">'+
                         ' <p class="nav-color-3">'+
                            
                           ' <span>盟服务</span>'+
                            '<i></i> '+
                         ' </p> '+ 
                     ' </a>'+
                     ' <a href="###">'+
                         ' <p class="nav-color-4">'+
                           
                           ' <span>盟学院</span>'+
                             '<i></i>'+
                          '</p>'+
                     ' </a>'+
                      '<a href="###">'+
                         ' <p class="nav-color-5">'+
                            ' <i></i>'+
                             '<span>登陆/注册</span>'+
                          '</p>'+
                      '</a>';

// ------------------对外暴露模块接口----------------------
module.exports ={
  "headerSource":headerSource,
  "footerSource":footerSource,
  "loginHeaderSource":loginHeaderSource,
  "navSource":navSource
 
}