

/** Command-line tool to generate Markov text. */

const process = require("process");
const fs = require("fs");
const axios = require("./axios")

const { MarkovMachine } = require("./markov")

function outputText(text){
    let mm = new MarkovMachine(text);
    console.log(mm.makeText());
}

async function textRead(path){
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        else {
            // SUCCESS            
            outputText(data)
        }
    });
}

async function urlRead(path){
    let resp;
  
    try {
      resp = await axios.get(path);
    } catch (err) {
      console.error(`Cannot retrieve URL: ${path}: ${err}`);
      process.exit(1);
    }
    // SUCCESS            
    outputText(resp.data)
  }



const textOrFile = process.argv[2];
const path = process.argv[3];

if (textOrFile == "file") {

    textRead(path);

} else if (textOrFile == "url") {

    urlRead(path);
    
} else {
    console.log("2nd parameter must be file or url, not ", textOrFile)    
}


module.exports = {
    outputText
}


//TODO:
//FIND/FIGURE OUT WHY TEXT IS NOT BEING PASSED INTO MM FROM THIS FILE AND ONLY FROM MARKOV.JS?!?!
