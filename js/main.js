//ScrollMagic
// init controller
var controller = new ScrollMagic.Controller();


//pin the watch

							// build scene
							var pinWatch = new ScrollMagic.Scene({
                triggerElement: ".triger-1",
                triggerHook: 1,
                duration: "560%"
              })
											.setPin("#watch")

											.addTo(controller);






var audio = new Audio('click.mp3');

var coronaJust = new ScrollMagic.Scene({
    triggerElement: ".triger-1",
    duration: "60%"
})
  //.setClassToggle("#high1", "active") // add class toggle
.setTween(
  TweenLite.to(".corona", 2, {rotation: "-37", transformOrigin:"50% 50%"})
) //trigger TweenMax

//change update progress start end enter leave
.on("start change progress end", function (e) {
         audio.play();
})

// var middleFinger = TweenMax.to(".middle-finger", 2, {marginTop: "-86"}), //trigger TweenMax
// .setTween(middleFinger)
//.addIndicators() // add indicators (requires plugin)
.addTo(controller);

var minuteJust = new ScrollMagic.Scene({
    triggerElement: ".triger-1",
    duration: "60%"
})
.setTween(
  TweenLite.to(".minute-hand", 60, {rotation: "290", transformOrigin:"50% 50%"})
) //trigger TweenMax
.addTo(controller);

var hourJust = new ScrollMagic.Scene({
    triggerElement: ".triger-1",
    duration: "60%"
})
.setTween(
  TweenLite.to(".hour-hand", 2, {rotation: "42", transformOrigin:"50% 50%"})
) //trigger TweenMax
.addTo(controller);


var coronaOne = new ScrollMagic.Scene({
    triggerElement: ".triger-2",
    duration: "60%"
})
.setTween(
  TweenLite.to(".corona", 4, {rotation: "-98", transformOrigin:"50% 50%"})
) //trigger TweenMax
//change update progress start end enter leave
.on("start change progress end", function (e) {
         audio.play();
})
.addTo(controller);

var hourOne = new ScrollMagic.Scene({
    triggerElement: ".triger-2",
    duration: "60%"
})
.setTween(
  TweenLite.to(".hour-hand", 60, {rotation: "80", transformOrigin:"50% 50%"})
) //trigger TweenMax
.addTo(controller);

var minuteOne = new ScrollMagic.Scene({
    triggerElement: ".triger-2",
    duration: "60%"
})
.setTween(
  TweenLite.to(".minute-hand", 60, {rotation: "650", transformOrigin:"50% 50%"})
) //trigger TweenMax
.addTo(controller);

var coronaMore = new ScrollMagic.Scene({
    triggerElement: ".triger-3",
    duration: "60%"
})
.setTween(
  TweenLite.to(".corona", 4, {rotation: "-164", })
) //trigger TweenMax
//change update progress start end enter leave
.on("start change progress end", function (e) {
         audio.play();
})
.addTo(controller);

var hourMore = new ScrollMagic.Scene({
    triggerElement: ".triger-3",
    duration: "60%"
})
.setTween(
  TweenLite.to(".hour-hand", 60, {rotation: "105", transformOrigin:"50% 50%"})
) //trigger TweenMax
.addTo(controller);

var minuteMore = new ScrollMagic.Scene({
    triggerElement: ".triger-3",
    duration: "60%"
})
.setTween(
  TweenLite.to(".minute-hand", 60, {rotation: "1010", transformOrigin:"50% 50%"})
) //trigger TweenMax
.addTo(controller);




var coronaWatch = new ScrollMagic.Scene({
    triggerElement: ".triger-4",
    duration: "60%"
})
.setTween(
  TweenLite.to(".corona", 4, {rotation: "-230", transformOrigin:"50% 50%"})
) //trigger TweenMax

//change update progress start end enter leave
.on("start change progress end", function (e) {
         audio.play();
})
.addTo(controller);

var hourWatch = new ScrollMagic.Scene({
    triggerElement: ".triger-4",
    duration: "60%"
})
.setTween(
  TweenLite.to(".hour-hand", 60, {rotation: "132", transformOrigin:"50% 50%"})
) //trigger TweenMax
.addTo(controller);

var minuteWatch = new ScrollMagic.Scene({
    triggerElement: ".triger-4",
    duration: "60%"
})
.setTween(
  TweenLite.to(".minute-hand", 60, {rotation: "1370", transformOrigin:"50% 50%"})
) //trigger TweenMax
.addTo(controller);




var coronaPromise = new ScrollMagic.Scene({
    triggerElement: ".triger-5",
    duration: "60%"
})
.setTween(
  TweenLite.to(".corona", 8, {rotation: "-310", transformOrigin:"50% 50%"})
) //trigger TweenMax
//change update progress start end enter leave
.on("start change progress end", function (e) {
         audio.play();
})
.addTo(controller);

var hourPromise = new ScrollMagic.Scene({
    triggerElement: ".triger-5",
    duration: "60%"
})
.setTween(
  TweenLite.to(".hour-hand", 60, {rotation: "155", transformOrigin:"50% 50%"})
) //trigger TweenMax
.addTo(controller);

var minutePromise = new ScrollMagic.Scene({
    triggerElement: ".triger-5",
    duration: "60%"
})
.setTween(
  TweenLite.to(".minute-hand", 60, {rotation: "1730", transformOrigin:"50% 50%"})
) //trigger TweenMax
.addTo(controller);






//GET DATE FOR DIAL
// from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_getdate
function showDate() {
    var date = new Date();
    var day = date.getDate();
    document.getElementById("date").innerHTML = day;
};
showDate();
