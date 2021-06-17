
var dark = true;
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    dark = true;

} else {
    dark = false;
}
muda_cor()


function mode() {
    if (dark) {
        dark = false;
    } else {
        dark = true;
    }
    muda_cor()
}


function muda_cor() {
    //muda cor da pagina
    if (dark) {
        document.body.style.backgroundColor = '#232931';
        document.body.style.color = 'white';
        //document.getElementById('mode_front').style.backgroundColor = '#232931';
        document.getElementById('mode_front').style.left = '10px';

  


    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.getElementById('mode_front').style.backgroundColor = '#FFFFFF';
        document.getElementById('mode_front').style.left = '0';


    }

}




    

                
