import { helio } from "./helio"

function insertIntoIPFS_Helio(input,type){
    switch(type){
        case 'json':
            return new helio().getCIDObj().add(input)
        default:
            return
    }

}


export { 
    insertIntoIPFS_Helio
}