window.addEventListener('DOMContentLoaded', function() {
    var timeDisplay = document.getElementById('time');
    var setAlarmButton = document.getElementById('setAlarmBtn');
    var clearAlarmButton = document.getElementById('clearAlarmBtn');
    var alarmTimeInput = document.getElementById('alarmTime');
    var alarmInterval;
  
    // Update current time every second
    setInterval(updateTime, 1000);
  
    // Set alarm button click handler
    setAlarmButton.addEventListener('click', function() {
      var alarmTime = alarmTimeInput.value;
      if (alarmTime !== '') {
        var now = new Date();
        var alarm = new Date(now.toDateString() + ' ' + alarmTime);
  
        if (alarm > now) {
          var timeUntilAlarm = alarm - now;
          setAlarm(timeUntilAlarm);
        } else {
          alert('Please select a future time for the alarm.');
        }
      } else {
        alert('Please enter a valid time for the alarm.');
      }
    });
  
    // Clear alarm button click handler
    clearAlarmButton.addEventListener('click', clearAlarm);
  
    // Update the current time
    function updateTime() {
      var now = new Date();
      var timeString = now.toLocaleTimeString();
      timeDisplay.textContent = 'Current Time: ' + timeString;
  
      // Check if alarm time has been reached
      if (alarmInterval && now >= alarmInterval) {
        alert('Wake up!');
        clearAlarm();
      }
    }
  
    // Set the alarm
    function setAlarm(time) {
      clearAlarm();
      alarmInterval = new Date(Date.now() + time);
      alert('Alarm set!');
    }
  
    // Clear the alarm
    function clearAlarm() {
      clearTimeout(alarmInterval);
      alarmInterval = undefined;
    }
  });
  