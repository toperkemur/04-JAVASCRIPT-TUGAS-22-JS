var kalimat = "Saya ingin belajar bersama";
var ubah = kalimat.split(" ");

ubah.forEach(function(item,index,array){
  console.log("Item :",item,"Index ke",index);
});
