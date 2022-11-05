let handler = async (m, { conn, text, args, usedPrefix, command }) => {

let name = await conn.getName(m.sender)

let a = []

let b = text.split('|')

if (!b[1]) throw '「 ❗ 」\nFormat\n' + usedPrefix + command + ' Bumi bulat ? |ya|no'

if (b[12]) throw '「 ❗ 」\nKebanyakan pilihan, Format\n' + usedPrefix + command + ' halo |ya|gak'

for (let c = 1; c < b.length; c++) {

a.push([b[c]])

			}

			

			let cap = `「 🎐 」Polling\n\nPolling Request By ${name}\nPesan : ${text.split('|')[0]}`

			return conn.sendPoll(m.chat, cap, a, m)

}

handler.help = ['poll pertanyaan|ya|no']

handler.tags = ['tools'] 

handler.command = /^po(l((l?ing|ls)|l)|ols?)$/i

// export default handler

module.exports = handler