const ids = [];
const speak = (text) => {
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    window.speechSynthesis.speak(speech);
}
const idGen = () => {
    var s = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const random = (max) => {
        return Math.floor(Math.random()*max);
    }
    var d = []
    for(var i = 0;i <= 2;i++){
        d[i] = s[random(26)]
    }
    var s = '';
    for(var i = 0;i <= 2;i++){
        s = s + d[i];
    }
    return s
}
document.getElementById("main").addEventListener("click", () => {
    var c1 = document.getElementById("io").value;
    try {
        var data = document.createElement("div");
        data.style.display = "inline-block";
        data.style.width = "200px";
        data.style.height = "100px";
        data.style.marginTop = "10px";
        data.style.backgroundColor = "rgb(189, 255, 255)";
        let sample = idGen();
        ids[ids.length] = sample;
        data.setAttribute('id',sample);
        data.setAttribute('class','qwert');
        var para = document.createElement("p");
        para.style.fontFamily = "Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif"
        para.style.fontSize = "Larger";
        para.style.fontWeight = "bold";
        para.style.margin = "5px";
        var textnoder = document.createTextNode("Text : "+c1);
        para.appendChild(textnoder);
        data.appendChild(para);
        var para1 = document.createElement("p");
        para1.style.fontFamily = "Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif"
        para1.style.fontSize = "Larger";
        para1.style.fontWeight = "bold";
        para1.style.margin = "5px";
        var textnoder1 = document.createTextNode("      ID : "+sample);
        para.appendChild(textnoder1);
        data.appendChild(para1);
        var bre = document.createElement('br');
        var bree = document.createElement('br');
        document.getElementById("datamaintainer").appendChild(data);
        document.getElementById("datamaintainer").appendChild(bre);
        document.getElementById("datamaintainer").appendChild(bree);
        speak('data created');
    } catch (error) {
        alert('filling')
    }
});
document.getElementById('del').addEventListener('click',() => {
    var dat = prompt('Enter Id for delete');
    try {
        var element = document.getElementById(dat);
        element.parentNode.removeChild(element);
        speak('data deleted');
    } catch (error) {
        alert('id not found')
    }
});