import { createHelia } from 'helia'
import { json } from '@helia/json'
const helia = await createHelia()

export class helio{
    getCIDObj(){
        return json(helia)
    }
}

