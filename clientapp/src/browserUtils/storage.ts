class LocalStorage{ 
  storeInStorage(storeKey:string,storeData: JSON):void{
    localStorage.setItem(storeKey,JSON.stringify(storeData))
  }

  getFromStorage(storeKey: string):Object{
    return JSON.parse(localStorage.getItem(storeKey) || "[]")
  }

  deleteFromStorage(storeKey: string):void{
     localStorage.removeItem(storeKey)
  }
}


const browserStorage = new LocalStorage()

export {
  browserStorage
}