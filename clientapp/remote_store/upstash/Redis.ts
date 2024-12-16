import { Redis } from "@upstash/redis";
import redis_config from "../../redis-client.config";

class RedisClient{ 
    redis_client:any
    constructor(url:any,token:any) {
        this.redis_client = new Redis({
            url:url || redis_config.url,
            token:token || redis_config.token
        })
    }

    async get(key:string){
        return await this.redis_client.get(key.toString())
    }

    async set(key:string,value:string){
        await this.redis_client.set(key.toString(),value.toString())
    }
}


export default RedisClient