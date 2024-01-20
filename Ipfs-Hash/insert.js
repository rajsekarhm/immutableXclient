import { helio } from "./helio"

async function insertIntoIPFS_Helio(input,type){
    switch(type){
        case 'json':
            return await new helio().getCIDObj().add(input)
        default:
            return
    }

}


export { 
    insertIntoIPFS_Helio
}