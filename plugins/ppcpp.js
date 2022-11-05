let fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {

if (command == 'ppcp2') {
        let res = await fetch(`https://api-xcoders.site/api/random/ppcouple?apikey=PorzcDmYUyIit3v`)
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
conn.sendButtonImg(m.chat, json.result.ppcwe, 'Cewe', wm, '🔄 Next 🔄', `/${command}`, m)
conn.sendButtonImg(m.chat, json.result.ppcwo, 'Cowo', wm, '🔄 Next 🔄', `/${command}`, m)
}

if (command == 'ppcp') {
let res = await fetch(`https://yuzzu-api.herokuapp.com/api/couple`)
let json = await res.json()
let jh = json.result
let x = jh.getRandom()
conn.sendButtonImg(m.chat, x.female, 'Cewe', wm, '🔄 Next 🔄', `/${command}`, m)
conn.sendButtonImg(m.chat, x.male, 'Cewe', wm, '🔄 Next 🔄', `/${command}`, m)
}

}

handler.tags = ['fun']
handler.command = ['ppcp', 'ppcp2']

module.exports = handler
