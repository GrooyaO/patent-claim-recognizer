import * as fs from 'fs'
import { ClaimCollection } from './models/claimCollection'
import { Claim } from './models/claim'

function app() {
    // Transform text file into string
    fs.readFile('./public/claims.txt', 'utf8', (err, data) => {
        if (err) throw err
        const text = data
        //array of claims that should be within claimColletion
        const claims = splitString(text)

        const claimsJson = JSON.stringify(generateClaims(claims))
        console.log(claimsJson)
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

function generateClaims(claims: string[]): ClaimCollection {
    const model = new ClaimCollection()

    let claimOrderNum = 1
    for (let claim of claims) {
        model.addClaims(
            new Claim(claimOrderNum, claim.replace(/(\r\n|\n|\r)/gm, ''))
        )
        claimOrderNum++
    }
    return model
}

app()
