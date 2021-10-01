let i = 500
CrocoKit_Motor.MotorRun(AnalogPin.P0, i)
basic.showString("OLA!")
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        i += 100
        if (i >= 1023) {
            i = 1023
        }
        CrocoKit_Motor.MotorRun(AnalogPin.P0, i)
        basic.pause(200)
    } else if (input.buttonIsPressed(Button.B)) {
        i += -100
        if (i <= 0) {
            i = 0
        }
        CrocoKit_Motor.MotorRun(AnalogPin.P0, i)
        basic.pause(200)
    }
})
