(function (window, document) {

    let Maoqiudisplay = function (maoqiu_name,maoqiu_attach,maoqiu_defend,maoqiu_speed,maoqiu_crit) {
        document.getElementById("maoqiu_name").innerHTML=maoqiu_name;
        document.getElementById("maoqiu_att").innerHTML=maoqiu_attach;
        document.getElementById("maoqiu_def").innerHTML=maoqiu_defend;
        document.getElementById("maoqiu_speed").innerHTML=maoqiu_speed;
        document.getElementById("maoqiu_crit").innerHTML=maoqiu_crit;
    }
    // 每日boss
    let Getdayboss = function (Lv, seed){
        local_seed=$SeededRandom(seed,1,0,10);
        name_num= Math.round(local_seed[0]*(dayboss_name.length-1));
        if(typeof(localStorage.dayboss_data_lifenum) == "undefined" || localStorage.dayboss_data_lifenum<=0){
            localStorage.dayboss_data_lifenum=10;
        }
        var dayboss_data=[]
        dayboss_data["seed"]=seed;
        dayboss_data["Lv"]=Lv;
        var i_Lv=Math.ceil(Lv/50);

        dayboss_data["name"]=dayboss_name[name_num];
        dayboss_data["life_num"]=parseFloat(localStorage.dayboss_data_lifenum);
        dayboss_data["health"]=Math.round(Math.pow(Lv,2)*2+10*Lv)*(local_seed[1]+1)*10;
        dayboss_data["att"]=Math.round((1+local_seed[2]) * Lv)+i_Lv*10;
        dayboss_data["def"]=Math.round((1+local_seed[3]) * Lv)+i_Lv*10;
        dayboss_data["speed"]=Math.round((1+local_seed[4]) * Lv)+i_Lv*10;
        dayboss_data["crit"]=Math.round((local_seed[5]) * 100);
        dayboss_data["health_total"]=Math.round(Math.pow(Lv,2)*2+10*Lv)*(local_seed[1]+1)*10;

        localStorage.dayboss_data_lifenum=dayboss_data.life_num;
        localStorage.dayboss_seed=dayboss_data.seed;



        return dayboss_data
    }
    //毛球
    let Daybossdisplay = function (dayboss_data) {
        document.getElementById("Dayboss_name").innerHTML=dayboss_data.name+"("+dayboss_data.life_num+"/10)";
        document.getElementById("Dayboss_att").innerHTML=dayboss_data.att;
        document.getElementById("Dayboss_def").innerHTML=dayboss_data.def;
        document.getElementById("Dayboss_speed").innerHTML=dayboss_data.speed;
        document.getElementById("Dayboss_crit").innerHTML=dayboss_data.crit;
    }

    var dayboss_name = ["浮空鲸群", "愤怒蜃兽群","舰炮鱼群","饥饿泉龙","巨型海盘","掠夺者舰队","强盗团","奇怪收税队","外星人调查团","邪恶科学家"];

    let get_maoqiu=function(Lv){
        var i_Lv=Math.floor(Lv/50);
        var health = Math.round(maoqiu_health_fix+(Math.pow(Lv,2)*2+10*Lv+20));
        var attach = Math.round(maoqiu_attach_fix + ((1+Math.random()) * Lv)+i_Lv*10);
        var defend = Math.round(maoqiu_defend_fix + ((1+Math.random()) * Lv)+i_Lv*10);
        var speed = Math.round(maoqiu_speed_fix + ((1+Math.random()) * Lv)+i_Lv*10);
        if (Lv<100){
            var crit = Math.round(maoqiu_crit_fix + ((Math.random()) * Lv));
        }else {
            var crit = Math.round(maoqiu_crit_fix + ((Math.random()) * 100));
        }

        var name = "呆萌毛球"


				if (Lv>20){
					name="野蛮毛球";
				}
				else if (Lv>60){
					name="狂躁毛球";

				}else if (Lv>100){
					name="狂野毛球";

				}else if(Lv>150){
					name="疯狂毛球";

				}else if(Lv>200){
					name="超凡毛球";

				}

        return{name:name,health:health,health_total:health,
            attach:attach,defend:defend,
            speed:speed,crit:crit}

    }


    //将构造函数暴露到window  可直接在全局作用域中访问构造函数
    // window.Maoqiudisplay = Maoqiudisplay;
    window.Getdayboss = Getdayboss;
    // window.Daybossdisplay = Daybossdisplay;
    window.Getmaoqiu=get_maoqiu;

})(window,document);