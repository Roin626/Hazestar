(function (window, document) {

    var messagelist=["滴滴滴~你和宇宙中的潮澜人进行了一次通信，他们生活在一个全是海洋的星球，你很好奇他们是怎么发展出文明的",
                "滴滴滴~你和宇宙中的地球人进行了一次通信，他们自称失去了母星正在流浪，诶我不就是地球人吗？？",
                "滴滴滴~你和宇宙中的徙星鸟进行了一次通信，你很好奇对方是怎么独自在宇宙中飞行的，但是对方并不想理你",
                "滴滴滴~你和宇宙中的汐海人进行了一次通信，她们是海洋文明，你很好奇她们的飞船是不是个大水缸",
                "滴滴滴~你和宇宙中的祈月人进行了一次通信，对方试图说服你信仰某个宗教，但是你没听明白是什么",

                "滴滴滴~你和宇宙中的恒洸进行了一次通信，对方自称有2600多岁了，你很羡慕并且试图说服自己他们只是的公转周期更快",
                "滴滴滴~你和宇宙中的妖族进行了一次通信，你很震惊小时候故事里的种族真的存在，你满脑子想着兽耳娘形象，没注意对方接下来说了什么",
                "滴滴滴~你和宇宙中的织梦者进行了一次通信，对方只是好奇的瞥了一下，你无法理解对方的存在，但是你好像抓住了什么灵感",
                "滴滴滴~你和宇宙中的灵魂调制者进行了一次通信，对方好像很有兴趣的发送了很多信息，但是只看见通信灯闪烁却完全没接受到",
                "滴滴滴~你和宇宙中的毛玉进行了一次通信，对方没说几句话就被一个叫理香子的抓走了",

                "滴滴滴~你和宇宙中的樱陌进行了一次通信，对方告诉你高数很重要，要好好学",
                "滴滴滴~你和宇宙中的不知名种族进行了一次通信，不过你完全没看懂他们的信号",
                
                "滴滴滴~你与星幻建立了联系，他指导你进行了一次土法升级核心提炼，你获得了升级核心+10",
                "滴滴滴~你与dis完成了一次交易，他前来帮助你战斗了",
                "滴滴滴~你和宇宙中的昕羽进行了一次通信，昕羽的科学家告诉你如何利用电磁波寻找岚星晶矿，你试了下还真行！！岚星晶矿+1",
            ]
    special_events = ["滴滴滴~你与星幻建立了联系，他指导你进行了一次土法升级核心提炼，你获得了升级核心+10",
                    "滴滴滴~你与dis完成了一次交易，他前来帮助你战斗了",
                    "滴滴滴~你和宇宙中的昕羽进行了一次通信，昕羽的科学家告诉你如何利用电磁波寻找岚星晶矿，你试了下还真行！！岚星晶矿+1",
                ]

    let getmessage= function (){

        
        i=Math.round(Math.random()*messagelist.length-1);

        var message= messagelist[i];

        return message

    }


    //将构造函数暴露到window  可直接在全局作用域中访问构造函数
    
    window.Get_message =  getmessage;

})(window,document);