class LocalStorage{ 
  storeInStorage(storeKey,storeData){
    JSON.stringify(localStorage.setItem(storeKey,storeData))
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