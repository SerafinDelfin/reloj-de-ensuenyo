let clock = document.getElementsByClassName("clock")[0]

setInterval(() => {
    window.location.reload()
}, 15000)

function reloj(){
    const mirror = ["01_10", "02_20", "03_30", "04_40", "05_50", "10_01", "11_11", "12_21", "13_31", "14_41", "15_51", "20_02", "21_12", "22_22", "23_32"]
    var owo = new Date();
    let hours = owo.getHours();
    var mins = owo.getMinutes();

    if (hours < 10) {
        var act = `0${hours}_${mins}`
    } else if (mins < 10) {
        var act = `${hours}_0${mins}`
    } else if (hours < 10 && mins < 10) {
        var act = `0${hours}_0${mins}`
    } else {
        var act = `${hours}_${mins}`
    }

    mirror.forEach(function (element) {
        console.log(element)
        console.log(act)
        if (element === act) {
            const mirror_hour = document.createElement('img')
            mirror_hour.src = (`./horas_espejo/${act}.png`)
            document.body.appendChild(mirror_hour)
        } else {
            console.log(act)
            const dh = document.createElement('img')
            dh.src = (`./horas_normales/dh${act[0]}.png`)
            dh.style.position = "absolute"
            document.body.appendChild(dh)

            const uh = document.createElement('img')
            uh.src = (`./horas_normales/uh${act[1]}.png`)
            uh.style.position = "absolute"
            document.body.appendChild(uh)

            const dm = document.createElement('img')
            dm.src = (`./horas_normales/dm${act[3]}.png`)
            dm.style.position = "absolute"
            document.body.appendChild(dm)

            const um = document.createElement('img')
            um.src = (`./horas_normales/um${act[4]}.png`)
            um.style.position = "absolute"
            document.body.appendChild(um)
        }
    })
    setTimeout(reloj, 1000);
}

reloj()
