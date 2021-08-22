import * as fs from 'fs'

function app() {
    fs.readFile('./public/claims.txt', 'utf8', (err, data) => {
        if (err) throw err
        const text = data
        console.log(text)
    })
    console.log('Execute!')
}

app()
