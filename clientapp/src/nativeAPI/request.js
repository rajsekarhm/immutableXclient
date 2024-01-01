import http from 'http'
// require nodejs CS module
  function    request(apiEndPoint,body, header,options){
        return new Promise((resolve, reject) => {
            const _request = http.request(apiEndPoint,body,(req)=>{
                var  result = ''
                req.on('data',(data)=>{
                    result+=data;
                })
                req.on('end',(result)=>{
                    resolve(result)
                })
            })
            _request.on('error',(error)=>{
                reject(error)
            })
        
              _request.end()
        })
    }



    export{
        request
    }