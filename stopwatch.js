// In this Javascript file I have created a StopWatch class which I will later use to create an object of StopWatch class.
class StopWatch{

    // This is constructor for the StopWatch class.
    constructor(hour,min,sec){
        this.hour = hour;
        this.min = min;
        this.sec = sec;
    }

    // When the user clicks on the Start button this function will be called. This will start the StopWatch.
    start(){
        const watchInterval = setInterval(this.tick,1000);
        this.watchInterval = watchInterval;
    }

    // This function will be called after every second to increase the time by 1 sec as I have passed this function as an argument to setInterval function in the start function.
    tick(){
        if(parseInt(this.sec.innerText) === 59){
            this.sec.innerText = '00';
            
            if(parseInt(this.min.innerText) === 59){
                this.min.innerText = '00';

                this.hour.innerText = `${parseInt(this.hour.innerText) + 1}`;

                if(this.hour.innerText.length == 1){
                    this.hour.innerText = '0' + this.hour.innerText;
                }
            }else{
                this.min.innerText = `${parseInt(this.min.innerText) + 1}`;

                if(this.min.innerText.length == 1){
                    this.min.innerText = '0' + this.min.innerText;
                }
            }
        }else{
            this.sec.innerText = `${parseInt(this.sec.innerText) + 1}`;

            if(this.sec.innerText.length == 1){
                this.sec.innerText = '0' + this.sec.innerText;
            }
        }
    }

    // This function will be called when user clicks on the stop button. This will stop the StopWatch as the interval will be cleared in this function.
    stop(){
        clearInterval(this.watchInterval);
    }

    // This function will be called when the user clicks on the reset button. 
    //Hour, minutes and second will be set to zero and the StopWatch will also be stopped when this function is called.
    reset(){
        if(this.watchInterval){
            clearInterval(this.watchInterval);
        }

        this.hour.innerText = '00';
        this.min.innerText = '00';
        this.sec.innerText = '00';
    }
}