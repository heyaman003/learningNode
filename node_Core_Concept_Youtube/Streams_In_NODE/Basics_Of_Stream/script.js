const fs = require("fs");
const path = require("path");
const filehandler = path.join(__dirname, "stream2.txt");

fs.open(filehandler, "w", (err, fd) => {
    if (err) {
        console.log(err.message);
        return;
    }

    console.time("the total time taken");

    const stream = fs.createWriteStream(filehandler, "utf-8");

    let i = 0;
    const writeNext = () => {
        let canWrite = true;
        while (i < 1000000 && canWrite) {
            canWrite = stream.write(`${i} `);
            i++;
        }

        if (i < 1000000) {
            // Wait for the drain event to continue writing
            stream.once("drain", writeNext);
        } else {
            // All data has been written
            stream.end();
            console.timeEnd("the total time taken");
        }
    };

    writeNext();
});
