const date = () => {
    const get = () => {
        var d = new Date();
        var h = d.getHours().toString();
        var m = d.getMinutes().toString();
        var s = d.getSeconds().toString();
        document.getElementById('time').innerHTML = h + ' : ' + m + ' : '+s;
    }
    setInterval(get,1000);
}
date();