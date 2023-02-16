import chalk from 'chalk';
import fs from 'fs';
import takeFile from "./index.js";
import listValidation from './http-valid.js';

const path = process.argv;

function displayError(error){
    throw new Error(chalk.red(error.code, 'não há arquivo ou diretório'));
}

async function displayList(valid, args, ident = ''){

    if(valid){
        console.log(
            chalk.yellow(`lista Validada`), 
            chalk.black.bgGreen(ident),
            await listValidation(args)
        );
    }else{
    console.log(
        chalk.yellow(`lista de links`), 
        chalk.black.bgGreen(ident),
        args
    );
    }
}

async function processor(arg){
    const path = arg[2];
    const valid = arg[3] === '--valida';

    try{
        fs.lstatSync(path);
    } catch(error){
        if(error.code === 'ENOENT'){
            console.log(`Arquivo ou diretório não existe`);
            return;
        }
    }

    if(fs.lstatSync(path).isFile()){
        const result = await takeFile(arg[2]);
        displayList(valid, result);
    }else if (fs.lstatSync(path).isDirectory()){
        const files = await fs.promises.readdir(path)
        files.forEach(async(fileName) => {
            const list = await takeFile(`${path}/${fileName}`);
            displayList(valid, list, fileName);
        })
    }
   
}

processor(path);