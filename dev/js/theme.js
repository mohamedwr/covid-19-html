
// set css variable method
const set_css_var = (element, properties, values) => {
  // get element style
  let element_style = typeof element === 'string' ? document.querySelector(element).style : element.style
  // set one property
  if(typeof properties === 'string'){
    element_style.setProperty('--' + properties, values)
  } else{
    // set multiple properties
    properties.forEach(property => {
      element_style.setProperty('--' + property, `${values[properties.indexOf(property)]}`)
    })
  }
}



// change the theme method
const change_theme = async () => {
  // set theme status
  theme = theme === 'dark' ? 'light' : 'dark'
  // set the theme localstorage value
  localStorage.setItem('theme', theme)
  // get the theme data
  let object = theme === 'dark' ? data.dark : data.light
  // set the css properties
  set_css_var(document.documentElement, Object.keys(object), Object.values(object))
  // set new button text
  document.querySelector('#theme').innerText = theme === 'dark' ? 'Light' : 'Dark'
}