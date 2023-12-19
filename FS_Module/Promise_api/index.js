//file system Module
import * as fs from "fs/promises";

//creating Directory / Folder / Directory

try {
    await fs.access("c:\\nodejs");
    console.log("Folder Created ...")
} catch (error) {
    console.log(error);
}
