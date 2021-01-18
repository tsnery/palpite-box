import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'
import moment from 'moment'
const doc = new GoogleSpreadsheet('1-QnW6BxltUBdLhsPa1Ys79KZ7vIiOHIOxZwZH811abI')

export default async (req,res) => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()

        const sheet = await doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)

        const sheetConfig = await doc.sheetsByIndex[2]
        await sheetConfig.loadCells('A3:B3')
    
        const statusPromo = sheetConfig.getCell(2,0)
        const descriptionPromo = sheetConfig.getCell(2,1)
        
        let Cupom = ''
        let Promo = ''
        if(statusPromo.value == 'VERDADEIRO') {
            Cupom = 'temporario'
            Promo = descriptionPromo.value
        } else {
            Cupom = 'Cupom indisponível'
            Promo = 'Não há promoção no momento.'
        }
        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Opiniao:data.Opiniao,
            Cupom,
            Promo,
            Nota: 5,
            'Data preenchimento': moment().format('DD/MM/YYYY HH:mm:ss')
        })
        res.end(req.body)
    } catch (err) {
        console.log(err)
        res.end('Error')
    }
}