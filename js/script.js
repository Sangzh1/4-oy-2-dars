// 1 Masala
let a = +prompt("1 Masala Qiymatni kiriting!");
let result = a > 0;
let res_2 = a < 0;
console.log("Musbat ", result);
console.log("Manfiy ", res_2);

// 2 Masala
const num = +prompt("2 Masala Qiymatni kiritng!");
if (num >= 90 && num <= 100) {
  console.log("90 dan 100 gacha");
} else if (num >= 80 && num <= 89) {
  console.log("80 dan 89 gacha");
} else if (num >= 70 && num <= 79) {
  console.log("70 dan 79 gacha");
} else if (num >= 60 && num <= 69) {
  console.log("60 dan 69 gacha");
} else if (num >= 50 && num <= 59) {
  console.log("50 dan 59 gacha");
} else {
  console.log("G");
}

// 3 Masala
const year = 2024;
if ((year % 4 == 0 && year % 100 != 0) || yaer % 400 == 0) {
  console.log("Kabisa yili!", year);
} else {
  console.log("Kabisa yili emas!");
}

// 4 Masala
let son = +prompt("4 Masala Qiymatni kiriting!");
let javob_1 = a > 0;
let javob_2 = a < 0;
let javob_3 = a === 0;
console.log("Musbat ", javob_1);
console.log("Manfiy ", javob_2);
console.log("0ga ten", javob_3);

// 5 Masala
let sonKrting_1 = +prompt("5 Masala Qiymatni kiting!");
let sonKrting_2 = +prompt("5 Masala Qiymatni kiting!");
let result_1 = sonKrting_1 > sonKrting_2;
let result_2 = sonKrting_1 < sonKrting_2;
console.log("Birinchi son katta", result_1);
console.log("Ikkinchi son katta", result_2);

// 6 Masala
let uchSon_1 = +prompt("6 Masala Qiymatni kiriting!");
let uchSon_2 = +prompt("6 Masala Qiymatni kiriting!");
let uchSon_3 = +prompt("6 Masala Qiymatni kiriting!");
let uchsonres = uchSon_1 < uchSon_2 && uchSon_1 < uchSon_3;
let uchSonResult_2 = uchSon_2 < uchSon_1 && uchSon_2 < uchSon_3;
let uchSonResult_3 = uchSon_3 < uchSon_1 && uchSon_3 < uchSon_2;
console.log("Birinchi son kichkina", uchsonres);
console.log("Ikkinchi son kichkina", uchSonResult_2);
console.log("Uchinchi son kichkina", uchSonResult_3);

// 7 Masala
let Manfiyson_1 = prompt("7 Masala Birinchi sonni kiriting:");
let Manfiyson_2 = prompt("7 Masala Ikkinchi sonni kiriting:");
let Manfiyson_3 = prompt("7 Masala Uchinchi sonni kiriting:");
uchSonManfiy_1 = parseInt(uchSonManfiy_1);
uchSonManfiy_2 = parseInt(uchSonManfiy_2);
uchSonManfiy_3 = parseInt(uchSonManfiy_3);
let manfiySonlar = [uchSonManfiy_1, uchSonManfiy_1, uchSonManfiy_1].filter(function (son) {
  return son < 0;
});
let javobi = manfiySonlar.reduce(function (total, son) {
  return total + son;
}, 0);
console.log("Manfiy sonlar yig'indisi:", javobi);