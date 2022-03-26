// Here I have selected hour, minute and seconds container so that I can pass these containers to the StopWatch with the help of which StopWatch will manage time.
const hour = document.querySelector('#hour');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

// Here I have created an object of class StopWatch. The StopWatch class is implemented in the file "stopwatch.js".
const stopwatch = new StopWatch(hour,min,sec);

// Here I have selected start, stop and reset buttons to add EventListeners to these buttons.
const start = document.querySelector('#start');
const stops = document.querySelector('#stop');
const reset = document.querySelector('#reset');

// Here I have added an EventListener to the start button. So the StopWatch will start when the user clicks on start button.
start.addEventListener('click',()=>{  stopwatch.start()  });

// Here I have added an EventListener to the stop button. So the StopWatch will stop when the user clicks on stop button.
stops.addEventListener('click',()=>{  stopwatch.stop()  });

// Here I have added an EventListener to the reset button. So the time will be reseted when the user clicks on the reset button.
reset.addEventListener('click',()=>{  stopwatch.reset()  });

