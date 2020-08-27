// console.log("I am connected")
// const _ = require('lodash');
// const data = require('./data')
// const functions = require('./functions')

// console.log(data)
// console.log(functions);
// //console.log(functions.functionOneKey(data.numbersArrayKey))

// console.log(_.head(data.numbersArrayKey))
// console.log(_.initial(data.numbersArrayKey))
// console.log(_.last(data.numbersArrayKey));



// console.log("I am connected")
// const _ = require('lodash');
// const data = require('./data')
// const functions = require('./functions')

// console.log(data)
// console.log(functions);
// //console.log(functions.functionOneKey(data.numbersArrayKey))

// // console.log(_.head(data.numbersArrayKey))
// // console.log(_.initial(data.numbersArrayKey))
// // console.log(_.last(data.numbersArrayKey));
// // console.log(_.tail(data.numbersArrayKey));
// // console.log(_.nth(data.numbersArrayKey, 2));
// // console.log(_.nth(data.numbersArrayKey, -2));
// // console.log(_.pull(data.numbersArrayKey, 6, 4545));
// //console.log(_.uniq(data.numbersArrayKey))
// //console.log(_.sum(data.numbersArrayKey));
// console.log(_.random(12, 56));
// console.log(_.capitalize('superman'));
// console.log(_.toUpper('test'))
// console.log(_.endsWith('test', 'c'))
// console.log(_.endsWith('test', 't'))

// const fs = require('fs')
// fs.readFile('./blog/blog1.txt', (err, data) => {
//     if (err) console.log(err)
//     console.log(data.toString())
// })

// fs.file('./blog2/blog.txt', (err) => {
//     if (err) throw err;
    
//   });


// fs.file  = require('./blog/blog1.txt')

// fs.readFile(someFile, 'utf8', function (err,data) {
//   if (err) {
//     return console.log(err);
//   }
//   var result = data.replace(/string to be replaced/g, 'new Text');

//   fs.writeFile(someFile, result, 'utf8', function (err) {
//      if (err) return console.log(err);
//   });
// });

// fs.writeFile('./blog/blog1.txt', "World2", (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });
 

// fs.appendFile('./blog/mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// fs.mkdir("./assests2.5", function(err) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log("New directory successfully created.")
//     }
//   })

//   const path = './blog/blog3.txt'

//   fs.unlink(path, (err) => {
//     if (err) {
//       console.error(err)
//       return
//     }})

//     fs.mkdir("./assests2.5", function(err) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log("New directory successfully created.")
//     }
//   })

// const string = require('./CreatingString')

    // fs.write('./blog/blog1.txt', '/CreatingString.txt', (err) => {
    //     if (err) throw err;
    //     console.log('renamed complete');
    //   });
     
    // for (const title in string) {
    //     console.log(`${title}: ${string[title]}`);
    //   }
    // fs.writeFile('./blog/blog1.txt', string, (err) => {
    //     if (err) throw err;
    //     console.log('The file has been saved!');
    //   });
   
      

    //   console.log(JSON.stringify(data.slice('title','description')))

//     const file = 'Data2323.js';


//     fs.access(file, fs.constants.F_OK, (err) => {
//         console.log(`${file} ${err ? 'does not exist' : 'does  exist'}`);
//         if ('does not exist'){
// console.log("bitte neue datein erstellen!")
//         }
//       });
// const fs = require('fs')

// fs.readFile('./data.json', 'utf-8', (err, data) => {
//     let newArr = []
//     newArr = JSON.parse(data)
//     console.log(newArr)
//     newArr.map((elt) => {
//         let newText = `${elt.id} -  ${elt.title}
//         ${elt.description}
        
//         `
//         fs.appendFileSync('./blog.txt', newText, (err) => {
//             if (err) throw err
//             console.log("file written")
//         })
//     })

// })

// const EventEmitter = require('events')
// const emitter = new EventEmitter()

// emitter.on('Adjmal', () => {
//     console.log('I received a event: EventName')
// })

// emitter.emit('eventName')

const http = require('http')
const fs=require('fs')



const server = http.createServer((req, res) => {
    console.log(req.url)
    console.log(req.method)
    if (req.url === '/') {
       fs.readFile('./public/index.html', (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data)
        })
        // console.log(req.method)
        // res.write("Hello world \n")
        // res.write('Hallo \n')
        // res.write('test')
        // res.end()
    }
    if (req.url === '/about') {
        fs.readFile('./public/about.html', (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data)
        })
    }
    if (req.url === '/contact') {
        fs.readFile('./public/contact.html', (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data)
        })
    }
    if (req.url === '/faq') {
        fs.readFile('./public/faq.html', (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data)
        })
    }
    if (req.url === '/api/users') {
        const users = [{ name: 'Sergio', age: 36 }, { name: 'Mat', age: 20 }]
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(users))
    }
    if (req.url === '/style.css') {
        fs.readFile('./public/style.css', (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/css' })
            res.end(data)
        })
    }

    if (req.url === '/nodeJsPicture.jpg') {
        fs.readFile('./public/nodeJsPicture.jpg', (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'image/jpeg' })
            res.end(data)
        })
    }
    if (req.url === '/main.js') {
        fs.readFile('./public/Main.js', (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/javascript' })
            res.end(data)
        })
    }
    
})


server.on('connection', () => {
    console.log("connected")
})

server.listen(3000, () => {
    console.log('server connected')
})

