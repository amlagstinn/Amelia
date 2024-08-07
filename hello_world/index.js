var object = "Hello World!";

console.log(object);
console.log("Hello World!")

//ini adalah declaration variabel dengan var dan init dengan value "Lia"
//halo
/*
halo this is a comment multiline
ini adalah komentasr dengan banykak garis
*/
var name = "Lia";
console.log(name);

name = "Liaa"
console.log(name);

let data = "this is a simple string";
console.log(data);

data = "Liaa"
console.log("Akbar");

let empty
console.log(empty);

const pi = 3.14 // => variabel dengan tipe data float (desimal)
const area = 10 // => variabel dengan tipe data integer (bilangan bulat)
const description = "Ini adalah deskripsi" // => variabel dengan tipe data string (teks)

console.log(typeof area); // => typeof untuk mengecek tipe apakah dari variabel area
console.log(typeof description);

const sudahIstirahat = true; // =>variabel dengan tipe data boolean (true/false)
console.log(typeof sudahIstirahat);

const profile = {
    name: "Liaa", // =>tipe data dari properti name adalah string
    age: 21, // => tipe data dari age adalah number
    address: "Lampung", //=>tipe data dari address adalah string
    isMariied: false, // => tipe data dari ismariied adalah false
    school: { // => property dengan type data object atau nested object
        name: 'UIN',
        year: 2024,
    }
};

console.log(profile);
console.log(profile.name); // => akses property name didalam object profile
console.log(profile.school.name);
console.log(typeof profile);

//Array
const sampleArray = [
    50, // => Data pertama di dalam array, dan selanjutnya adalah data urutan sebelahnya
    "A", 
    true,
    {name: "Liaa"}
]

console.log(typeof sampleArray);

// => 70 itu merupakan elemen daei array yang berlokasi di index ke 0
const scores = [70, 80, 90, 95]; 
/**
 * setiap data di dalam array memiliki index sebagai urutan atau lokasu data tersebut berada
 * 
 * dan array itu selalu dimulai dengan index 0 yang artinya data pertama dalam array,
 * 
 * dalam contoh diatas index ke 0 adalah 70
 */
console.log(scores[0]); // => Akses array menggunakan 

scores[0] = 50; // => mengubah isi element dari array index ke 0

console.log(scores[0]); // => output: 50

const fruits = ["apple", "banana", "kiwi"]; 

console.log(fruits); // =>output apple, banana, kiwi

fruits.push("orange"); // => menambah element di akhir array

console.log(fruits); // =>output apple, banana, kiwi, orange

fruits.unshift("mango") // => menambah element di awal array

console.log(fruits); // => output mango, apple, banana, kiwi, orange

fruits.pop(); // => menghapus element di akhir array

console.log(fruits); // => ouput mango, aplle, banana, kiwi

fruits.shift(); // =>menghapus element di awal array

console.log(fruits); // => ouput aplle, banana, kiwi

console.log(fruits.length); // =>memastikan panjang dari array

const moreFruits = ["kiwi", "grape"];

const allfruits = fruits.concat(moreFruits); // => menggabungkan 2 array menjadi satu

console.log(allfruits); // => output apple , banana, kiwi, orange, grape


/**
 * 
 * let i = 0 adalah definisi dari index array yang mau kita mulai perulanagnnya, jika i ini isinya 0 
 * maka array akan di akses dari index ke 0
 * 
 * i < foods.length adalah condition, yang berarti, ketika condition i < foods.length itu terpenuhi,
 * maka nilai i akan ditambah 1.
 * 
 * i++ adalah post statement yang berarti, ketika condition i < foods.length itu terpenuhi
 * 
 * ++ merupakan increment (atau menambah 1)
 * -- merupakan decrement (atau mengurang 1)
 * 
 * 
 */
const foods = ["noodle", "egg", "rice"];
for (let i = 1; i < foods.length; i++) {
    console.log(foods[i]);
}

console.log("Perulangan Berhasil");

const matrix =[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][1]);

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);   
    }
}

const matrixs =[
    [
        [1, 2, 3],
        [4, 5, 6],
    ],
    [
        [7, 8, 9],
        [10, 11, 12]
    ],
];

console.log(matrixs[0][1][2]);


for (let i = 0; i < 5; i++) {
    let string = "* "
    console.log(string.repeat(i));
}

let x = 5
for (let i = 0; i < x; i++) {
    let string = "* "
    let space = "  "
    console.log(space.repeat((x-i)) + string.repeat(i));
}

c

const isLoggedin = false;

/**
 * KETIKA VARIABEL DALAM KONDISI IF () BERNILAI BOOLEAN CUKUP GUNAKAN NAMA VARIABEL JIKA INGIN
 * MEMPERIKSA JIKA ITU BENAR ATAU TRUE. JIKA INGIN MEMPERIKSA JIKA ITU SALAH CUKUP GUNAKAN !namaVariabel
 * Yang artinya ! melambangkan negatif value dalam kasus boolean negatif adalah false
 */
if (!isLoggedin) { //=> UNTUK TIPE DATA BOOLEAN KITA HANYA CUKUP MASUKKAN KONDISI TRUE ATAU FALSE
    console.log("Hallo Admin");
} else {
    console.log("Harap Login");
}

const baju = "Putih";

if (baju === "Putih") { // => KALAU TIPE DATANYA BUKAN BOOLEAN KITA HARUS PAKAI OPERASI === ATAU !===
    console.log("Baju bersih");
} else if (baju === "Merah") {
    console.log("Baju warna Merah");
} else {
    console.log("Baju Kotor");
}