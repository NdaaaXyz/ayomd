let { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, command, args, usedPrefix:p, isOwner, DevMode }) => {

    if (!isOwner) throw 'Ngapain Make Cheat ???'

    let type = (args[0] || '').toLowerCase()

    let cht = (args[0] || '').toLowerCase()

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

    let mentionedJid = [who]

    let cok = `

*[ LIST TAKE  ]*

• Exp\n• Level\n• Limit\n• Money\n •Bgl\n •Wl\n •DL

• ${p}cheat exp 10 @6288239928939

`.trim()

try {

       if (/take/i.test(command)) {

            const count = args[1] && args[1].length > 0 ? Math.max(parseInt(args[1]), 1) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)

            switch (type) {

            	case 'exp':

                            if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam database'

                            db.data.users[who].exp -= count * 1

                            conn.reply(m.chat, `Berhasil Mengambil ${count * 1} ${type} Di Dalam database target`, m)

break                       // Perhatian Cheat exp bisa membuat database kalian error!!

                            // Minimal cheat exp 1000000000000 Batas cheat exp tidak boleh lebih!!

                case 'level':

                            if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam database'

                            db.data.users[who].level -= count * 1

                            conn.reply(m.chat, `Berhasil Mengambil ${count * 1} ${type} Di dalam database target`, m)                      

                case 'limit':

                            if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam database'

                            db.data.users[who].limit -= count * 1

                            conn.reply(m.chat, `Berhasil Mengambil ${count * 1} ${type} Di Dalam database target`, m)
               case 'money':
                            if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam database'

                            db.data.users[who].money -= count * 1

                            conn.reply(m.chat, `Berhasil Mengambil ${count * 1} ${type} Di Dalam database target`, m)
               case 'bgl':
                            if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam database'

                            db.data.users[who].bgl -= count * 1

                            conn.reply(m.chat, `Berhasil Mengambil ${count * 1} ${type} Di Dalam database target`, m)
               case 'money':
                            if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam database'

                            db.data.users[who].dl -= count * 1

                            conn.reply(m.chat, `Berhasil Mengambil ${count * 1} ${type} Di Dalam database target`, m)
              case 'money':
                            if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam database'

                            db.data.users[who].wl -= count * 1

                            conn.reply(m.chat, `Berhasil Mengambil ${count * 1} ${type} Di Dalam database target`, m)
                            
break

                default:

                    return conn.reply( m.chat, cok, m)

            }

        }

    } catch (e) {

        conn.reply(m.chat, cok, m)

        console.log(e)

    }

}

handler.help = ['take <type> <jumlah> @user']

handler.tags = ['owner']

handler.command = /^(take)$/i

handler.fail = null

handler.rowner = true

module.exports = handler

function pickRandom(list) {

    return list[Math.floor(Math.random() * list.length)]

}

function no(number){

    return number.replace(/\s/g,'').replace(/([@+-])/g,'')

  }

