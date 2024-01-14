import { helio } from "./helio";


function retriveUsingCID_helio(fetchInput){
    return new helio().getCIDObj().get(fetchInput) 
}

export {
    retriveUsingCID_helio
}