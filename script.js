

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


const example1 = (data, id, type) => new Promise(function (resolve, reject) {

    const para = document.createElement("div");
    id = type == id + '_a' ? data.arabic : type == id + '_b' ? data.bengali : type == id + '_e' ? data.english : id;
    para.id = id;
    para.style.color = "#ffffff";
    para.style.width = "1080px";
    para.style.height = "1920px";
    // if (child == true) {
    //     para.style.width = "750px";
    //     para.style.height = "1700px";
    // }
    para.style.padding = "150px";
    // if (child != true) {
    //     para.style.paddingTop = "150px";
    // }
    para.style.textAlign = "center";
    para.style.display = "flex";
    para.style.flexFlow = "column nowrap";
    para.style.aspectRatio = "9 / 16"

    //if (child == true) {
    para.style.justifyContent = "center";
    //}
    // else {
    //     para.style.justifyContent = "top";
    // }

    const label1 = document.createElement("label");
    label1.innerHTML = type == 'a' ? data.arabic : type == 'b' ? data.bengali : type == 'e' ? data.english : '';
    label1.style.fontSize = type == 'a' ? '150px' : type == 'b' ? '100px' : type == 'e' ? '100px' : '';
    para.appendChild(label1);

    const element = document.getElementById("maindiv");
    element.appendChild(para);

    html2canvas(document.getElementById(id), { backgroundColor: null }).then(function (canvas) {
        var anchorTag = document.createElement("a");
        document.body.appendChild(anchorTag);
        //document.getElementById("previewImg").appendChild(canvas);
        anchorTag.download = id + ".png";
        var element2 = document.getElementById("maindiv");
        element2.innerHTML = "";
        resolve(canvas.toDataURL());
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

    for (var i = 0; i < newJson.length; i++) {

        var arabic_img = await example1(newJson[i].data, newJson[i].id, 'a');
        var bengali_img = await example1(newJson[i].data, newJson[i].id, 'b');
        var english_img = await example1(newJson[i].data, newJson[i].id, 'e');

        console.log("ayat", newJson[i].id);

        mainObj = {
            "id": newJson[i].id,
            "mp3": newJson[i].data.ayat_mp3,
            "arabic_img": arabic_img.split(",")[1],
            "bengali_img": bengali_img.split(",")[1],
            "bengali_mp3": "",
            "english_img": english_img.split(",")[1],
            "english_mp3": "",
        }
        getBengaliVoice(mainObj, newJson[i]?.data?.bengali, newJson[i]?.data?.english, i);
        await delay(20000);
    }
};

async function delay( ms, state = null ) {
    
    return new Promise( ( resolve, reject ) => {
        window.setTimeout( () => resolve( state ), ms );
    } );
}

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

function getBengaliVoice(mainObj, data, data2, id) {
    var settings = {
        "url": "https://api.narakeet.com/text-to-speech/m4a?voice=Salman",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "x-api-key": "23hYX5BJOF834lHjIwd989jlD7mKoaom7MkVcL97",
            "content-type": "text/plain",
            'Access-Control-Allow-Origin': 'http://127.0.0.1:5501',
            'Access-Control-Allow-Credentials': 'true'
        },
        "data": data,
    };

    $.ajax(settings).done(function (response) {
        console.log(response.statusUrl);
        setTimeout(() => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch(response.statusUrl, requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result);
                    mainObj.bengali_mp3 = JSON.parse(result).result;
                    getEnglishVoice(mainObj, data2, id)
                })

                .catch(error => console.log('error', error));
        }, 5000);
    });
}

function getEnglishVoice(mainObj,data2, id) {
    var settings = {
        "url": "https://api.narakeet.com/text-to-speech/m4a?voice=Brad",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "x-api-key": "23hYX5BJOF834lHjIwd989jlD7mKoaom7MkVcL97",
            "content-type": "text/plain",
            'Access-Control-Allow-Origin': 'http://127.0.0.1:5501',
            'Access-Control-Allow-Credentials': 'true'
        },
        "data": data2,
    };

    $.ajax(settings).done(function (response) {
        console.log(response.statusUrl);
        setTimeout(() => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch(response.statusUrl, requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result);
                    mainObj.english_mp3 = JSON.parse(result).result;
                    saveData(mainObj, padZero(surah) + "_" + padZero(id) + ".json")
                })
                .catch(error => console.log('error', error));
        }, 5000);
    });
}
