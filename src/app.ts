import { ClaimCollection } from './models/claimCollection'
import { Claim } from './models/claim'
import FileReader from './FileReader'

function app() {
    const fileReader = new FileReader()

    const fileText = fileReader.read('./public/claims.txt')

    const claims = splitString(fileText)

    //JSON string representing ClaimCollection
    const claimsJson = JSON.stringify(generateClaims(claims))
    console.log(claimsJson)
}

//Split string against pattern
//Returns new array of strings
function splitString(text: string): string[] {
    if (text === '') {
        throw new Error('String is empty')
    }

    const arrOfClaims = text.split(/\n\d{1,}\./)
    //console.log(arrOfClaims)
    return arrOfClaims
}

//Execute given statement on each distinct claim
//Returns array of objects
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
