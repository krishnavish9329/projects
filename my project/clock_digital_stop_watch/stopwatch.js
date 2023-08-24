// let watch=document.getElementById("number");
// watch.onclick=()=>{
    //         watch.innerHTML="krishna"
    // }
    
    let [seconds ,minutes ,hover]=[0,0,0];
    let watch=document.getElementById("number");
    let timer=null;
    function stopwatch(){
        seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hover++;
        }
    }
    let h=hover<10?"0"+hover:hover;
    let m=minutes<10?"0"+minutes:minutes;
    let s=seconds<10?"0"+seconds:seconds;
    watch.innerHTML= h+":"+m+":"+s;
    console.log(h+":"+m+":"+s)
}
function watchStart(){
    if(timer!=null){
        clearInterval(timer);
    }
    timer=setInterval(stopwatch,1000);
}
function watchstop(){
    clearInterval(timer);      
}
function watchreset(){
    clearInterval(timer);   
    [seconds ,minutes ,hover]=[0,0,0];
    watch.innerHTML= "00:00:00"

}

let st=document.getElementById("start")
st.onclick=watchStart;
let stop=document.getElementById("stop")
stop.onclick=watchstop;
let reset=document.getElementById("reset")
reset.onclick=watchreset;
watch.style.color="white"