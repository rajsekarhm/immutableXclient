import { createClient } from "redis";
class Redis {
  constructor(url,$port) {
    this.client = createClient({
      legacyMode: false,
      socket: {
        connectTimeout: 10000,
      },
      url: `${url}:${$port}`,
    });
    this.client.connect();
  }

  setInfo(key, value) {
    this.client.set(JSON.stringify(key), JSON.stringify(value));
  }

  getInfo(key) {
    return this.client.get(JSON.stringify(key));
  }

  Mset(bindInput) {
    // [key,value]
    this.client.mSet(bindInput);
  }

  Mget(keyAsArray) {
    this.client.MGET(keyAsArray);
  }

  deleteInfo(key) {
    this.client.del(key);
  }

  getKeys() {
    return this.client.keys;
  }

  setHashes(key, value) {
    this.client.hSet(key, value);
  }

  getHashes(key) {
    return this.client.hGet(key);
  }
}

export { Redis };
