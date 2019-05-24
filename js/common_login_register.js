// 设置ie兼容ajax 此处jq-1.11.3
jQuery.support.cors=true;
// ajax公用设置
var global_url = "http://39.106.94.93:90"
$.ajaxSetup({
    url : global_url,
    global : false,
    type : 'post',
    dataType : 'json',
    cache : false,
    timeout : 10000,
    beforeSend : function() {
	// 加载loading等操作
	$.DialogByZ.Loading('../lib/jQueryZdialog/image/loading.png'); 
    },
    complete : function() {
	// 加载完毕后执行操作 删除loading等操作
	$.DialogByZ.Close();
    },
    error : function(jqXHR, textStatus, errorThrown) {
    // console.log(jqXHR, textStatus, errorThrown)
	// 加载顺序原因此处弹窗需要延时触发
	setTimeout(function () {
	     $.DialogByZ.Alert({Title: "", Content: "系统链接超时，请稍后再试",BtnL:"确定",FunL:alerts});
	}, 1)
    }
});
// 关闭提示
function alerts(){
    $.DialogByZ.Close();
}