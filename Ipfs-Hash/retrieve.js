import { helio } from "./helio";


async function retriveUsingCID_helio(fetchInput){
    return await    new helio().getCIDObj().get(fetchInput) 
}

export {
    retriveUsingCID_helio
}