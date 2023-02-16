import chalk from "chalk";

function linkExtractor(arr){
    return arr.map((objectLink) => Object.values(objectLink).join())
}

async function checkStatus(links){
    const arrStatus = await Promise
        .all(
            links.map(async (urls) =>{
                try{
                    const response = await fetch(urls)
                    return response.status;
                }catch(error){
                    return handlingErrors(error);
                }
            })
        )
        return arrStatus;
}

function handlingErrors(error){
    if(error.cause.code === 'ENOTFOUND'){
        return 'link não encontrado';
    }else{
        return 'ocorreu algum erro';
    }
}

export default async function listValidation(listLink){
    const links = linkExtractor(listLink);
    const status = await checkStatus(links);
    
    return listLink.map((object, index) => ({
        ...object,
        status: status[index]
    }));
}