import fs from 'fs';
import chalk from "chalk";


function extrator(text){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capture = [...text.matchAll(regex)];
    const result = capture.map(captura => ({[captura[1]]: captura[2]}));
    return result.length !== 0 ? result : 'não há links';
}

function displayError(error){
    throw new Error(chalk.red(error.code, 'não há arquivo no diretório'));
}

//Async/awaiy
async function takeFile(file){
    try {
        const encoding = 'utf-8';
        const text = await fs.promises.readFile(file, encoding)
        return extrator(text);
    } catch(error){
        displayError(error);
    }
}


//Asynchronous promises com then()
// function takeFile(file){
//     const encoding = 'utf-8';
//     fs.promises
//         .readFile(file, encoding)
//         .then((text) => console.log(chalk.green(text)))
//         .catch(displayError)
// }


//Synchronous
// function takeFile(file){
//     const encoding = 'utf-8';
//     fs.readFile(file, encoding, (error, text)=>{
//         if(error){
//             displayError(error);
//         }
//         console.log(chalk.green(text));
//     });
// }

export default takeFile;