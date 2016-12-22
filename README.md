# artTemplate
仅供学习，不做任何商业用途


在使用art-template之前先要在电脑上装node、然后在安装npm管理器
  
  
  npm安装方法:
        
  要使用npm,需要先女装nodeJs,第一步查看本机是否有安装node
        node -v
        
   查看node版本号(没有node,点击链接:http://nodejs.cn/)
        
        
        
  中途会用到webpack(或者用browserify也可以)
  
  
    注:browserify安装方法和webpack类似,编译指令:browserify a.js > b.js;意思是把a.js编译成b.js
  
  (网站链接:http://webpackdoc.com/)
  
  
        webpack -d -p //编译
        
        //自动监听,不建议使用,这样电脑会卡的
       webpack -d -p --watch //监控
       
       
       //webpack安装
       
       
       npm install --save-dev webpack
       
       npm install -g webpack 