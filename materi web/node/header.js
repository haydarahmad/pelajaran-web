/**
 * header http
 * 
 * menerima otentikase berupa username dan password
 */

// import module http

const http = require("http")
const { buffer } = require("stream/consumers")

const server = http.createServer((req,res) => {
  // inisialisasi variable
  
  let dataHeader, // menampung object daru header requosr
  dataAuthorization, // menampung property authotisation dari object dataheader
  splitData, //pemisah value authorization
  dataUser, // menampung value  yang berisi kode base04 to string dati datauder
  userPass, // menampung hadil dari 
  dataResponse; //menampung data yang akan dikirimkan ke response

//set header
res.setHeader("Content-Type", "application/json")

//get header dari request
dataHeader = req.headers

console.log(dataHeader)

//mendapatkan authorization
dataAuthorization = dataHeader.authorization;

//jika data ini tidak terdapat authorization kita buat alert
if(!dataAuthorization){
dataResponse = {
data: "Undifined Authorization"
}
return res.end(JSON.stringify(dataResponse))
}
/**
* untuk menampilkan format data authorization, (token), (kode base 64)
*/

//split yang menjadi array dengan batasan spasi
splitData = dataAuthorization.split(" ");

//generate kode base64, dia di index 1
dataUser = splitData[1];

// convert data usernya jadi base 64
userPass = Buffer.from(dataUser,"base64").toString()

// buat respnse berisi tokwn dan userPass
dataResponse = {
    token : dataHeader.authorization,
    userPass
}
return res.end(JSON.stringify(dataResponse))
});
server.listen(5000)
