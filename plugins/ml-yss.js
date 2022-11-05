let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("yss mlbb","yi shun shin mlbb").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
   }
    
handler.help = ['yss']
handler.tags = ['heroml']
handler.command = /^(yss)$/i
handler.limit = true

module.exports = handler
