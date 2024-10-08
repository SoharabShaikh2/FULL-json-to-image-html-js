

var mainServerJson = []
var surah = 2;


var getJSON = function (url, id, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response, id);
        } else {
            callback(status, xhr.response, id);
        }
    };
    xhr.send();
};

var i = 1;                  //  set your counter to 1

function myLoop() {         //  create a loop function
    // setTimeout(function () {   //  call a 3s setTimeout when the loop is called
    //     featchData(i)   //  your code here
    //     i++;                    //  increment the counter
    //     if (i <= 1) {           //  if the counter < 10, call the loop function
    featchData();             //  ..  again which will trigger another 
    //     }                       //  ..  setTimeout()
    // }, 4000)
}


async function featchData() {


    var json = json001;

    for (var i = 0, ln = json.length; i < ln; i++) {
        var index = i;
        var ayat = json[i];


        var newJson = [];

        var ar = ayat.w.split("|");
        var en = ayat.e.split("//");
        var bn = ayat.m.split("//");

        var mainArabic = "";

        ar.forEach((v, i) => {
            var ar = v.split("./")[0].split("/")[1]
            var ar_u = ar.charAt(0).toUpperCase() + ar.slice(1)
            var obj = {
                "bengali": bn[i],
                "english": en[i],
                "en_t": v.split("./")[1],
                "arabic": ar_u,
                "ar_mp3": "https://words.audios.quranwbw.com/" + surah + "/" + padZero(surah) + "_" + padZero(index + 1) + "_" + padZero(i + 1) + ".mp3",
                "id": padZero(surah) + "_" + padZero(index + 1) + "_" + padZero(i + 1)
            }
            mainArabic = mainArabic + (i > 0 ? " " : "") + obj.arabic;
            //newJson.push(obj);
        });

        //console.log("new", newJson);
        //https://mirrors.quranicaudio.com/everyayah/Muhammad_Ayyoub_128kbps/002076.mp3
        //old: https://everyayah.com/data/Alafasy_128kbps/
        var mainAyat = {
            "ayat_mp3": "https://mirrors.quranicaudio.com/everyayah/Maher_AlMuaiqly_64kbps/" + padZero(surah) + padZero(index + 1) + ".mp3",
            "arabic": mainArabic,
            "bengali": ayat.fm,
            "english": ayat.fme.charAt(0).toUpperCase() + ayat.fme.slice(1),
            "wbw": newJson
        }

        //saveData(mainAyat, 'Surah_' + padZero(surah) + padZero(index + 1) + '.json');
        mainServerJson.push({ data: mainAyat, id: padZero(surah) + "_" + padZero(index + 1) });

    }

    doStuff(mainServerJson);
}




function padZero(number) {
    return number.toString().padStart(3, '0');
}

function getValue() {
    console.log(document.getElementById("html-content-holder"));
}


const example1 = (data, id, child) => new Promise(function (resolve, reject) {

    const para = document.createElement("div");
    para.id = id;
    para.style.color = "#ffffff";
    para.style.width = "700px";
    para.style.height = "1600px";
    if (child == true) {
        para.style.width = "750px";
        para.style.height = "1700px";
    }
    para.style.padding = "10px";
    if (child != true) {
        para.style.paddingTop = "150px";
    }
    para.style.textAlign = "center";
    para.style.display = "flex";
    para.style.flexFlow = "column nowrap";
    para.style.aspectRatio = "9 / 16"

    if (child == true) {
        para.style.justifyContent = "center";
    }
    else {
        para.style.justifyContent = "top";
    }

    const label1 = document.createElement("label");
    label1.innerHTML = data.arabic;
    label1.style.fontSize = data.arabic.length > 250 ? "50px" : data.arabic.length > 150 ? "70px" : data.arabic.length > 70 ? "80px" : "100px";
    label1.style.marginBottom = data.arabic.length > 250 ? "50px" : data.arabic.length > 150 ? "70px" : data.arabic.length > 70 ? "80px" : "150px";
    para.appendChild(label1);

    const label2 = document.createElement("label");
    label2.innerHTML = data.bengali;
    label2.style.fontSize = data.bengali.length > 250 ? "20px" : data.bengali.length > 150 ? "30px" : data.bengali.length > 70 ? "40px" : "60px";
    label2.style.marginBottom = data.bengali.length > 250 ? "15px" : data.bengali.length > 150 ? "50px" : data.bengali.length > 70 ? "70px" : "100px";
    para.appendChild(label2);

    const label3 = document.createElement("label");
    label3.innerHTML = data.english;
    label3.style.fontSize = data.english.length > 250 ? "20px" : data.english.length > 150 ? "30px" : data.english.length > 70 ? "40px" : "60px";
    label3.style.marginBottom = data.english.length > 250 ? "15px" : data.english.length > 150 ? "30px" : data.english.length > 70 ? "50px" : "70px";
    para.appendChild(label3);

    const element = document.getElementById("maindiv");
    element.appendChild(para);

    html2canvas(document.getElementById(id), { backgroundColor: null }).then(function (canvas) {
        var anchorTag = document.createElement("a");
        document.body.appendChild(anchorTag);
        document.getElementById("previewImg").appendChild(canvas);
        anchorTag.download = id + ".png";
        //anchorTag.href = canvas.toDataURL();
        //anchorTag.target = '_blank';
        //setTimeout(function () {
        resolve(canvas.toDataURL());
        //}, 1000);
    });
});

const example2 = (data, id) => new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log(data);
        console.log(id);
        resolve('foo2');
    }, 500);
});
var mainMainJSON = [];
const doStuff = async (newJson) => {

    console.log('newJson', newJson.length);
    var intial = 0
    //const listExample = ['a','b','c'];
    for (let i = intial; i < newJson.length; i++) {

        //var arabic_img = await example1(newJson[i].data, newJson[i].id);

        //console.log(arabic_img)

        var main_img = await example1(newJson[i].data, newJson[i].id);

        console.log("ayat", newJson[i].id);

        mainMainJSON.push({
            "id": newJson[i].id,
            "mp3": newJson[i].data.ayat_mp3,
            "arabic_img": main_img.split(",")[1],
            "childs": []
        })

    }

    console.log('mainMainJSON', mainMainJSON);

    saveData(mainMainJSON, padZero(surah) + "_" + (intial + 1) + "-" + (newJson.length) + ".json")

    //console.log("The End");
};

function saveData(data, fileName) {
    //setTimeout(() => {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";

    var json = JSON.stringify(data),
        blob = new Blob([json], { type: "octet/stream" }),
        url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
    //}, 2000);
}
