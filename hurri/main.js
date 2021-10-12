function countTime() {  
    //获取当前时间  
    var date = new Date();  
    var now = date.getTime();  
    //设置截止时间  
    var str="2021/10/20 08:00:00";
    var endDate = new Date(str); 
    var end = endDate.getTime();  
    console.log(leftTime)
          //时间差  
     
    var leftTime = (end - now)/1000;
    //将倒计时赋值到div中  
    let time = document.querySelector('#countdown')
    let t = null
    t = setInterval(() => {
        var d,h,m,s;  
        if (leftTime>=0) {  
            d = Math.floor(leftTime/60/60/24);  
                h = Math.floor(leftTime/60/60%24);  
            m = Math.floor(leftTime/60%60);  
            s = Math.floor(leftTime%60);   
            leftTime -= 1
        }else{
            clearInterval(t)
        }
        if (m < 10) {
            m = "0"+m
        }
        if (h < 10) {
            h = "0"+h
        }
        if (s < 10) {
            s = "0"+s
        }
        time.innerHTML = d+" : "+h+" : "+m+" : "+s;  
    }, 1000);

    
    // //递归每秒调用countTime方法，显示动态时间效果  
    // setTimeout(countTime,1000);  
    
}  

countTime()

var copy = function () {

    var div = document.createElement("div");

    div.innerHTML = '<span>' + "0xb399Ba9B8717D31FDd06204262499BF22D2e17ab" + '</span>';

    document.body.appendChild(div);

    var range = document.createRange();

    var selection = window.getSelection();

    selection.removeAllRanges();

    range.selectNodeContents(div);

    selection.addRange(range);

    document.execCommand('copy');

    selection.removeAllRanges();

    document.body.removeChild(div);
    alert("Copy Success");
};

var comingSoon = function () {
    alert("coming soon");
};


var language = "en"
var changeLanguage = function () {
    
    if (language == "en") {
        language = "cn"
        document.querySelector('#language').style.background = "url('./images/cn.png') no-repeat 0 0"
        
        document.querySelector('#image1').style.background = "url('./images/c1.jpg') no-repeat 0 0"
        document.querySelector('#image2').style.background = "url('./images/c2.jpg') no-repeat 0 0"
        document.querySelector('#image3').style.background = "url('./images/c3.jpg') no-repeat 0 0"
        document.querySelector('#image4').style.background = "url('./images/c4.jpg') no-repeat 0 0"
        document.querySelector('#image5').style.background = "url('./images/c5.jpg') no-repeat 0 0"

        document.querySelector('#list1').src = "./images/listc1.png"
        document.querySelector('#list2').src = "./images/listc2.png"
        document.querySelector('#list3').src = "./images/listc3.png"
    }else{
        language = "en"
        document.querySelector('#language').style.background = "url('./images/en.png') no-repeat 0 0"

        document.querySelector('#image1').style.background = "url('./images/1.jpg') no-repeat 0 0"
        document.querySelector('#image2').style.background = "url('./images/2.jpg') no-repeat 0 0"
        document.querySelector('#image3').style.background = "url('./images/3.jpg') no-repeat 0 0"
        document.querySelector('#image4').style.background = "url('./images/4.jpg') no-repeat 0 0"
        document.querySelector('#image5').style.background = "url('./images/5.jpg') no-repeat 0 0"

        document.querySelector('#list1').src = "./images/list1.png"
        document.querySelector('#list2').src = "./images/list2.png"
        document.querySelector('#list3').src = "./images/list3.png"
    }
    
};