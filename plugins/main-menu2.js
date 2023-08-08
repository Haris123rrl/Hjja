let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/d89404072ad087f26d347.jpg'
let sewa = `👋🏻Halo Kak Namaku Adalah KAGUYA MD, Aku adalah Chat Bot WhatsApp yang di Program menggunakan NodeJs untuk menjadi Asisten Virtual Auto-Reply di WhatsApp.\n*.allmenu* [Menampilkan Semua Perintah]\n\n_© KaguyaMD_
https://l1nk.dev/rG6ah
,

conn.sendFile(m.chat, fotonya, 'anu.jpg', sewa, m)
}
handler.help = ['menu2']
handler.tags = ['main']
handler.command = /^(menu|help|bot|hai)$/i

export default handler
