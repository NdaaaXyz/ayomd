let handler = async (m, { conn, text }) => { 
      if(!text) throw `masukkan text!`
conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: 25000000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `${text}`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
handler.help = ['gcbot']
handler.tags = ['main', 'new']
handler.command = /^(rpay)$/i

module.exports = handler