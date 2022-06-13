//输出时间
(function (window, document) {
    let TimeFn= function(){
        var str= "";
        var year = Gettime().year;
        var mon = Gettime().mon;
        var day = Gettime().day;
        var h = Gettime().h;
        var m = Gettime().m;
        var s = Gettime().s;
        var week = Gettime().week;
        str = year +"年"+totwo(mon)+"月"+totwo(day)+"日"+"&nbsp;"+totwo(h)+":"+totwo(m)+":"+totwo(s)+"&nbsp;"+"星期"+week;

                     // str = year +"年"+mon+"月"+day+"日"+"&nbsp;"+h+":"+m+":"+s+"&nbsp;"+"星期"+week;
            return str
    }

    let Gettime = function (){
        var time = new Date();

        //年、月、日、时、分、秒、星期
        year = time.getFullYear();
        mon = time.getMonth()+1;
        day = time.getDate();
        h = time.getHours();
        m = time.getMinutes();
        s = time.getSeconds();
        week = time.getDay();

        switch (week){
            case 0:week="日";
                break;
            case 1:week="一";
                break;
            case 2:week="二";
                break;
            case 3:week="三";
                break;
            case 4:week="四";
                break;
            case 5:week="五";
                break;
            case 6:week="六";
                break;
            }

        return {year:year, mon:mon, day:day, h:h, m:m, s:s, week:week}
    }

    //当月份或者日期是一位数的时候显示前面加一个0 比如2020年08月04日 18:20:53 星期二
    function totwo(n){
        if(n<=9){
            return n = "0"+n;
        }
        else{
            return n =""+n;
        }
    }
    /**
 * 复制多行内容到粘贴板
 * contentArray: 需要复制的内容（传一个字符串数组）
 * message : 复制完后的提示，不传则默认提示"复制成功"
 */
    let copyToClip=function(contentArray, message) {
        var contents = "";
        for (var i = 0; i < contentArray.length; i++) {
            contents += contentArray[i] + "\n";
        }
        const textarea = document.createElement('textarea');
        textarea.value = contents;
        document.body.appendChild(textarea);
        textarea.select();
        if (document.execCommand('copy')) {
            document.execCommand('copy');
        }
        document.body.removeChild(textarea);

        if (message != null) {
            alert(message);
        }

        // if (message == null) {
        //     alert("复制成功");
        // } else{
        //     alert(message);
        // }
    }

    /**
 * 复制单行内容到粘贴板
 * content : 需要复制的内容
 * message : 复制完后的提示，不传则默认提示"复制成功"
 */
    let copyOnelineToClip = function(content, message) {
        var aux = document.createElement("input");
        aux.setAttribute("value", content);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
        if (message != null) {
            alert(message);
        }
        // if (message == null) {
        //     alert("复制成功");
        // } else{
        //     alert(message);
        // }
    }


    let SeededRandom = function(seed,max,min,num) {
        var seed = seed
        max = max || 1;
        min = min || 0;
        var rndlist=[];

        for (var i= 0; i<num; i++) {
            seed = (seed * 9301 + 49297) % 233280;
            var rnd = seed / 233280.0;
              rndlist[i]=min + rnd * (max - min);
            }
        return rndlist
        }





//将构造函数暴露到window  可直接在全局作用域中访问构造函数
    window.$TimeFn = TimeFn;
    window.$Gettime = Gettime;
    window.$CopyToClip = copyToClip;
    window.$Copyoneline = copyOnelineToClip;
    window.$SeededRandom=SeededRandom;




})(window, document)


