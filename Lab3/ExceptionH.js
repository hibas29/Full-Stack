const fs = require("fs");

fs.writeFileSync("file.txt", "Hello, World!");

fs.readFile("file.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return; // Exit if there's an error
    }
    console.log(file);
});



try {
JSON.parse("{in"); // This will throw an error because the JSON is malformed
} catch (error){

    console.log(error);
}
