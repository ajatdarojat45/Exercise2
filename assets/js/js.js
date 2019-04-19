var bil1;
var bil2;
var hasil;
var opr;
var opr_seleksi = false;

function getData(data){
    oldData = document.getElementById('display').textContent;
    if(oldData === '0'){
        document.getElementById('display').textContent = data;
    }else{
        document.getElementById('display').textContent += data;
    }
}

function dataDelete(){
    oldData = document.getElementById('display').textContent;
    if(oldData !== '0'){
        var data = oldData.substring(0, oldData.length-1);
        if(data.length == 0){
            document.getElementById('display').textContent = 0;
        }else{
            document.getElementById('display').textContent = data;
        }
    }
}

function dataClear(){
    document.getElementById('display').textContent = 0;
}

function operator(data){
    opr_seleksi = true;
    bil1 = parseFloat(document.getElementById('display').textContent);
    opr = data;
    document.getElementById('display').textContent = 0;
}

function koma(){
    oldData = document.getElementById('display').textContent;
    if(oldData.substr(oldData.length - 1) !== '.'){
        oldData += ".";
    }
    document.getElementById('display').textContent = oldData;
}

function hitung(){
    if(opr_seleksi === true){
        bil2 = parseFloat(document.getElementById('display').textContent);
        switch(opr){
            case '/' :
                hasil = bil1 / bil2;
                document.getElementById('display').textContent = hasil;
                break
            case '*' :
                hasil = bil1 * bil2;
                document.getElementById('display').textContent = hasil;
                break
            case '+' :
                hasil = bil1 + bil2;
                document.getElementById('display').textContent = hasil;
                break
            case '-' :
                hasil = bil1 - bil2;
                document.getElementById('display').textContent = hasil;
                break
        }
        opr_seleksi = false;
        hasil = 0;
        bil1 = 0;
        bil2 = 0;
    }
}