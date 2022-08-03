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
        { giveWordMrWhite: "Vous etes Mr. White."},
        { giveDeviceToNextPlayer: "Donnez l'appareil au joueur sur votre gauche."},
        { announceStartingPlayer1: "C'est "}, // message type "C'est `nomJoueur` qui commence."
        { announceStartingPlayer2: " qui commence."}, // giveStartingPlayer1 + playerName + giveStartingPlayer2
        { getEliminatedPlayer: "Sélectionnez le joueur éliminé après le vote : "},
        { confirmEliminatedPlayer: "Confirmez-vous ?"},
        { gameContinues: "La partie continue."},
        { MrWhiteGuess: "Sa capacité entre en jeu : il peut tenter de deviner quel mot était le bon pour voler la victoire : "}, // entrée texte de l'utilisateur, passable en appuyant sur "skip"
        { eliminatedCivilian: " est éliminé. C'était un civil..."}, // message type "`nomJoueur` est éliminé..."
        { eliminatedUndercover: " est éliminé. C'était un undercover !"}, // playerName + eliminatedRole
        { eliminatedMrWhite: " est éliminé. C'était Mr. White !"},
        { gameEnded: "La partie est terminée !"},
        { winCivilians: "Ce sont les civils qui en sortent vainqueurs !"},
        { winUndercovers: "Les undercovers ont su rester discrets !"},
        { winMrWhiteGuessed: "Mr. White remporte la partie après avoir deviné le mot secret !"},
        { winMrWhiteSurvived: "Mr. White remporte la partie après avoir sur se faire discret !"},
        { MrWhiteFailGuess: "Mr. White n'a pas trouvé le mot secret..."},
        { winImpostors: "Tous les civils sont éliminés, les imposteurs l'emportent !"},
        { rules: "Voici le déroulement d'une partie :\nLes joueurs entrent à tour de rôle leur nom dans l'application. "+
                "Suite à cela, les rôles sont désignés aléatoirement et gardés secret aux yeux des participants.\n"+
                "Parmi ces rôles figurent :\nCivil : il connait son mot mais ne sait pas si il est civil ou undercover. Il doit éliminer tous les imposteurs.\n"+
                "Undercover : il connait son mot mais ne sait pas non plus s'il est civil ou undercover. Il doit survivre jusqu'à la fin.\n"+
                "Mr. White : il n'a pas de mot et doit déduire des autres le mot des civils tout en donnant des mots similaires pour ne pas éveiller les soupçons."+
                " Il doit survivre jusqu'à la fin ou deviner le mot secret des civils.\n\n"+
                "Les joueurs donnent chacun leur tour un mot en rapport avec celui qui leur a été donné, il faut cependant rester vague car si l'on"+
                " est civil il faut éviter de donner des informations à Mr. White et si l'on est undercover il ne faut pas se faire attraper...\n"+
                "Mr. White quant à lui, n'ayant pas de mot, déduit de ceux énoncés au préalable le thème autour duquel tournent les mots en jeu. Il doit alors"+
                " en donner qui soient suffisamment proche pour ne pas être percé à jour.\n\n"+
                "Quel que soit le rôle d'un joueur, il doit dans la mesure du possible éviter de donner le mot exact d'une autre équipe, auquel cas il serait identifié comme adversaire...\n"+
                "Les joueurs doivent donc protéger leur mot secret en restant vague tout en essayant de déduire via les mots donnés par les autres joueurs s'ils sont dans la même équipe,"+
                " ou quel est leur mot secret ou bien encore s'il ne s'agirait pas de Mr. White.\n\n"+
                "Après les 2 premiers tours de tables une petite discussion a lieu où l'on décide qui voter,"+
                " on procède alors au vote en pointant sa cible du doigt puis en les comptabilisant.\nLe joueur désigné est alors éliminé. Si son rôle était Mr. White,"+
                "ce dernier à alors une unique chance de voler la partie à ses opposants : il doit deviner quel était le mot secret des civils. S'il y parvient, il gagne.\n"+
                "Après cela, si l'application n'annonce aucun vainqueur la partie continue :"+
                " on effectue un nouveau tour de table en donnant chacun un mot puis on vote de nouveau jusqu'à ce qu'une équipe remporte la victoire."}
    ],
    en: [
        { getName: "Enter your name : " },
        { giveWord: "Here is your word : " },
        { giveWordMrWhite: "You are Mr. White."},
        { giveDeviceToNextPlayer: "Give the device to the player on your left."},
        { announceStartingPlayer1: ""},
        { announceStartingPlayer2: " starts the game."},
        { getEliminatedPlayer: "Select the eliminated player after the vote: "},
        { confirmEliminatedPlayer: "Do you confirm?"},
        { gameContinues: "The game continues."},
        { MrWhiteGuess: "His ability activates: he can try to steal the victory by guessing the word: "},
        { eliminatedCivilian: " is eliminated. A civil unfortunatly..."},
        { eliminatedUndercover: " is eliminated. He was an undercover!"},
        { eliminatedMrWhite: " is eliminated. He was Mr. White!"},
        { gameEnded: "The game is now finished!"},
        { winCivilians: "The civilians got rid of the impostors!"},
        { winUndercovers: "The undercovers managed to stay undetected!"},
        { winMrWhiteGuessed: "Mr. White found the secret word, he wins the game!"},
        { winMrWhiteSurvived: "Mr. White survived until the end!"},
        { MrWhiteFailGuess: "Mr. White failed to guess the secret word..."},
        { winImpostors: "All the civilians were eliminated, impostors win!"},
        { rules: "Here is how a game goes:\nPlayers start by typing their name on the application. "+
                "Roles are then randomly assigned to each player, kept secret from them.\n"+
                "The existing roles are as follows:\nCivilian: he knows his word but doesn't know whether he is a civilian or an undercover. His job is to eliminate all impostors\n"+
                "Undercover: Same as the civilian. His goal is to survive.\n"+
                "Mr. White: He doesn't starts with a word and has to deduce the civilian's secret word while giving similar words to not be discovered."+
                " He can win by either surviving or once eliminated: guessing the civilian's word right.\n\n"+
                "Players have to give a word, turn by turn, that is related to the one they were given while staying vague.\n"+
                "Indeed, if civilian: informations need to be the smallest possible so Mr. White can't easily guess and if undercover: staying incognito is key...\n"+
                "Mr. White has a special role as he start without any word. He thus needs to deduce from others's words the theme around the game plays. "+
                "He then has to give words close enough to not get spotted by the other players.\n\n"+
                "Whatever the role, players need to protect their word while guessing the other teams's word, try to understand which players are allies or enemies and find Mr. White.\n\n"+
                "After the first 2 rounds, players debate and proceed to a vote to eliminate a player. Each player points at another and counts are made.\n"+
                "The designated player is then eliminated. If he was Mr. White, he can try to steal the victory by guessing to civilians's secret word.\n"+
                "Once this is done, if the application doesn't declare a winner, the game continues:"+
                " another round is played with players giving words followed by another vote, repeated until a team wins the game."}
    ],
};


const playersSetup = {
    
};