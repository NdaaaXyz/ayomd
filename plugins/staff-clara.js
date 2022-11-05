const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n'
                    + 'FN:Zens\n' // full name
                    + 'TEL;type=CELL;type=VOICE;waid=62895604670507:+62 895-6046-70507\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Zens', contacts: [{ vcard }] } }, { quoted: m })
}
handler.command = /^(staffzens)$/i

module.exports = handler
