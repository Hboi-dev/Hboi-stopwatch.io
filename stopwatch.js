let [mil , sec , min , hr]=[0,0,0,0];
let display=document.querySelector('.box');
let Hboi;
let snapValues=document.querySelector('.snaps');

startTime = () =>{
    if (!Hboi) {
        Hboi = setInterval(timer, 10);   
    } 
}

timer = () =>{
    mil += 10;
    if (mil == 1000) {
        mil=0;
        sec++;
        if (sec==60) {
            sec=0;
            min++;
            if (min==60) {
                min=0;
                hr++;
                
            }
            
        }
    }
    getInt();


}

getInt = () => {
    
    let h = hr < 10 ? '0' + hr : hr;
    let m = min < 10 ? '0' + min : min;
    let s = sec < 10 ? '0' + sec : sec;
    let ms = mil < 10 ? '00' + mil : mil < 100 ? '0' + mil : mil;
    
    return display.innerHTML = `${h} :  ${m} :  ${s} :  ${ms}`;
}

stop = () => {
    clearInterval(Hboi);
    Hboi = false;
}
pauseTime = () => {
    stop();
}

stopTime = () => {
    stop();
    min=0;
    sec=0;
    mil=0;
    hr=0;
    getInt();
}

restartTime = () => {
    stopTime();
    startTime();
}

snapTime = () =>{
    if (Hboi) {
        let lap = document.createElement('li');
        lap.innerHTML= getInt();
        snapValues.appendChild(lap);
    }
}

resetTime = () => {
    snapValues.innerHTML= " ";
}