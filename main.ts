input.onButtonPressed(Button.A, function () {
    if (d == 20) {
        d = 12
        basic.showNumber(d)
    } else if (d == 12) {
        d = 10
        basic.showNumber(d)
    } else if (d == 10) {
        d = 8
        basic.showNumber(d)
    } else if (d == 8) {
        d = 4
        basic.showNumber(d)
    } else if (d == 4) {
        d = 3
        basic.showNumber(d)
    } else if (d == 4) {
        d = 3
        basic.showNumber(d)
    } else if (d == 3) {
        d = 2
        basic.showNumber(d)
    } else {
        d = 20
        basic.showNumber(d)
    }
})
input.onButtonPressed(Button.B, function () {
    if (d == 2) {
        d = 3
        basic.showNumber(d)
    } else if (d == 3) {
        d = 4
        basic.showNumber(d)
    } else if (d == 4) {
        d = 6
        basic.showNumber(d)
    } else if (d == 6) {
        d = 8
        basic.showNumber(d)
    } else if (d == 8) {
        d = 10
        basic.showNumber(d)
    } else if (d == 10) {
        d = 12
        basic.showNumber(d)
    } else if (d == 12) {
        d = 20
        basic.showNumber(d)
    } else {
        d = 2
        basic.showNumber(d)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.pause(100)
    a = randint(1, d)
    basic.showNumber(a)
})
let a = 0
let d = 0
d = 2
