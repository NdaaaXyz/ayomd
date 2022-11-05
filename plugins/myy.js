let fs = require('fs')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    let jodoh = `Berhubungan dengan @${pasangan.split('@')[0]}`
let anu = `╭───❑ 「 PROFILE 」 ❑────
│ ✇ Name: ${user.name}
│ ✇ Status: ${pasangan ? jodoh : 'Jomblo' }
│ ✇ Umur: ${user.age}
│ ✇ Email: ${user.email}
│ ✇ Limit: ${user.limit}
│ ✇ Money: ${user.money}
│ ✇ Exp: ${user.exp}
│ ✇ Level: ${user.level}
│ ✇ Role: ${user.role}
│ ✇ Warn: ${user.warn}
│ ✇ Job: ${user.job}
│ ✇ BGL: ${user.bgl}
│ ✇ DL: ${user.dl}
│ ✇ WL: ${user.wl}
│ ✇ Gems: ${user.gems}
│ ✇ Legendary Bot: ${user.lbot}
│ ✇ Legendary Orb: ${user.lorb}
│ ✇ Legendary Katana: ${user.lkatana}
│ ✇ Gems: ${user.gems}
│ ✇ trash = ${user.trash}

╰❑`
    conn.sendButton(m.chat, anu, wm, 'back to menu', '.menu', m)
}
handler.help = ['my', 'my @user']
handler.tags = ['xp']
handler.command = /^(my)$/i

module.exports = handler
)