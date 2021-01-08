import {GoogleSpreadsheet} from 'google-spreadsheet'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('1-QnW6BxltUBdLhsPa1Ys79KZ7vIiOHIOxZwZH811abI')

export default async(req,res) => {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()

    const sheet = await doc.sheetsByIndex[2]
    await sheet.loadCells('A3:B3')

    const statusPromo = sheet.getCell(2,0)
    const descriptionPromo = sheet.getCell(2,1)
    
    res.end(JSON.stringify({
        showCoupon: statusPromo.value,
        description: descriptionPromo.value
    }))
}