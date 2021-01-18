import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'
import moment from 'moment'
const doc = new GoogleSpreadsheet('1-QnW6BxltUBdLhsPa1Ys79KZ7vIiOHIOxZwZH811abI')

const cupomGenerator = () => {
    const convertion = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
    return convertion.substr(0,4) + '-' + convertion.substr(4,4) + '-' + convertion.substr(8,4)
}

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
            Cupom = cupomGenerator()
            Promo = descriptionPromo.value
        } else {
            Cupom = 'Cupom indisponível'
            Promo = 'Não há promoção no momento'
        }
        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Opiniao:data.Opiniao,
            Cupom,
            Promo,
            Nota: data.Nota,
            'Data preenchimento': moment().format('DD/MM/YYYY HH:mm:ss')
        })
        res.end(JSON.stringify({
            showCoupon: Cupom !== 'Cupom indisponível',
            Cupom,
            Promo
        }))
    } catch (err) {
        console.log(err)
        res.end('Error')
    }
}