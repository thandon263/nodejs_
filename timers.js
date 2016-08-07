var waitTime = 3000;
var currentTime = 0;
var waitInterval = 500;

function writeWaitingPercent(p) {

    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}`);

}

setInterval(function() {

    currentTime += waitInterval;

    console.log(`waiting ${currentTime/1000} ...`);

}, waitInterval);

percentWaited = Math.floor((currentTime/waitTime) * 100);

var interval = setInterval(function() {
    currentTime += waitInterval;
    percentWaited = Math.floor((currentTime/waitTime) * 100);
    writeWaitingPercent(percentWaited);
}, waitInterval);

setTimeout(function() {

           clearInterval(interval);
           writeWaitingPercent(100);
           console.log("Done!");

           }, waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);
