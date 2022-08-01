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
        { MrWhiteGuess: "Sa capacité entre en jeu ! Il peut tenter de deviner quel mot était le bon pour voler la victoire : "}, // entrée texte de l'utilisateur, passable en appuyant sur "skip"
        { eliminatedCivilian: " est éliminé. C'était un civil..."}, // message type "`nomJoueur` est éliminé..."
        { eliminatedUndercover: " est éliminé. C'était un undercover !"}, // playerName + eliminatedRole
        { eliminatedMrWhite: " est éliminé. C'était Mister White !"},
        { rules: "Voici le déroulement d'une partie :\nLes joueurs entrent à tour de rôle leur nom dans l'application. "+
                "Suite à cela, les rôles sont désignés aléatoirement et gardés secret aux yeux des participants.\n"+
                "Parmi ces rôles figurent :\nCivil : il connait son mot mais ne sait pas si il est civil ou undercover. Il doit éliminer tous les imposteurs\n"+
                "Undercover : il connait son mot mais ne sait pas non plus s'il est civil ou undercover. Il doit survivre jusq'à la fin\n"+
                "Mr.White : il n'a pas de mot et doit déduire des autres le mot des civils tout en donnant des mots similaires pour ne pas éveiller les soupçons."+
                " Il doit survivre jusqu'à la fin ou deviner le mot secret des civils\n\n"+
                "Voici le déroulement d'une partie :\n"+
                "Les joueurs donnent chacun leur tour un mot en rapport avec celui qui leur a été donné, il faut cependant rester vague car si l'on"+
                " est civil il faut éviter de donner des informations à Mr.White et si l'on est undercover il ne faut pas se faire attraper...\n"+
                "Mr.White quant à lui, n'ayant pas de mot, déduit de ceux énoncés au préalable le thème autour duquel tournent les mots en jeu. Il doit alors"+
                " en donner qui soient suffisamment proche pour ne pas être percé à jour.\n\n"+
                "Quel que soit le rôle d'un joueur, il doit dans la mesure du possible éviter de donner le mot exact d'une autre équipe, auquel cas il serait identifié comme adversaire...\n"+
                "Les joueurs doivent donc protéger leur mot secret en restant vague tout en essayant de déduire via les mots donnés par les autres joueurs s'ils sont dans la même équipe,"+
                " ou quel mot secret est le leur ou bien encore s'il ne s'agirait pas de Mr.White.\n\n"+
                "Après les 2 premiers tours de tables une petite discussion a lieu où l'on décide qui voter,"+
                " l'on procède alors au vote en pointant sa cible du doigt puis en les comptabilisant.\nLe joueur désigné est alors éliminé. Si son rôle était Mr.White,"+
                "ce dernier à alors une unique chance de voler la partie à ses opposants : il doit deviner quel était le mot secret des civils. S'il y parvient, il gagne.\n"+
                "Après cela, si l'application n'annonce aucun vainqueur la partie continue :"+
                " on effectue un nouveau tour de table en donnant chacun un mot puis on vote de nouveau jusqu'à ce qu'une équipe remporte la victoire."}
    ],
    en: [
        { getName: "Enter your name : " },
        { giveWord: "Here is your word : " },
        { giveWordMrWhite: "You are Mr.White."},
        { giveDeviceToNextPlayer: "Give the device to the player on your left."},
        { announceStartingPlayer1: ""},
        { announceStartingPlayer2: " starts the game."},
        { MrWhiteGuess: "His ability activates ! He can try to steal the victory by guessing the word : "},
        { eliminatedCivilian: " is eliminated. C'était un civil..."},
        { eliminatedUndercover: " is eliminated. C'était un undercover !"},
        { eliminatedMrWhite: " is eliminated. C'était Mister White !"},
    ],
};
