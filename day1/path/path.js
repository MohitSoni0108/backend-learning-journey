const path = require("path");

// console.log(__dirname);

//path.join() =Build a path safely
// const filePath = path.join(__dirname,"data");
// console.log(filePath);

// //path.basename() Gets the file name.
// console.log(
//   path.basename(__dirname)
// );

// path.extname() Gets the extension.

console.log(path.extname(__dirname));

console.log(
  path.dirname(__dirname)
);

console.log(
  path.parse(__dirname)
);