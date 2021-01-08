import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'
const doc = new GoogleSpreadsheet('1-QnW6BxltUBdLhsPa1Ys79KZ7vIiOHIOxZwZH811abI')

export default async (req,res) => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()

        const sheet = await doc.sheetsByIndex[1]

        const data = JSON.parse(req.body)
        
        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Cupom: 'aaaa',
            Promo: 'bbbb'                
        })
        console.log(data.Nome)
        res.end(req.body)
    } catch (err) {
        console.log(err)
        res.end('Error')
    }
}