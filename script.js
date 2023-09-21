// console.log("ok")

let nev = document.querySelector('#nev')
let saveButton = document.querySelector('.save-button')
let result = document.querySelector('.result')


let emberek = []

function hozzaadNev() {
    // console.log('OK');
    // console.log(nev.value)

    //arra.push() a végén bővíti a tömböt
    emberek.push(nev.value)
    // console.log(emberek)

    let ul = document.createElement('ul')
    // console.log(ul)
    emberek.forEach(ember => {
        let li = document.createElement('li')
        li.innerText = ember
        ul.append(li)
    })
    
    result.append(ul)
}

saveButton.addEventListener('click',hozzaadNev)