const text = "Success is your duty Obligation and responsibility. CHAMPIONS DOMINATE WANABEES COMPETE."
let index =0;

function writetext(){

    document.body.innerText = text.slice(0,index);
    index++;
    if (index> text.length-1){
        index =0;
    }

}

    setInterval(writetext,100);