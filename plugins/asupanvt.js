let handler = async (m, { conn, command }) => {

	let aspnvt = await (await fetch('https://raw.githubusercontent.com/NdaaXD/database/main/asupan.json')).json()

    

    let asupanvt = conn.pickRandom(aspnvt)

	conn.sendFile(m.chat, asupanvt, 'asupan.mp4', 'By NdaaBotz-MD',m)

}

handler.help = ['asupanvt']

handler.tags = ['asupan']

handler.command = /^(asupanvt)$/i

handler.premium = true

//By Ndaa?

module.exports = handler
