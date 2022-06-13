(function (window, document) {

    let Meiqiudisplay = function (meiqiu_name,meiqiu_attach,meiqiu_defend,meiqiu_speed,meiqiu_crit) {
        document.getElementById("meiqiu_name").innerHTML=meiqiu_name;
        document.getElementById("meiqiu_att").innerHTML=meiqiu_attach;
        document.getElementById("meiqiu_def").innerHTML=meiqiu_defend;
        document.getElementById("meiqiu_speed").innerHTML=meiqiu_speed;
        document.getElementById("meiqiu_crit").innerHTML=meiqiu_crit;
    }

    let get_meiqiu=function(Lv){

        var meiqiu_health=Math.round(Math.pow(Lv,2)*1.8+Lv+100);
        var names=["煤球","穴虫","旋镖兽","潮鲎","沙绵"];//
        var name_num= Math.round(Math.random()*(names.length-1));
        if(Lv<20){
            var meiqiu_name="呆萌"+names[name_num];

        }else if(Lv<40){
            meiqiu_name="狂野"+names[name_num];

        }else if(Lv<60){
            meiqiu_name="暴躁"+names[name_num];

        }else if(Lv<80){
            meiqiu_name="疯狂"+names[name_num];

        }else if(Lv<100){
            meiqiu_name="青铜"+names[name_num];

        }else if(Lv<120){
            meiqiu_name="白银"+names[name_num];

        }else if(Lv<140){
            meiqiu_name="黄金"+names[name_num];

        }else if(Lv<160){
            meiqiu_name="钻石"+names[name_num];

        }else if(Lv<180){
            meiqiu_name="大师"+names[name_num];

        }else if(Lv>=180){
            meiqiu_name="王者"+names[name_num];
        }

        var i_meiqiu=Math.floor(Lv/10);
        var i_Lv=Math.ceil(Lv/50)
        var meiqiu_attach=Math.round(Math.random()*i_meiqiu*20)+10*i_Lv;
        var meiqiu_defend=Math.round(Math.random()*i_meiqiu*20)+10*i_Lv;
        var meiqiu_speed=Math.round(Math.random()*i_meiqiu*20)+10*i_Lv;
        if (Lv<100){
             var meiqiu_crit=Math.round(Math.random()*Lv);
        }else {
             var meiqiu_crit=Math.round(Math.random()*100);
        }

        return{meiqiu_name:meiqiu_name,meiqiu_health:meiqiu_health,health_total:meiqiu_health,
            meiqiu_attach:meiqiu_attach,meiqiu_defend:meiqiu_defend,
            meiqiu_speed:meiqiu_speed,meiqiu_crit:meiqiu_crit}

    }



    //将构造函数暴露到window  可直接在全局作用域中访问构造函数
    // window.Meiqiudisplay = Meiqiudisplay;
    window.Get_meiqiu = get_meiqiu;

})(window,document);