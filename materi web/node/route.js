//basic routing

const http = require("http");
const server = http.createServer((req,res)=>{
    let url, dataResponse

res.setHeader("Content-Type", "application/json")

url = req.url;

/**
 * membuat roiting yang dibutuhkan seeuai client
 * homepage login 404 not found
 */
})

if(url === "/"){
    dataResponse = {
        data : "ini adalah halaman hompage"
    };
} else if(url === "/register"){
    dataResponse = {
        data : "ini adalah halaman register"
    }
} else if(url === "/login"){
    dataResponse = {
        data : "ini adalah halaman login"
    }
} else{
    dataResponse = {
        data :"404, not found"
    }
    return res.end(JSON.stringify(dataResponse))
}
server.listen(9000)