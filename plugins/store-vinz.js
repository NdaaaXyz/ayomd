let handler  = async (m, { conn, usedPrefix: _p }) => {
let cap = `
Kenapa kak manggil owner
`
conn.sendButtonDoc(m.chat, `*SELL JASA DIRT FARM GROWTOPIA BY VINZ*

-SELESAI KURANG DARI 1 JAM

-HARGA LEBIH MURAH (5WLS/WORLD)

-ANTI MISS

-BISA REQ NAME WORLD 

*SISTEM? REQ NAME WORLD-KERJA-LIAT WORLD UDAH JADI-BAYAR*

*BUY? PM wa.me//6285711537991*

Link grup

https://chat.whatsapp.com/IUVltjiPfASD0V5htOuRic`, wm, 'Owner Store', '.vinzowns', null, adReply)
}
handler.command = /^(storevinz)$/i

module.exports = handler