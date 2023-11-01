const file = require('fs');
const http = require('http');
const url = require('url');
const createdynamicrandom = require('./modules/dynamictemplate.js');
let api;
const template = file.readFileSync("./templates/overview_template.html", "utf-8");
const one_box_template = file.readFileSync("./templates/one_box_template.html", "utf-8");
const product = file.readFileSync("./templates/product.html", "utf-8");
const data = file.readFileSync('./dev-data/data.json', 'utf-8');
//console.log("this line isnot printed");
let data1 = JSON.parse(data)





//callback hell
// file.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     console.log(data1);
//     file.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => { console.log(data2);});
// });


//console.log(data1)
console.log('api printed')

// Create a local server to receive data from
const server = http.createServer((req, res) => {
    let { query, pathname } = url.parse(req.url, true)
    // console.log(query)
    console.log(pathname)
    if (pathname === '/overview' || pathname === '/') {
        console.log("again this line printed")
        res.writeHead(200, { 'content-type': 'text/html' })
        let sendinghtml = data1.map((e) => createdynamicrandom(e, one_box_template)).join('')
        template1 = template.replace('{% product_cards %}', sendinghtml)

        res.end(template1);

    }
    else if (pathname === '/product') {
        console.log("product page reached")
        key = query.id
        console.log(key)
        //console.log(data1)
        maindata = []
        maindata.push(data1[key])

        console.log(maindata)
        if (Array.isArray(maindata)) {
            console.log("array")
        }
        else {
            console.log("not array")
        }
        //console.log(maindata)
        let sendinghtml = maindata.map((e) => createdynamicrandom(e, product)).join('')

        res.writeHead(200, { 'Content-Type': 'text/html' }); //need to write status code and what file is coming to browser
        //sending the data
        console.log("this line reached")
        res.end(sendinghtml);
    }
});

server.listen(8000, 'localhost', (req, res) => {
    console.log(req);
});


