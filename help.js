exports.menu = (ucapan, pushName, ownerName, botName, tanggal, jam, runtime, prefix) => {
    return `${ucapan} ${pushName}

👑 Creator : ${ownerName}
🤖 Bot Name : ${botName}
📆 Tanggal : ${tanggal}
⌚ Jam : ${jam}
⏳ Runtime
${runtime}

*MENU GROUP*
• ${prefix}add 62855xxx
• ${prefix}kick @tag
• ${prefix}group *open/close*
• ${prefix}setgcname *text*
• ${prefix}setgcdesk *text*
• ${prefix}hidetag *text*
• ${prefix}antilink *on/off*
• ${prefix}leave
• ${prefix}setexif *text | text*

*CONVERT/TOOLS*
• ${prefix}sticker
• ${prefix}swm *text | text*
• ${prefix}toimg

*STORE MENU*
• ${prefix}list
• ${prefix}addlist *key@response*
• ${prefix}dellist *key*
• ${prefix}updatelist *key@response*
• ${prefix}resetlist

*PROSES/DONE*
• ${prefix}setp
• ${prefix}changep
• ${prefix}delsetp
• ${prefix}setd
• ${prefix}changed
• ${prefix}delsetd
• ${prefix}proses < reply chat >
• ${prefix}done < reply chat >

*EXECUTE*
• $
• >
• =>
`
}


