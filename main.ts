input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 B A G F E D C ", 120)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("ahoj")
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.North)
})
input.onGesture(Gesture.Shake, function () {
    game.addScore(1)
})
loops.everyInterval(10000, function () {
	
})
loops.everyInterval(6000, function () {
    let logging = 0
    if (logging) {
    	
    }
})
basic.forever(function () {
	
})
