
// wait method
const wait = seconds => {
  // return the promise
  return new Promise(success => {
    // set the timeout
    setTimeout(success, seconds * 1000)
  })
}


// set value method
const set = (id, value) => {
  // set the value
  document.querySelector(`#${id}`).innerText = value
}


// stats method
const stats = async () => {
  // try the proccess
  try{
    // get world data
    let world = (await fetcher("https://covid-19-data.p.rapidapi.com/totals", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "583ab8ba80msh731d1561aa0165cp1634aajsn08981a161d64",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
      }
    }))[0]
    // set world data
    set('wv1', world['confirmed'])
    set('wv2', world['critical'])
    set('wv3', world['deaths'])
    set('wv4', world['recovered'])
    set('wvd', world['lastUpdate'])
    // wait two seconds for the api
    await wait(2)
    // get egypt data
    let egypt = (await fetcher("https://covid-19-data.p.rapidapi.com/country?name=egypt", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "583ab8ba80msh731d1561aa0165cp1634aajsn08981a161d64",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
      }
    }))[0]
    // set egypt data
    set('ev1', egypt['confirmed'])
    set('ev2', egypt['critical'])
    set('ev3', egypt['deaths'])
    set('ev4', egypt['recovered'])
    set('evd', egypt['lastUpdate'])
    // show the statistics elements
    document.querySelectorAll('.statistics').forEach(e => e.style.display = 'block')
    // hide the loader
    document.querySelector('.loading').style.display = 'none'
  } catch{
    // hide the loader
    document.querySelector('.loading').style.display = 'none'
    // show the failed title
    document.querySelector('.failed').style.display = 'block'
  }
}