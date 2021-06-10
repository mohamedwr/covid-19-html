
// parse string function
Uint8Array.prototype._parse_string = function(){
  // intialize the string variable
  let string = ''
  // loop on the array
  for(let byte of this){
    // get character from byte code
    string += String.fromCharCode(byte)
  }
  // return the parsed string
  return string
}


// fetcher method
const fetcher = async (url, data) => {
  // return the promise
  return new Promise(async (success, fail) => {
    // try the whole proccess
    try{
      // fetch the url
      let fetched = data === undefined ? await fetch(url) : await fetch(url, data)
      // get the fetch
      let body = JSON.parse((await fetched.body['getReader']().read())['value']._parse_string())
      // check fetch result status
      if(fetched.status === 200)
        success(body)
      else
        throw fetched.status
    } catch(err){
      // fail the process
      fail(err)
    }
  })
}