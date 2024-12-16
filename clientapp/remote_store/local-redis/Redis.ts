import { createClient } from "redis";
import { Buffer } from "buffer";
window.Buffer = Buffer
class Redis {
  client: any;
  constructor(url: string,$port: string) {
    this.client = createClient({
      legacyMode: false,
      socket: {
        connectTimeout: 10000,
      },
      url: `${url}:${$port}`,
    });
    this.client.connect();
  }

  setInfo(key: any, value: any) {
    this.client.set(JSON.stringify(key), JSON.stringify(value));
  }

  getInfo(key: any) {
    return this.client.get(JSON.stringify(key));
  }

  Mset(bindInput: any) {
    // [key,value]
    this.client.mSet(bindInput);
  }

  Mget(keyAsArray: any) {
    this.client.MGET(keyAsArray);
  }

  deleteInfo(key: any) {
    this.client.del(key);
  }

  getKeys() {
    return this.client.keys;
  }

  setHashes(key: any, value: any) {
    this.client.hSet(key, value);
  }

  getHashes(key: any) {
    return this.client.hGet(key);
  }
}

export { Redis };
