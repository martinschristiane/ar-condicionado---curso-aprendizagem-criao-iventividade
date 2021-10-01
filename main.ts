let i = 500
CrocoKit_Motor.MotorRun(AnalogPin.P0, i)
basic.showString("Olá!")
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        i += 100
        if (i >= 1023) {
            i += 100
        }
        CrocoKit_Motor.MotorRun(AnalogPin.P0, i)
        basic.pause(200)
    }
    if (input.buttonIsPressed(Button.B)) {
        i += 100
        if (i <= -100) {
            i += 0
        }
        CrocoKit_Motor.MotorRun(AnalogPin.P0, i)
        basic.pause(200)
    }
})
