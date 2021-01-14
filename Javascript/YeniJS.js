document.getElementById("4").innerHTML = //eğer satır uzun olursa bölünerek birden çok satırda yapılması sağlanabilir, operatörlerde yapılırsa daha okunaklı olur, ayrıca yazı içinde \ koyarak alt satırdan devam ettiğinizi de belirtirsiniz bunu text olarak yazmayacaktır.
'asasasa' ;//içerik değiştirmede id ile içerik değiştirdik, js için hep noktalı virgül kullanılmasa da js onu işleme koyar ancak noktalı virgül koymak önerilir, bitimini belirttiğinden alt satıra geçmeden noktalı virgülleri koyarak tek satırda da yazılabilir.
document.write("SASASASAS");//sayfadan sonra yüklenirse tüm html silinir bu yüzden deneme amaçlı kullanılması önerilir.
window.alert("SAl bne");//ekranın penceresinin yukarısına bir pencere açar ve yazdırır. window opsiyoneldir çünkü varsayılandır.
console.log("Sal bnei de"); //inceledeki consola yazdırır, hata ayıklamak için kullanılır.
//window.print(); javascript'deki hiç bir method print() dışında yazdırma yapamaz ancak bu yapabilir.
var bne = "Bne" // var normal bir değişken anlamına gelir, const bir kere değişince bir daha değişemeyen değişken anlamına gelir ve let ise sınırlı erişim olarak kullanılır.
function xyz() { //bir fonksiyon yapabiliriz.
 var x = 122;var y = 128;var z = x + y;//var bir değişken olduğunu belirtir, veri türü fark etmez. Js kodu okurken boşlukları görmezden geldiğinden operatör ve diğer işlemler arasına boşluk koymak mantıklı olacaktır.Ayrıca hepsi var türü olduğundan , ile ayrılabilirlerdi. Hatta satır satır virgülle bile yazılabilirdi.
 button_1 =document.getElementById("1"); //değer atama isimleri sayı ile başlayamaz, dolar işaretei  ,_ ya da harfler ile başlayabilir(- işareti olmaz).Js büyük-küçük harflere duyarlıdır. ** üs işareti anlamına gelir.sayılar bilimsel gösterimli yazılabilir (e küçük lütfen...).
 button_1.innerHTML = "ab"
}
xyz();//ve çağıradabiliriz.

var array = ["Mugo","Bab",1]; //Array

var object = { //obje oluşturma, objeler (==) KARŞILAŞTIRILAMAZ.
    age : 12,
    Name: "Ahmet ",
    Last_Name : "Mehmet",
    Eye_Color : "Blue"
};
document.getElementById("4").innerHTML = "Your Name is " + object.Name + typeof object.Eye_Color; //objeye erişme
object = null //içindekileri boşalttık ama hala bir obje, eğer undefined koysaydık objeliğini de kaybederdi. null,object ve array larda typeof object tir, function da ise function dır.

function CharConverter(_variable){

    document.getElementById("1").innerHTML= _variable.charCodeAt(0);//char code unu alıyoruz utf-16 olarak, code yazmazsak methoda karakteri alırız.
}
CharConverter(bne);
isNaN("Apple" / 54); //NaN not a number bir sayı olmadığını belirtir, bu durumda isnan ile sayı olup olmadığını boolean türünde cevap alırız.
// ayrıca infinity adlı bir değer vardır, bu kendi kapasitesini açan daha yüksek sayılar için atanır programın.Ayrıca bir sayıyı 0 a bölersek de aynı sonucu elde ederiz.
