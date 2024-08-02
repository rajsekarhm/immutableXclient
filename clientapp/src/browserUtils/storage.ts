class LocalStorage{ 
  storeInStorage(storeKey: { toString: () => string },storeData: any){
    localStorage.setItem(storeKey.toString(),JSON.stringify(storeData))
  }

  getFromStorage(storeKey: string){
    return JSON.parse(localStorage.getItem(storeKey) || "[]")
  }

  deleteFromStorage(storeKey: string){
     localStorage.removeItem(storeKey)
  }
}


const browserStorage = new LocalStorage()

export {
  browserStorage
}