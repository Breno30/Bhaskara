    function bhaskara() {

        var a = window.document.getElementById('txtn1').value
        var b = window.document.getElementById("txtn2").value
        var c = window.document.getElementById("txtn3").value
        //coletando valores

        var delt = b ** 2 - 4 * a * c


        //se a for igual a zero
        if (a == 0) {
            window.alert(`Toda função do 2º grau tem a ≠ 0`)
        } else {
            delta.innerHTML = ` ${(delt).toFixed(2)}`
            if (delt < 0) {
                //Δ
                res1.innerHTML = ` <strong>impossivel, delta negativo</strong>`
                res2.innerHTML = ` <strong>impossivel, delta negativo</strong>`
            } else {
                var x1 = ((- b + (delt ** (1 / 2))) / (2 * a)).toFixed(2)
                var x2 = ((- b - (delt ** (1 / 2))) / (2 * a)).toFixed(2)
                res1.innerHTML = ` <strong>${x1}</strong>`
                res2.innerHTML = ` <strong>${x2}</strong>`
                vert.innerHTML = ` <strong>${(-b / (2 * a)).toFixed(2)}, ${(-delt / (4 * a)).toFixed(2)}</strong>`
                //grafico
                let myChart = document.getElementById('myChart').getContext('2d');
                let massPopChart = new Chart(myChart, {
                    type: 'line',
                    data: {
                        //x
                        labels: [x1, (-b / (2 * a)).toFixed(2), x2],

                        datasets: [{
                            label: 'x',
                            //y
                            data: [0, (-delt / (4 * a)).toFixed(2), 0],
                            backgroundColor: 'transparent'
                        }]
                    },
                    options: {
                        animation: {
                            //animação dura 1 segundo
                            duration: 1000

                        }

                    }
                });
            }
            //condicoes concavidade
            if (a < 0) {
                con.innerHTML = ` <strong>baixo</strong>`
            } else {
                con.innerHTML = ` <strong>cima</strong>`
            }





        }


    }

                
