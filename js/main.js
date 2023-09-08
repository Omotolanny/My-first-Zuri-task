"strict";
const day =document.querySelector(".day")
const hour =document.querySelector(".hour")
const minutes =document.querySelector(".minutes")
const date = new Date();

console.log(hour)
hour.innerHTML =`${date.getUTCHours()}`
minutes.innerHTML =`${date.getMinutes()}`

const formatDay= function(str){  
  return new Intl.DateTimeFormat("en" , { 
    weekday: "long",
  }).format(new Date(str))
}

day.innerHTML = `${formatDay(date)}`