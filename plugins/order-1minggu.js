let handler = async (m, { conn, usedPrefix }) => { 

      conn.relayMessage(m.chat,  {

    requestPaymentMessage: {

      currencyCodeIso4217: 'INR',

      amount1000: 7000000,

      requestFrom: m.sender,

      noteMessage: {

      extendedTextMessage: {

      text: `Dari : @${m.sender.split('@')[0]}

Jenis Item : Sewa Bot 1 minggu

Harga : 7000

Via? : Dana/Gopay/Growtopia/Qris      

Silahkan ikuti link tautan berikut ini dan chat owner untuk melakukan pembayaran : wa.me/6288239928939?text=buy+bot+1+minggu+bang`,

      contextInfo: {

      externalAdReply: {

      showAdAttribution: true

      }}}}}}, {})

}

handler.command = /^satumgg$/i

module.exports = handler