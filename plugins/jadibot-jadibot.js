let handler = async (m, {conn, text}) => {

 let name = conn.getName(m.sender)

 let ya = `Hai ${name} kakak mau jadibot? ya usaha kontol jan numpang mulu`

 conn.send2Button(m.chat, ya, wm, 'owner', '.owner', 'menu', '.menu', m)

 let wkwk = `Canda mek`

 conn.reply(m.sender, wkwk, m)

}

handler.tags = ['jadibot']

handler.help = ['jadibot']

handler.command = /^(jadibot)$/i

module.exports = handler