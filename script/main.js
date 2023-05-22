 //----------------Start index.html Script----------------
 //Declaring Variables
 let fig1 = document.getElementById('fig-1');
 let fig2 = document.getElementById('fig-2');
 let footer_cols = document.getElementsByClassName('footer-col')
 var w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth; // <-- Sets The Width Of Device
 if(w <= 425){ // <-- If The Device Is Equal or Smaller Than 425 (Most Phones) Then Change The Services To Display As Block
    fig1.classList.remove('d-flex');
    fig1.classList.add('d-block');
    fig2.classList.remove('d-flex');
    fig2.classList.add('d-block');
    footer_cols.classList.remove('col');
    }
//----------------End index.html Script----------------