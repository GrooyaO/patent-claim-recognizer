import * as fs from 'fs'

function app() {
    // Transform text file into string
    fs.readFile('./public/claims.txt', 'utf8', (err, data) => {
        if (err) throw err
        const text = data
        //array of claims that should be within claimColletion
        const claims = splitString(text)
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

//iterate over array, take each claim and push it into claimCollection

app()
