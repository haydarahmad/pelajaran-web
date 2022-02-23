/**
 * module : http
 * 
 * cara membuat server sederhana dengan module http
 * 
 */

// import module http
const http = require("http")

const server = http.createServer((req, res)=>{
    // Inisialisasi variable yang digunakan

    let data;
    // panggil reguest
    console.log(req)

   /**
    * menampilkan sebuah object dari data, 
    * object request yang sering dipakai itu ada : url,method,headers
    * */
   data = {
       url: req.url,
       method : req.method,
       header : req.headers,
   }

   // set header menjadi json
   res.setHeader("Content-type","application/json")


    console.log(data)

   res.end(JSON.stringify(data))
})

server.listen(5000)