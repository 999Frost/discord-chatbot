module.exports = {
    chatbot: message => {
        const resp = ["ok", "dacc", "mdr", "ptdr", "xd", "oui", "non", "d'accord", "super", "cool", "jamais", "souvent", "musique", "sus", "ouais", "vsy", "vz", "lol", "lmao", "discord", "dev", "gay", "mais", "wtf", "toi", "hein", "comment", "quoi", "gros", "frr", "what", "pardon", "excuse", "parle", "mieux", "stp", "si", "bon", "ciao", "carré", "eh", "dis", "dit", "asy", "pour"];
        if(resp.some(msg => message.content.toLowerCase().includes(msg))) {
            const respbot = ["Euh, non ?", "Ouais ok m'en fou.", "J'te préférai avant.", "Pareil mdr", "En vrai, je t'aime...", "Arrête, tu parles trop", "Ahahaha, toi aussi lol", "Bon, go sur lol on s'fait chier", "Oui bien sûr", "Même ambiance", "Bats les couilles frérot", "ouais cool mdr", "we", "bye", "carré same", "ça se voit t'as discord en blanc mdr", "c'est la vie hein"];
            const respfinal = respbot[Math.floor(Math.random() * respbot.length)];
            return message.channel.send(`${respfinal}`);
        } else {
            const resp = ["anime", "naruto", "hxh", "snk", "demon slayer", "boruto", "sao", "waifu", "crunchyroll", "wakanim", "animes", "animé", "animés"];
        if(resp.some(msg => message.content.toLowerCase().includes(msg))) {
            const respbot = ["Toi aussi t'aimes bien les animés/mangas ?", "Mon perso pref c'est livaï & toi ?", "Je préfère adn perso", "Mikasa >>> toi", "Nul les animés", "Animés/Mangas >>> ton existence", "Oui d'accord avec toi, mais juste, tu mérites un rasengan dans ta gueule", "Jure t'aimes les animés"];
            const respfinal = respbot[Math.floor(Math.random() * respbot.length)];
            return message.channel.send(`${respfinal}`);
        } else {
            const resp = ["bg", "beau", "belle", "blg", "waw", "grrr", "incroyable", "fort", "courageux", "majestueux", "bo", "sympa", "gentil", "poli", "jtm", "bb"];
            if(resp.some(msg => message.content.toLowerCase().includes(msg))) {
                const respbot = ["Toi aussi tu es très beau/belle :))", "Tu me complimentes, wow, tg", "Franchement, merci bg toi aussi !", "Merci beaucoup :=)", "Tu es donc mon sosie !", "Big csc bg :)", "T'es incroyable !", "Trop beau toi"];
                const respfinal = respbot[Math.floor(Math.random() * respbot.length)];
                return message.channel.send(`${respfinal}`);
            } else {
                const resp = ["ntm", "fdp", "tg", "blc", "ftg", "chut", "ntr", "nique", "tmr", "connard", "pd", "salope", "slp", "ptn", "putain", "moche", "dégueu", "dégueulasse", "merde", "mrd", "con"];
                if(resp.some(msg => message.content.toLowerCase().includes(msg))) {
                    const respbot = ["Euh, pourquoi m'insulter mdr ?", "Oui ok, je m'en fou :)", "Franchement, ta gueule", "Cool frérot", "Huh, stv", "Gros csc", "Détend-toi être inférieur", "D'accord, mais, tg", "Oui allez ftg"];
                    const respfinal = respbot[Math.floor(Math.random() * respbot.length)];
                    return message.channel.send(`${respfinal}`);
                } else {
                    const resp = ["salut", "slt", "wsh", "cv", "bien", "wesh", "cc", "coucou", "bonjour", "bonsoir", "trkl", "trql", "tranquille"];
                    if(resp.some(msg => message.content.toLowerCase().includes(msg))) {
                        const respbot = ["Salut ça va ?", "Wesh bg", "Bien ?", "Coucou :)", "Cv ?", "Trkl ?"];
                        const respfinal = respbot[Math.floor(Math.random() * respbot.length)];
                        return message.channel.send(`${respfinal}`);
                    } else {
                        const resp = ["ah", "dommage", "dmg", "grave", "grv", "rip", "aïe", "aie", "bah", "mince", "oups", "pg", "dsl", "désolé", "ducoup", "vraiment", "vrmt", "vrm"];
                    if(resp.some(msg => message.content.toLowerCase().includes(msg))) {
                        const respbot = ["J'suis désolé...", "Je voulais pas, mais, je veux toujours pas", "M'en fou vraiment", "AH, rip", "Ah mince déso", "Pas grave non ?"];
                        const respfinal = respbot[Math.floor(Math.random() * respbot.length)];
                        return message.channel.send(`${respfinal}`);
                    }
                    }
                }
            }
        }
        
        }
    }
}