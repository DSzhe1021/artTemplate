/**
 * Created by zhangzhengzhe on 16/12/12.
 */



//----------------full_header 顶部信息模板------------

    var headerData  = {
        title:""
    }


//----------------full_footer 底部信息模板------------

    var footerData={
        title:[
            ["触屏版","电脑版","关于我们"],
            ["联系我们","建议与投诉","诚聘英才"]
        ],
        claify:["version","info"]
    };

// ------------------对外暴露模块接口----------------------
module.exports = {
    "headerData":headerData,
	"footerData":footerData
}

