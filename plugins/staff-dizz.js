const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n'
                    + 'FN:dizz\n' // full name
                    + 'TEL;type=CELL;type=VOICE;waid=6287877997287:+62 878-7799-7287\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'dizz', contacts: [{ vcard }] } }, { quoted: m })
}
handler.command = /^(staffdizz)$/i

module.exports = handler
