import ITextParser from '../interfaces/IClaimParser'
import ClaimCollection from './ClaimCollection'
import Claim from './Claim'

export default class TextParser implements ITextParser {
    parseClaims(claimText: string): ClaimCollection {
        if (claimText === '') {
            throw new Error('String must not be empty!')
        }

        const claimCollection = new ClaimCollection()

        const claims = this.splitString(claimText)

        this.generateClaims(claimCollection, claims)

        return claimCollection
    }

    //Split string against pattern
    //Returns new array of strings
    splitString(text: string): string[] {
        const arrOfClaims = text.split(/\n\d{1,}\./)

        return arrOfClaims
    }

    //Execute given statement on each distinct claim
    //Returns array of objects
    generateClaims(collection: ClaimCollection, claims: string[]): void {
        let claimOrderNum = 1

        for (let claim of claims) {
            collection.addClaims(
                new Claim(claimOrderNum, claim.replace(/(\r\n|\n|\r)/gm, ''))
            )
        }
        claimOrderNum++
    }
}
