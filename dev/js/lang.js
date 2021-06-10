
// change language method
const change_lang = () => {
  // set language status
  lang = lang === 'ar' ? 'en' : 'ar'
  // set the language localstorage value
  localStorage.setItem('lang', lang)
  // get the language data
  let object = lang === 'en' ? data.en : data.ar
  // get all elements that has data-txt attribute
  document.querySelectorAll('*[data-txt]').forEach(e => {
    // get the data-txt attribute value
    let txt = e.getAttribute('data-txt')
    // initialize parsed text object
    let parsed_txt = {}
    // loop on the txt refrence properties
    for(let prop of txt.split('.')){
      // check if the property is found inside the parsed text object
      if(parsed_txt[prop]){
        parsed_txt = parsed_txt[prop]
      } else if(object[prop]){ // if the property is found inside the language object
        parsed_txt = object[prop]
      } else break
    }
    // check for the parsed text
    if(typeof parsed_txt === 'string'){
      // set the parsed text
      e.innerText = parsed_txt
    }
  })
  // set css layout properties
  set_css_var(document.documentElement, ['font', 'alt-font', 'ltr', 'rtl', 'left', 'right'], lang === 'en' ? ['en', 'ar', 'ltr', 'rtl', 'left', 'right'] : ['ar', 'en', 'rtl', 'ltr', 'right', 'left'])
  // set new button text
  document.querySelector('#lang').innerText = lang === 'en' ? 'اللغة العربية' : 'English'
}