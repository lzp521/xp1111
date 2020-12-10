// 获取页面元素
let input_yhm = document.getElementById('yhm');
let sp_an = document.getElementById('kk');
input_yhm.onfocus = function(){
        sp_an.style.opacity = '1';
        sp_an.style.color = 'black';
}
input_yhm.onblur = function(){
    var user = /^[a-zA-Z]\w{3,15}$/;
    if(user.test(input_yhm.value)){
        sp_an.style.color = 'red';
    }else{
        sp_an.style.opacity = '0';
    }
}

// if(!input_yhm){
//     alert('不能为空');break;
//     
// }
// input_yhm.onblur = function(){
//     if()
// }
// sp_an.onclick = function(){
//     alert('shuc');
// }
$('#regist').click(function(){
    // alert('点击');
    let input_yhm = $('#yhm').val();
    let input_mm = $('#mima').val();
    let input_zc = $('#regist');
    if(!input_yhm){
        alert('用户名不能为空');
    }
    if(!input_mm){
        alert('密码不能为空');
        return;
    }
})

