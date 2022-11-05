let handler = async (m, {conn, text}) => {

 if (!text) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
 
 conn.reply(m.chat, `wa.me/${text}`, m)

handler.help = ['wame <text>']

handler.tags = ['main']

handler.command = /^wame$/i

module.exports = handler