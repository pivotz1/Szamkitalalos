input.onButtonPressed(Button.A, function () {
    if (tipp < 10) {
        tipp += 1
        basic.showString("" + (tipp))
    }
})
input.onGesture(Gesture.Shake, function () {
    ÚjJáték()
})
input.onButtonPressed(Button.AB, function () {
    if (tipp == szám) {
        basic.showString("=")
        basic.showIcon(IconNames.Yes)
    } else {
        if (tipp < szám) {
            basic.showString(">")
        } else {
            basic.showString("<")
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (tipp > 1) {
        tipp += -1
        basic.showString("" + (tipp))
    }
})
function ÚjJáték () {
    tipp = 0
    szám = randint(1, 10)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Target)
    basic.showIcon(IconNames.Diamond)
    basic.showLeds(`
        . # # # .
        # # . # #
        # . . . #
        # # . # #
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        # . . . #
        . . . . .
        # . . . #
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    basic.showString("?")
}
let szám = 0
let tipp = 0
ÚjJáték()
