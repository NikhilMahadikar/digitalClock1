function digiclk()
{
    var date=new Date();   
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    // var ml=date.getMilliseconds();
    var dt=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var day=date.getDay();
    var am_pm="AM"
    if(hh>=12){
        am_pm="PM";
        if(hh>12)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }

    if(mo==0){
        mo="Jan"
    }
    else if(mo==1)
    {
        mo="Feb"
    }
    else if(mo==2)
    {
        mo="Mar"
    }
    else if(mo==3)
    {
        mo="Apl"
    }
    else if(mo==4)
    {
        mo="May"
    }
    else if(mo==5)
    {
        mo="Jun"
    }
    else if(mo==6)
    {
        mo="Jul"
    }
    else if(mo==7)
    {
        mo="Aug"
    }
    else if(mo==8)
    {
        mo="Sep"
    }
    else if(mo==9)
    {
        mo="Oct"
    }
    else if(mo==10)
    {
        mo="Nov"
    }
    else
    {
        mo="Dec"
    }
    switch(day)
    {
        case 0: day="Sunday"
        document.body.style.backgroundImage="url(./sunday.jpg)"
        break;

        case 1:day="Monday"
        document.body.style.backgroundImage="url(./monday.jpg)"
        break;

        case 2:day="Tuesday"
        document.body.style.backgroundImage="url(./tue.jpg)"
        break;

        case 3:day="Wednesday"
        document.body.style.backgroundImage="url(./wed.jpg)"
        break;

        case 4:day="Thursday"
        document.body.style.backgroundImage="url(./thu.jpg)"
        break;

        case 5:day="Friday"
        document.body.style.backgroundImage="url(./fri.jpg)"
        break;

        case 6:day="Saturday"
        document.body.style.backgroundImage="url(./sat.jpg)"
        break;
    }
    document.getElementById("Date").innerHTML=`${dt}/${mo}/${yy}`;
    document.getElementById("Time").innerHTML=`${hh}:${mm} ${am_pm}`;
    document.getElementById("Day").innerHTML=day;
    document.getElementById("Sec").innerHTML=ss;
    setTimeout(digiclk,1000);
}
digiclk()

var alarmMus=new Audio();
alarmMus.src="./intro-music-black-box-trap-beat-13221.mp3"

function alarm()
{
    var allSelectTags=document.querySelectorAll("select");
    var userGivenHours=allSelectTags[0].value
    var userGivenMin=allSelectTags[1].value
    var userGivenAm_Pm=allSelectTags[2].value
    var date=new Date();   
    var hh=date.getHours();
    var mm=date.getMinutes();
    var am_pm="AM"
    if(hh>=12){
        am_pm="PM";
        if(hh>12)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    if(userGivenHours==hh && userGivenMin==mm && userGivenAm_Pm==am_pm)
    {
        alarmMus.play()
    }
    else{
        alarmMus.pause()
    } 
    setTimeout(alarm,1000)
}
function close(){
    document.getElementById("alarm").style.display="none"
 
}
function alarmDisplay()
{
    document.getElementById("alarm").style.display="flex"
}

