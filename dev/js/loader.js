
// theme status
var theme = 'light'

// language status
var lang = 'en'


// add a listener to the dom content loaded event
document.addEventListener('DOMContentLoaded', () => {
  // set the timeout
  setTimeout(() => {
    // get the loader element
    let loader = document.querySelector('.loader')
    // add the loaded animation
    loader.style.animation = 'loader--hide 1s'
    // set the timeout to apply the animation styling properties
    setTimeout(() => {
      // apply the top property
      loader.style.top = '-200%'
      // set the display property
      loader.display = 'none'
      // get the content element
      let content = document.querySelector('.content')
      // add the content loaded animation
      content.style.animation = 'content--show .5s'
      // set the timeout to apply the animation styling properties
      setTimeout(() => {
        // apply the property
        content.style.opacity = 1
        // allow body scrolling
        document.body.style.overflowY = 'auto'
      }, 500)
    }, 500)
  }, 3000)
  // check if i need to set starting language to arabic
  if(localStorage.getItem('lang') === 'en') lang = 'ar'
  // set the language
  change_lang()
  // add the onclick method to the lang button
  document.querySelector('#lang').onclick = change_lang
  // check if i need to change the theme
  if(localStorage.getItem('theme') === 'dark') change_theme()
  // add the onclick method to the theme button
  document.querySelector('#theme').onclick = change_theme
  // check if i need to request the statistics
  if(location.pathname.endsWith('/data/pages/statistics.html')) stats()
})