var canvas = document.getElementById("matrix");
var ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const abcd = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const chinese = '博啊吃世中超';
const nums = '0123456789';
const alphabet = katakana + abcd + nums + chinese;
const fontSize = 16;
const cols = Math.floor(canvas.width/fontSize)+1;

//renderArray stores the vertical indices (row index)
const renderArray = [];
for( let x = 0; x < cols; x++ ) {//horizontal index
    renderArray[x] = 0;//initialise as zero
}
//col,renderArrayp[col]
const renderMatrix = () =>{
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; //black color with almost full opacity
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = '#0F0'; //text color
    ctx.font = fontSize + 'px monospace';
    for(let i=0; i < renderArray.length; i++){
        const text = alphabet.charAt(Math.floor(Math.random()*alphabet.length));
        ctx.fillText(text,i*fontSize,renderArray[i]);
        if(renderArray[i] > 200 + Math.random()*100000)//if exceeds 200 + some random value
        {
            renderArray[i] = 0; // start back from zero
        }
        else
        {
            renderArray[i] = renderArray[i] + fontSize; //else jump few index
        }
        renderArray[i]++;
    }
    

};
setInterval(renderMatrix,41);//render at 24 fps