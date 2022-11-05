const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n'
                    + 'FN:Dikz\n' // full name
                    + 'TEL;type=CELL;type=VOICE;waid=6285651105293:+62 856-5110-5293\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Dikz', contacts: [{ vcard }] } }, { quoted: m })
}
handler.command = /^(staffdikz)$/i

module.exports = handler
