(function (window, document) {


    let get_skillpoint=function(Lv){

        var skillpoint=parseFloat(localStorage.skillpoint);
        var skillpoint_total=parseFloat(localStorage.skillpoint_total);

        skillpoint=skillpoint+3;
        skillpoint_total=skillpoint_total+3;

        localStorage.skillpoint_total = skillpoint_total;
        localStorage.skillpoint = skillpoint;

        return {skillpoint:skillpoint,skillpoint_total:skillpoint_total}
    }

    let get_equipment=function (seed,Lv){
        local_seed=$SeededRandom(seed,1,0,10);
        var equipment_PR=local_seed[0]*10;

        if (equipment_PR<4){
            var equipment_type=0; // 40%白色装备
        }else if(equipment_PR<7.5){
            var varequipment_type=1; // 35%绿色装备
        }else if(equipment_PR<9.5){
            var equipment_type=2; // 20%紫色装备
        }else if(equipment_PR<11){
            var equipment_type=3; // 5%金色装备
        }
        equipment_value(equipment_type,Lv);

    }

    function equipment_value(type, Lv){
        sum = Math.floor(Lv/10)*20;
        var fSumTmp = 0;
        var equip_att=0;
        var equip_def=0;
        var equip_speed=0;
        var equip_crit=0;
        if (type==0){
            fSumTmp=sum*0.8;
            name_front = "锈蚀的"
        }else if(type==1){
            fSumTmp=sum*0.9;
            name_front = "普通的"
        }else if(type==2){
            fSumTmp=sum;
            name_front = "回火的"
        }else if(type==3){
            fSumTmp=sum*1.2;
            name_front = "平衡的"
        }
        var arr  = new Array(4).fill(0);
        for(var value_idx=0;value_idx<fSumTmp;value_idx++){
            i = parseInt(Math.random()*4)
            arr[i] ++
        }
        equip_att=arr[0];
        equip_def=arr[1];
        equip_speed=arr[2];
        equip_crit=arr[3];

        name_id=Math.round(Math.random()*(equip_names.length-1));

        if (equip1==1){
            localStorage.equip1_type = equipment_type;
            localStorage.equip1_att = equip_att;
            localStorage.equip1_def = equip_def;
            localStorage.equip1_speed = equip_speed;
            localStorage.equip1_crit = equip_crit;
            localStorage.equip1_name = name_front + equip_names[name_id];
            writeLogOl("赌剑呀！你抽到了"+localStorage.equip1_name)
            equipment_display();
			}
        else if (equip2==1){
            localStorage.equip2_type = equipment_type;
            localStorage.equip2_att = equip_att;
            localStorage.equip2_def = equip_def;
            localStorage.equip2_speed = equip_speed;
            localStorage.equip2_crit = equip_crit;
            localStorage.equip2_name = name_front + equip_names[name_id];
            writeLogOl("赌剑呀！你抽到了"+localStorage.equip2_name);

        }

    }

    let get_round_point=function (Lv){
        round_point=Math.floor(Lv/50);

        return round_point
    }

    let get_uppower_event=function(){
        local_seed=$SeededRandom(seed,1,0,10);

    }

    //将构造函数暴露到window  可直接在全局作用域中访问构造函数
    window.Get_skillpoint = get_skillpoint;
    window.Get_equipment=get_equipment;
    window.Get_roundpoint=get_round_point;
    window.Get_uppower_envet=get_uppower_event;

})(window,document);