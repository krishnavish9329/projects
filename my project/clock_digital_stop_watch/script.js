setInterval(show,500);
function show(){
    let time =new Date();
    let hour =time.getHours();
    let min=time.getMinutes();
    let sec=time.getSeconds();
    ap_m ="AM";
    if(hour>=12){
        if(hour>12) hour-=12;
        ap_m="PM";
    }else if(houur==0){
        hour=12;
        ap_m="AM";
    }
    hour=hour<10?"0"+ hour:hour;
    min=min<10?"0"+min:min;
    sec=sec<10?"0"+sec:sec;
    let currentTime=hour+":"+min+":"+sec+" "+ap_m;
    document.getElementById("boxinner").innerHTML= "<h1>"+currentTime+"</h1>"
}


