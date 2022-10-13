




let count = 0;

function lockNumber(element) {
    if (count < 7) {
        element.classList.add("locked");
        count++;

    }
};



function generateNumbers() {
    while (count < 7) {

        const rNumber = Math.floor(Math.random() * 40) + 1;



        const element = document.getElementById(rNumber);

        if (element.classList != "locked") {
            lockNumber(element);
        }

    }
}

  //fix number generator for lotto idk vann men he kombe ibland miner en ade gangona

let lottoNum = 0;

function genNumber(element) {
    if (lottoNum < 7) {
        element.classList.add("genNum");
        lottoNum++;

    }
};

function winNumber(element) {
    
    element.classList.add("winNum");
        

    
};


function generateLottoNumbers() {
    while (lottoNum < 7) {

        const rlNumber = Math.floor(Math.random() * 40) + 1;



        const element = document.getElementById(rlNumber);

        if (element.classList == "locked") {
            winNumber(element);
            console.log("awd");
            lottoNum++
        }
        else{
            genNumber(element);
            console.log("awdadawdawdawdawd")
            
        }
}}

function res(element) {
    
    
    
};


function reset(){
    window.location.reload();
        
        
}
    
