// global scope

// var web = 'cahkoding.com'
// function website(){
//     console.log(web)
//     if (true) {
//         var tagline = "belajar coding untuk semua"
//     }
//     console.log(tagline)
// }
// website()

// let buah = "apel"
// buah  = 'mangga'
// console.log(buah)

//contoh scope let

// let motor = 'ninja'
// function kendaraan(){
//     console.log(motor)
//     if(true){
//         let mobil = 'pajero'
//         console.log (mobil)
//         console.log(motor)
//     }
// }
// kendaraan()\

// const web = 'cahkoding'
// console.log(web)

// let nama1 = 'john doe' //pendeklarasian variable
// let nama2 = 'johan'
// console.log(nama) //statement
// console.log(nama2)

// expresion

// expresion adalah code js untuk menghasilkan nilai tertentu

// let a = 10
// let b = 20
// let c = a * b   //statement yg berisi expresion / menghasilkan nilai tertentu
// console.log(c)

// block scope 

// function hello(){
//     if(true){
//         let manggil = 'halo mate'
//         console.log(manggil)
//     }
//     console.log(manggil)
// }
// hello()

// closure

// function hello(nama, kelas){
//     var a = 'nama :' +nama // nama adalah nama dari parameter
//     return function () {
//         console.log(a)
//     }
//     var b = 'kelas :' +kelas
//     return function () {
//         console.log(b)
//     }
// }
// var azzam = hello("  Muhammad Azzam Rabbani")
// azzam()

// var kelas = hello("  x rpl b")
// kelas()
 
// closure

// function tidur(nama, kelas){
//     console.log("Nama :", nama, "\nKelas :", kelas)
// }

// tidur("Muhammad Azzam Rabbani", "X RPL B")

// scope

// const riyad = 'azzam'
// function ngenal() {
//     console.log(riyad)
//     if(true){
//         const santri = 'rabbani'
//         console.log(santri)
//     }
// }
// ngenal()

// tipe data di javascript ada 7
// - null 
// - undefined
// - boolean
// - number
// - bigInt
// - string
// - Symbol
// js merupakan salah satu loosely typed language (variable tidak terikat dengan 
//tipe data tertentu). namun, nilai dati variable yang memiliki tipe data tertentu

// example:

// 

// pengckan tipe data

// untuk pengecekan tipe data bisa mengunakan operator typeof :
// example

// let name
// console.log(typeof name)

// name = 'John Doe'
// console.log(typeof name)

// Undifined
//undifined merupalan tipe data primitive yang nilainya undifined atau tidak terdefinidsikan 
// ini merupakan tipe data default untuk variable yang tidak ada nilai 

// let name
// console.log(name)

// null
// tipe data null adalah tipe data primitif yang nilainya null. bedanya hanya di letaknya
// saja dengan undifined.

// let obj = null
// console.log(typeof obj)

//Number
// tipe data yang mewakili angka, biasanya mewakili bilangan bulat,floating atau desimal
//example :

// let num = 100
// let min = -100
// let des = 10.2

//Nan = (Not a Number)
/**
 * Nan (Not a Number) merupakan nilai numeric spesial. dia memberitahu bahwa nilai 
 * dari  variable tersebut merupakan invalid number atau bukan termasuk angka
 */

// console.log('4'/2)
//  // contoh Nan
//  console.log ('c'/2)

 /**
  * keunikan dari NaN
  * 1. operator matematika yang menhasilkan  NaN
  * 2. operasi perbandinagan tidak dapat dilakukan pada nilai yang akan menghasilkan false
  * 
  * contoh:
  */
// // contoh angka
//  console.log(100.0/100)

//  // contoh kalo dua2 NaN
//  console.log(NaN/NaN)

// // conntoh true
//  console.log(100 === 100.0)

//  // contoh false
//  console.log(NaN === NaN)

 // String
 /**
  * tipe data string merupakan salah satu tipe data yang berhubungan dengan karakter
  * cirinya menggunakan ''(petik satu) ""(petikdua)
  * example:
  */

//  let nama = 'John Doe'
//  console.log(nama)

 // contoh menghitung karakter
//  let kata = 'john'
//  console.log(kata.length)

 // looping
 // contoh looping
//  let word = "hello"
//  for (let i = 0; i < word.length; i++){
//      console.log(word[i])
//  }

// boolean
// contoh boolean

// kalo bener keluar outputnya 
// let belajar = true
// if (belajar){
//     console.log('10 RPL B sedang belajar WEBDBMS')
// }

// kalo salah gak keluar
// let belajar = false
// if (belajar){
//     console.log('10 RPL B sedang belajar WEBDBMS')
// }

// Object
/**
 * Tipe data object merupakan tipe data kompleks yang terdiri dari properti
 * (props). setiap properti berisi pasangan key : value.
 * 
 * example
 */

// object kosong
// let emptyObject = {}
 
// object ada isinya
// let identitas = {
//      id ,
//      firstName : 'John',
//      lastName : 'doe',
//      age : 17
// }

// // object lengkap
// let biodata = {
//     firstName : 'haydar',
//     lastName : 'ahmad',
//     email : 'fattanhay0@gmail.com',
//     phone : '081 - 223 -3345',
//     adress : {
//         city: 'purbalingga',
//         state : ' jawa barat',
//         country : 'Indonesia',
//     }
// }

// // cara mengambil data object yang diatas (ini yang simple)
//  console.log(biodata.firstName)
//  console.log(biodata.adress.country)

// // cara mengambil yang ke 2 (ini yang ribet)
//  console.log(biodata['adress'] ['state'])

// Template Literal
// contoh tamplate literal

// const firstName = 'haydar'
// const lastName = 'ahmad'
// cara mengabungkan data (ribet)
// console.log(firstName + ' ' + lastName)

// cara menghubungkan data pake literal (simple)
// jangan lupa bukan pake tanda petik ('') tapi pke yang ini (``)
// console.log(`${firstName} ${lastname}`)

// Shorthand Property names

// cara biasa
// let a = 1
// let b = 2
// let c = 3

// cara simple
// let a = 1,b = 2,c = 3

// // cara super singkat
// let [a,b,c] = [3,4,5]

// console.log(`${a} + ${b} = ${c}`)

/**
 * Function
 * blok kode yang sigunakan untuku membungkus suatu proses agar tidak ditulis kembali secara berulang
 * 
 * penulisan function ada yang memiliki parameter dan ada yang tidak memiliki parameter
 */

// function example(parameter){
//   console.log(parameter)
// }
// example('ini function dengan parameter')

// arrow funtion

// // contohnya
// const example = (parameter) =>{
//   console.log(parameter)
// }
// example('ini function dengan parameter menggunakna arrow function')

// // disingkat jadi
// let hitung = (angka1,angka2) => `${angka1} dikali ${angka2} = ${angka1 * angka2}`
// console.log(hitung(17,9))

/**
 * High order Function
 * function yang menerima argumen berupa function lain
 * 
 * callback function
 * function yang akan menjadi argumen dalam pemanggilan high order function
 */

// contoh callback 

// function genap(number){
//   return number % 2 == 0
// }
// function printGenap(number){
//   const isTrue = genap(number)
//   if(isTrue){
//     console.log(`${number} adalah bilangan Genap`)
//   }else{
//     console.log(`${number} adalah bilangan ganjil`)
//   }
// }
// printGenap(1)

// contoh 2
// function color(car) {
//   return car == 'merah'
// }

// function warna(car, callback) {
//   let isTrue = callback(car)
//   if(isTrue){
//       console.log(`Mobil ${car} itu punya saya` )
//   }else{
//       console.log(`Mobil ${car} itu bukan punya saya`)
//   }
// }
// warna('merah', color)


// function nilai(rank){
//   return rank == '100'
// }

// function angka(rank,ujian) {
//   let lulus = ujian(rank)
//   if(lulus){
//     console.log(`Anda lulus ${rank}`)
//   }else{
//     console.log(`Anda gagal ${rank}`)
//   }
// }
// angka('100',nilai)

// high order

function genap(num,callback){
  const isTrue = callback(num)
  if (isTrue) {
    console.log(`${num} adalah bilangan Genap`)
  }else {
    console.log(`${num} adalah bilangan ganjil`)
  }
}
// contoh anonymous function
genap(5,function (n){
return n%2 == 0
})


