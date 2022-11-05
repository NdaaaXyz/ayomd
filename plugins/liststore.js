let fs = require('fs')
let handler = async (m, { conn, usedPrefix, command }) => {
    let json = JSON.parse(fs.readFileSync(`./db/store.json`))
    let row =  []
for (let i of json) {
	      row.push({
	title: `${i.name}\n`,
		description: `🎟Nama Store: ${i.name}\n👤Nomor Penjual : wa.me/${i.no}\n🖼Deskripsi : ${i.desc}`,
		rowId: ' '
       }
    )
    }
	let button = {
		buttonText: 'LIST STORE',
		description: 'Berikut daftar store yang terdaftar di database',
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)

}
handler.help = ['store'].map(v => 'list' + v)
handler.tags = ['store']
handler.command = /^(list|liststore)$/i

module.exports = handler

//> Iva :v
