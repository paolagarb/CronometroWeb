time
i
s
funcTime

function cronometro() {
  time = document.getElementById("time")
        
        if (i < 10) {
            time.innerHTML = "00:0"+i
            i++
        } 
        else if (i < 60) {
            time.innerHTML = "00:"+i
            i++
        } 
        else if (i==60){
            time.innerHTML = "01:00"
            i++
        }
        else if (i > 60) {
            s++
            if (i < 120) {
                m = 1
                s = i%60
            }
            if (i == 120) {
                m = 2
                s = i%60
            }
            if (i > 120 && i < 180) {
                m = 2
                s = i%60
            }
            if (i == 180 || i > 180 && i < 240) {
                m = 3
                s = i%60
            }
            if (i == 240 || i > 240 && i < 300) {
                m = 4
                s = i%60
            }
            if (i == 300 || i > 300 && i < 360) {
                m = 5
                s = i%60
            }
            if (i == 360 || i > 360 && i < 420) {
                m = 6
                s = i%60
            }
            if (i == 420 || i > 420 && i < 480) {
                m = 7
                s = i%60
            }
            if (i == 480 || i > 480 && i < 540) {
                m = 8
                s = i%60
            }
            if (i == 540 || i > 540 && i < 600) {
                m = 9
                s = i%60
            }  if (i == 600 || i > 600 && i < 660) {
                m = 10
                s = i%60
            }
            if (i%60 < 10) {
                time.innerHTML = "0"+m+":0"+s
               /* time.innerHTML = "0"+m+":"+"0"+(i-60)*/
                i++
            } else if (i%60 >= 10) {
                time.innerHTML = "0"+m+":"+s
                i++
            }
        } 
}

function iniciar() {
    i = 0
    s = 0
    funcTime = setInterval(cronometro, 1000) /*1000 = 1 segundo*/
}

function parar() {
    clearInterval(funcTime)
}

function zerar() {
    parar()
    time.innerHTML = "00:00"
}