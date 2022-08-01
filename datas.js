const words = {
    fr: [
        { civilian: "mot", undercover: "mot2" },
        { civilian: "mot3", undercover: "mot4" },
    ],
    en: [
        { civilian: "word", undercover: "word2" }
    ],
};

const instructions = {
    fr: [
        { getName: "Entrez votre nom : " },
        { giveWord: "Voici votre mot : " },
        { giveWordMrWhite: "Vous etes Mr.White."},
        { giveDeviceToNextPlayer: "Donnez l'appareil au joueur sur votre gauche."},
        { announceStartingPlayer1: "C'est "}, // message type "C'est `nomJoueur` qui commence."
        { announceStartingPlayer2: " qui commence."}, // giveStartingPlayer1 + playerName + giveStartingPlayer2
        { MrWhiteGuess: "Sa capacité entre en jeu ! Il peut tenter de deviner quel mot était le bon pour voler la victoire : "},

    ],
    en: [
        { getName: "Enter your name : " },
        { giveWord: "Here is your word : " },
        { giveWordMrWhite: "You are Mr.White."},
        { giveDeviceToNextPlayer: "Give the device to the player on your left."},
        { announceStartingPlayer1: ""},
        { announceStartingPlayer2: " starts the game."},
        { MrWhiteGuess: "His abilty activates ! He can try to steal the victory by guessing the word : "},
    ],
};
