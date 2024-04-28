import { createClient, TimeSeriesAggregationType } from "redis"
const [,,port]= process.argv
class Redis{
    constructor(_port){
        this.client = createClient ({
            url : `rediss://default:a1b758c3817847d6a58848de869ab127@usw1-obliging-elf-${port || _port}.upstash.io:${port || _port}`
          });
    }

    async setInfo(key,value){
        this.client.set(JSON.stringify(key),JSON.stringify(value))
    }

    async getInfo (key){
        return this.client.get(JSON.stringify(key))
    }

    async Mset(bindInput){
        // [key,value]
        this.client.mSet(bindInput)
    }

    async Mget(keyAsArray){
        return this.client.MGET(keyAsArray)
    }

    async deleteInfo(key){
        this.client.del(key)
    }

    async getKeys(){
        return this.client.keys
    }

    async setHashes(key,value){
        this.client.hSet(key,value)
    }

    async getHashes(key){
        return this.client.hGet(key)
    }
}

export {
    Redis
}
