setInterval(function () {
  const currtentDate = new Date()
  let hours = currtentDate.getHours().toString(2)
  let minutes = currtentDate.getMinutes().toString(2)
  let seconds = currtentDate.getSeconds().toString(2)
  let day  = currtentDate.getDay().toString(2)
  let month  = currtentDate.getMonth().toString(2)
  let year  = currtentDate.getFullYear().toString(2)

  
  // -- maakt alle velden de juist lengte.
  while (hours.length < 5) {
    hours = "0".repeat(5-hours.length)+hours 
  }

  while (minutes.length < 6) {
    minutes = "0".repeat(6-minutes.length)+minutes 
  }
  
  while (seconds.length < 6) {
    seconds = "0".repeat(6-seconds.length)+seconds
  }

  while (day.length < 5){
    day = "0".repeat(5-day.length)+day
  }

  while (month.length < 4){
    month = "0".repeat(4-month.length)+month
  }

  while (year.length < 11){
    year = "0".repeat(11-year.length)+year
  }


  // DOM word geupdate en word gewisseld tussen classes
  $('#hours .binary').each(function (pointer) {
    $(this)[hours.charAt(pointer) == 0 ? 'addClass' : 'removeClass']('binaryIsZero')
  });

  $('#minutes .binary').each(function (pointer) {
    $(this)[minutes.charAt(pointer) == 0 ? 'addClass' : 'removeClass']('binaryIsZero');
  });

  $('#seconds .binary').each(function (pointer) {
    $(this)[seconds.charAt(pointer) == 0 ? 'addClass' : 'removeClass']('binaryIsZero');
  });


   $('#day .binary').each(function (pointer) {
    $(this)[day.charAt(pointer) == 0 ? 'addClass' : 'removeClass']('binaryIsZero')
  });

  $('#month .binary').each(function (pointer) {
    $(this)[month.charAt(pointer) == 0 ? 'addClass' : 'removeClass']('binaryIsZero');
  });

  $('#year .binary').each(function (pointer) {
    $(this)[year.charAt(pointer) == 0 ? 'addClass' : 'removeClass']('binaryIsZero');
  });

 
}, 100);


// berkent dagen en tijd voor digitale klik
function digitalTime() {

  const date = new Date();
  const day = ['Zon', 'Ma', 'Din', 'Woe', 'Don', 'Fri', 'Zat'];
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  document.querySelector('.day').innerHTML = day[date.getDay()];
  document.querySelector('.hours').innerHTML = minutesWithLeadingZero(hours);
  document.querySelector('.minutes').innerHTML = minutesWithLeadingZero(minutes);
  document.querySelector('.seconds').innerHTML = minutesWithLeadingZero(seconds);

  // functie heeft parameter hier mee extra 0 toegevoegd 
  function minutesWithLeadingZero(addZero) {
      if (addZero < 10) {
        return '0' + addZero;
      }
      return addZero;
  }
}

setInterval(digitalTime, 100);