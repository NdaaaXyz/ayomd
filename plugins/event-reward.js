let fetch = require('node-fetch')

let handler = async(m, { conn }) => {

    let user = db.data.users[m.sender]

    if (user.reward === 1) throw `Kamu sudah mengeclaim hadiah reward Haruno 2.3.0! Tunggu hadiah nya next update ya!`

    if (user.reward === 0) {

        await conn.sendButton(m.chat, `Terimakasih sudah menggunakan Haruno Bot, hingga sekarang Haruno Bot sudah berjalan selama 6 bulan lebih.\nBerikut hadiah mu:

Limit = 100

EXP = 20.000

Tunggu update selanjutnya ya!`.trim(), wm, 'Profile', '.my', m)

        user.limit += 1

        user.limit += 100

        user.exp += 20000

    }

}

handler.command = /^reward$/i

module.exports = handler
