
    var hours = document.getElementById("hoursspan");
    var minutes = document.getElementById("minutesspan");
    var seconds = document.getElementById("secondsspan");

    var day = document.getElementById("dayspan");
    var date = document.getElementById("datespan");
    var month = document.getElementById("monthspan");
    var year = document.getElementById("yearspan");


setInterval(()=>{
    var time = new Date()
    if(time.getHours() <= 12){
        hours.innerText = (time.getHours()).toString()
        minutes.innerText = time.getMinutes()
        seconds.innerText = time.getSeconds() + " AM"
        var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        day.innerText = days[time.getDay()];
        month.innerText = (time.getMonth() + 1) 
        date.innerText = time.getDate() 
        year.innerText = time.getFullYear();
    }
    else{
        hours.innerText = (time.getHours() -12).toString()
        minutes.innerText = time.getMinutes()
        seconds.innerText =  time.getSeconds() + " PM"
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        day.innerText = days[time.getDay()];
        month.innerText = (time.getMonth() + 1) 
        date.innerText = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
        year.innerText = time.getFullYear();
    }
    if(time.getSeconds()<10){
        seconds.innerText = "0" + (time.getSeconds()).toString()
    }
    if(time.getMinutes()<10){
        minutes.innerText = "0" + (time.getMinutes()).toString()
    }
    if(time.getHours()<10){
        hours.innerText = "0" + (time.getHours()).toString()
    }
    if(time.getDate()<10){
        date.innerText = "0" + time.getDate()
    }
    if((time.getMonth() + 1)<10){
        month.innerText = "0" + (time.getMonth() + 1)
    }
},1000)


