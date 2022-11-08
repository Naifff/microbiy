input.onButtonPressed(Button.A, function () {
    if (d == 20) {
        d = 12
        print(d)
    } else if (d == 12) {
        d = 10
        print(d)
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
        print(d)
    }
})
function print (x: number) {
    if (x < 10) {
        basic.showNumber(a)
    } else if (x == 10) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            `)
    } else if (x == 11) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
    } else if (x == 12) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . # . .
            # . # # #
            `)
    } else if (x == 13) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . . # #
            # . . . #
            # . # # #
            `)
    } else if (x == 14) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # # #
            # . . . #
            # . . . #
            `)
    } else if (x == 15) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . . . #
            # . # # #
            `)
    } else if (x == 16) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . # . #
            # . # # #
            `)
    } else if (x == 17) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . . # .
            # . . # .
            # . . # .
            `)
    } else if (x == 18) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . # . #
            # . # # #
            `)
    } else if (x == 19) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . . . #
            # . # # #
            `)
    } else if (false) {
    	
    } else {
        basic.showLeds(`
            # # # # #
            . # # . #
            . # # . #
            # . # . #
            # # # # #
            `)
    }
}
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
        print(d)
    } else if (d == 10) {
        d = 12
        print(d)
    } else if (d == 12) {
        d = 20
        print(d)
    } else {
        d = 2
        basic.showNumber(2)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.pause(100)
    a = randint(1, d)
    print(a)
})
let a = 0
let d = 0
d = 2
