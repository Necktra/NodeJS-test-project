const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, "notes"), err => {
//     if (err) throw new Error(err);

//     console.log("Done!");
// })

// fs.writeFile(
//     path.join(__dirname, "notes", "mynotes.txt"),
//     "Hello world",
//     (err) => {
//         if (err) throw err;
//         console.log("Done")
//     }
// )

// fs.writeFile(
//     path.join(__dirname, "notes", "mynotes.txt"),
//     "Hello world",
//     (err) => {
//         if (err) throw err;
//         console.log("Done");

//         fs.appendFile(path.join(__dirname, "notes", "mynotes.txt"),
//             "Hello world NEW",
//             (err) => {
//                 if (err) throw err;
//                 console.log("Done");
//             })
//     }
// )

// fs.readFile(
//     path.join(__dirname, "notes", "mynotes.txt"),
//     (err, data) => {
//         if (err) throw err;
//         console.log(Buffer.from(data).toString());
//     }
// )

// fs.readFile(
//     path.join(__dirname, "notes", "mynotes.txt"),
//     "utf-8",
//     (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     }
// )

fs.rename(
    path.join(__dirname, "notes", "mynotes.txt"),
    path.join(__dirname, "notes", "notes.txt"),
    (err, data) => {
        if (err) throw err;
        console.log("Rename");
    }
)