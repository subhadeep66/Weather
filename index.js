let input=document.querySelector("#city")
let btn=document.querySelector("#btn1")
let cityResult=document.querySelector("#cityResult")
let temperature=document.querySelector("#temperature")
let description=document.querySelector("#description")
let wind=document.querySelector("#wind")
let menu=document.querySelector(".show")
apik="925c47ff1ebb8d6248a4bde26f6b4ea0"

menu.style.display="none"

function degree(input){
    return (input-273).toFixed(3)
}

function call(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+input.value+"&appid="+apik)
    .then(res=>res.json())
    .then(data=>{
        var name=data['name']
        var descrip=data['weather']['0']['description']
        var temp=data['main']['temp']
        var windSpeed=data['wind']['speed']

        cityResult.innerHTML=`weather of <span>${name}</span>`
        temperature.innerHTML=`Temperature <span>${degree(temp)}C </span>`
        description.innerHTML=`Weather is ${descrip}`
        wind.innerHTML=`wind speed is ${windSpeed}`

    })
    .catch(err=> alert('No info about this city'))
    menu.style.display="block"
}
btn.addEventListener("click",call)
console.log(input.value)

document.addEventListener("keypress",(event)=>{
    press(event.key)
})
    function press(key){
        if(key==="Enter"){
            call()
        }    
    }
function voice(){
    var recognition=new webkitSpeechRecognition();
    recognition.lang="en-GB"
    recognition.onresult=function(event){
        document.getElementById("city").value=event.results[0][0].transcript
    }
    recognition.start()
}