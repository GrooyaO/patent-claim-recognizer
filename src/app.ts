import * as fs from 'fs'

function app() {
    // Transform text file into string
    fs.readFile('./public/claims.txt', 'utf8', (err, data) => {
        if (err) throw err
        const text = data
        splitString(text)
        console.log(splitString(text).length)
    })
    console.log('Execute!')
}

//Split string against pattern
//Returns new array of strings
function splitString(text: string): string[] {
    if (text === '') {
        throw new Error('String is empty')
    }

    const arrOfClaims = text.split(/\n\d{1,}\./)

    return arrOfClaims
}

app()
