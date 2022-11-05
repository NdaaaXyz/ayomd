let handler = async (m, { conn }) => {
    let api = 'Apikey Gratis : ( https://ndaabitz-xyz.herokuapp.com/ )\n\nNote Gunakan Dengan Bijak!!'
    conn.sendButton(m.chat, api, wm, 'menu', '.menu', ftroli)
}
handler.help = ['apikey']
handler.tags = ['info']
handler.command = /^(apikey)$/i

module.exports = handler