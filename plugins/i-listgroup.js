const moment = require('moment')

let handler = async (m, { conn }) => {
	let grup = Object.keys(await conn.groupFetchAllParticipating())
   let row = []
	let txt = `*Daftar Grup Chat*\n\nTotal Grup: *${grup.length}*\n\n`
	for (i of grup) {
		const data = await conn.groupMetadata(i)
		const botAdmin = data.participants.filter(v => v.id == conn.user.jid)[0].admin
		const dbnya = db.data.chats[i]
		const expired = `${dbnya ? conn.msToDate(dbnya.expired - new Date() * 1) : 'Tidak terdaftar di database!'}`

		// txt += `*Nama:* ${data.subject}\n*Owner:* ${data.owner !== undefined ? '@' + data.owner.split('@')[0] : 'Ndak Tau🗿'}\n*ID:* ${data.id}\n*Dibuat:* ${moment(data.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Total Member:* ${data.participants.length}\n*Expired:* ${expired}\n*Bot Admin:* ${botAdmin ? 'Admin' : botAdmin === 'superadmin' ? 'Pembuat Grup!' : 'Bukan Admin'}\n\n   –——————————————————\n\n`
	
	    // let row = Object.keys(txt).map(v => ({
	    row.push({
		title: `${data.subject}`,
		description: `*Owner:* ${data.owner !== undefined ? '@' + data.owner.split('@')[0] : 'Ndak Tau🗿'}\n*ID:* ${data.id}\n*Dibuat:* ${moment(data.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Total Member:* ${data.participants.length}\n*Expired:* ${expired}\n*Bot Admin:* ${botAdmin ? 'Admin' : botAdmin === 'superadmin' ? 'Pembuat Grup!' : 'Bukan Admin'}`,
		rowId: ' '
       }
    )
    }
	let button = {
		buttonText: 'LIST GROUP',
		description: 'Berikut daftar group yg ada di NdaaBotz.',
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
handler.help = ['listgroup', 'listgc']
handler.tags = ['info']
handler.command = /^(listgc|listgrup|listgroup|gruplist|grouplist|gclist)$/i

module.exports = handler