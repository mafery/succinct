const path = require("path");

export function resolve (dir){
    return path.resolve(__dirname, dir)
}

// ROOT_DIR = resolve("../");
