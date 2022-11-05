const fs = require("fs") 
let handler  = async (m, { conn }) => {
let data = fs.readFileSync('./lib/quotes.db');
let jsonData = JSON.parse(data);
let randIndex = Math.floor(Math.random() * jsonData.length);
let randKey = jsonData[randIndex];
let randQuote = '_'+randKey.quote+'_\n\n_'+randKey.author+'_'
conn.reply(m.chat, randQuote, m)
}
handler.help = ['xyz']
handler.tags = ['new']
handler.command = /^xyz$/i
handler.owner = false
handler.limit = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler