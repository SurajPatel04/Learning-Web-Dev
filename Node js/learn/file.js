const fs = require("fs");

// fs.writeFileSync("./hello.txt", "Hello world");
// fs.writeFile("./async.txt", "async write", (err) => {});

// const result = fs.readFileSync("./sync.txt", "utf-8");
// console.log(result);
//
// console.log("\nAsync");
// fs.readFile("./hello.text", "utf-8", (err, result) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(result);
//   }
// });
//

// fs.appendFileSync("./hello.text", "\nadd this");
//
// fs.appendFile("./hello.text", "wjdfwjdj", (err) => {});

// fs.cpSync("./sync.txt", "./copy.txt");
// fs.cp("./hello.text", "./hello_copy.txt", (err) => {});

/* fs.unlinkSync("./hello.text"); */

/* console.log(fs.statSync("./sync.txt")); */

fs.mkdirSync("new-folder1/a/b/", { recursive: true });
