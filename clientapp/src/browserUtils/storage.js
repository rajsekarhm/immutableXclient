class LocalStorage{ 
  storeInStorage(storeKey,storeData){
    localStorage.setItem(storeKey.toString(),JSON.stringify(storeData))
  }

  getFromStorage(storeKey){
    return JSON.parse(localStorage.getItem(storeKey) || "[]")
  }

  deleteFromStorage(storeKey){
     localStorage.removeItem(storeKey)
  }
}


const browserStorage = new LocalStorage()

export {
  browserStorage
}