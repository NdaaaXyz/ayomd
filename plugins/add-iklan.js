let handler = async (m, { text, usedPrefix, command }) => {
	if (!text) throw `gunakan *${usedPrefix}liststore* untuk melihat daftar pesan yg tersimpan.`
	let store = require('../db/store.json')
	if (!(text in store)) throw `'${text}' tidak terdaftar di daftar pesan.`
	delete store[text]
	m.reply(`\n  [💬] berhasil menghapus pesan di daftar List dengan nama '${text}'.\n`)
}
handler.help = ['list'].map(v => 'del' + v + ' <teks>')
handler.tags = ['store']
handler.command = /^(delist)$/i
handler.group = true
handler.admin = true
module.exports = handler