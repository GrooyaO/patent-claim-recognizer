import FileReader from './classes/FileReader'
import TextParser from './classes/TextParser'

function app() {
    const fileReader = new FileReader()

    const fileText = fileReader.read('./public/claims.txt')

    const textParserService = new TextParser()

    const fetchableFormat = JSON.stringify(
        textParserService.parseClaims(fileText)
    )

    console.log(fetchableFormat)
}

app()
