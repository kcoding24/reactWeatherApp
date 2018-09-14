var daysMap = {
  "0":"Sunday",
  "1":"Monday",
  "2":"Tuesday",
  "3":"Wednesday",
  "4":"Thursday",
  "5":"Friday",
  "6":"Saturday"
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


function getDate(date) {
  var reqDay = new Date(date);
  var day =daysMap[reqDay.getDay()];
  var date = reqDay.getDate();
  var month = monthsMap[reqDay.getMonth()];

  return day +','+date+','+month

}

module.exports = {
  getDate: getDate,
}