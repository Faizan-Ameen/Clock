// function showtime() {
//     var d = new Date();

//     var h = d.getHours();

//     var m = d.getMinutes();

//     var s = d.getSeconds();
//     if(h>=12){
//         session="PM";
//     }

//     var session = 'AM';

//     h= h<10 ? "0"+h :h; 

//     m= m<10 ? "0"+m :m; 

//     s= s<10 ? "0"+s :s; 

//     var time = h + " : " + m + " : " + s +  "  " + session;

//     document.getElementsByTagName('h1')[0].innerText = time;

//     setTimeout(showtime, 1000);
// }
function showtime() {
    var d = new Date();
    console.log(d);
    var h = d.getHours();
    console.log(h);
    var m = d.getMinutes();

    var s = d.getSeconds();
    if (h >= 12) {
        session = "PM";
    } else {

        var session = "AM"
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    var time = h + " : " + m + " : " + s + "  " + session;
    setTimeout(showtime, 1000);

    document.getElementsByTagName("h1")[0].innerText = time;
}
