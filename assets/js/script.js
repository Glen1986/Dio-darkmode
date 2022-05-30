const changeMode = () => {
    changeText()
    changeClasses()
}
const changeClasses = () => {
    button.classList.toggle(darkModeClass)
    h1.classList.toggle(darkModeClass)
    body.classList.toggle(darkModeClass)
    footer.classList.toggle(darkModeClass)
}
const changeText = () => {
    const LigthMode = 'Ligth Mode'
    const DarkMode = 'Dark Mode'

    if (body.classList.contains(darkModeClass)) {
        button.innerHTML = DarkMode
        h1.innerHTML = LigthMode + ' On'
        return
    }
    button.innerHTML = LigthMode
    h1.innerHTML = DarkMode + ' On'
}

const darkModeClass = 'dark-mode'
const button = document.getElementById('mode-selector')
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]

button.addEventListener('click', changeMode)
