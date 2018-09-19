var React=require('react');


var daysMap = {
  "0":"Sunday",
  "1":"Monday",
  "2":"Tuesday",
  "3":"Wednesday",
  "4":"Thursday",
  "5":"Friday",
  "6":"Saturday"
};

var daysNumMap = {
  "Sunday":"0",
  "Monday":"1",
  "Tuesday":"2",
  "Wednesday":"3",
  "Thursday":"4",
  "Friday":"5",
  "Saturday":"6"
};

var monthsMap = {
  "0":"Jan",
  "1":"Feb",
  "2":"Mar",
  "3":"Apr",
  "4":"May",
  "5":"June",
  "6":"July",
  "7":"Aug",
  "8":"Sept",
  "9":"Oct",
  "10":"Nov",
  "11":"Dec"
};
function dayNameConverter (num) {
  return daysMap[num]
}

function getDate(date) {
  var reqDay = new Date(date);
  var day =daysMap[reqDay.getDay()];
  var daynum=reqDay.getDay();
  var date = reqDay.getDate();
  var hour = reqDay.getHours();
  var month = monthsMap[reqDay.getMonth()];

  return [day,hour,daynum]

}


function dayClassifier(forecast) {
  var monday=[];
  var tuesday=[];
  var wednesday=[];
  var thursday=[];
  var friday=[];
  var saturday=[];
  var sunday=[];
  var days = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];

  forecast.map( 
          function(forecast,index) {
            var [date,hour] = getDate(forecast.dt_txt);
            
            var imageSrc = '/app/images/weather-icons/'+forecast.weather[0].icon+'.svg';
            switch(date) {
              case 'Monday': 
                monday.push(
                  <div key={index} className='day'>
                    <img src={imageSrc}/>
                    <p>{hour}:00</p>
                    <p>{forecast.dt_txt}</p>
                  </div>
                )
                break;
              case 'Tuesday': 
                tuesday.push(
                  <div key={index} className='day'>
                    <img src={imageSrc}/>
                    <p>{hour}:00</p>
                    <p>{forecast.dt_txt}</p>
                  </div>
                )
                break;
              case 'Wednesday': 
                wednesday.push(
                  <div key={index} className='day'>
                    <img src={imageSrc}/>
                    <p>{hour}:00</p>
                    <p>{forecast.dt_txt}</p>
                  </div>
                )
                break;
              case 'Thursday': 
                thursday.push(
                  <div key={index} className='day'>
                    <img src={imageSrc}/>
                    <p>{hour}:00</p>
                    <p>{forecast.dt_txt}</p>
                  </div>
                )
                break;
              case 'Friday': 
                friday.push(
                  <div key={index} className='day'>
                    <img src={imageSrc}/>
                    <p>{hour}:00</p>
                    <p>{forecast.dt_txt}</p>
                  </div>
                )
                break;
              case 'Saturday': 
                saturday.push(
                  <div key={index} className='day'>
                    <img src={imageSrc}/>
                    <p>{hour}:00</p>
                    <p>{forecast.dt_txt}</p>
                  </div>
                )
                break
              case 'Sunday': 
                sunday.push(
                  <div key={index} className='day'>
                    <img src={imageSrc}/>
                    <p>{date}</p>
                    <p>{forecast.dt_txt}</p>
                  </div>
                )
                break;
            }
            
          }
        )

  var currentDay = getDate(forecast[0].dt_txt)[2];

  
  
  var daysOrder = [];
  var daysNameOrder =[];
  var i = 0;
  while (i<5) {
    var dayid=currentDay%7;
    daysOrder.push(days[dayid]);
    daysNameOrder.push(daysMap[dayid])
    
    i++;
    currentDay++;
  }
  
  
return [daysOrder,daysNameOrder]
}

module.exports = {
  getDate: getDate,
  dayClassifier: dayClassifier,
  dayNameConverter: dayNameConverter
}