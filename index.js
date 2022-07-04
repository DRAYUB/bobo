const hadith = [
    "«…Le véritable mohadjer est celui qui s’éloigne de ce que Dieu a proscrit. »",


    "«Quel est le meilleur Islam ? – C’est celui du Croyant dont les Musulmans n’ont à craindre ni la langue, ni la main, répondit le Prophète. »",
    
    "Personne d’entre vous ne possèdera vraiment la foi, s’il ne souhaite pour son frere (en religion) ce qu’il désire pour lui personnellement. »",
    
    "« Personne d’entre vous ne sera un (vrai) Croyant, s’il n’éprouve pas pour moi plus d’affection que pour son père, ses enfants et pour le reste de l’humanité. »",
    
    "« Quand l’épouse donne en aumône sur les vivres de son mari et cela sans gaspillage, elle acquiert une part de récompense, son mari également aura une part pour le bien qu’il possède (et qui a permis de faire l’aumône), de même que le gardien qui a en charge les provisions. »",
    
    "« L’islam repose sur cinq piliers : le témoignage qu’il n’y a de divinité en droit d’être adorée qu’Allah et que Mouhammad est le Messager d’Allah, l’accomplissement de la prière, le versement de l’aumône légale, le pèlerinage à la Mecque et le jeûne du mois de Ramadan. »",
    "« Quiconque introduit dans notre religion ce qui lui est étranger verra son acte rejeté. » ",
    
    "« J’ai reçu l’ordre de combattre les gens jusqu’à ce qu’ils témoignent qu’il n’y a de divinité en droit d’être adorée qu’Allah et que Mouhammad est le Messager d’Allah, qu’ils accomplissent la prière et s’acquittent de l’aumône légale. S’ils font cela, ils préserveront leur personne et leurs biens, sauf dans ce que l’islam impose et c’est à Allah le Très Haut qu’ils devront rendre des comptes. »",
    
    "« Si je vous interdis une chose, écartez-vous-en, et si je vous donne un ordre, exécutez-le dans la mesure du possible. En effet, les nations qui ont vécu avant vous ne furent perdues que pour avoir accablé leurs prophètes de questions et s’être opposées à ces derniers. »",
    
    "« Allah le Très Haut est pur et n’accepte que ce qui est pur. Et Allah a ordonné aux croyants ce qu’Il a ordonné aux Messagers. Le Très Haut a dit : “Messagers ! Choisissez les nourritures les plus pures et accomplissez les œuvres les plus vertueuses”. Et Il a dit : “Vous qui croyez ! Nourrissez-vous des aliments purs et sains que Nous vous avons attribués”. »",
    
    "« Il n’est permis de verser le sang du musulman que dans trois cas : en cas de fornication, pour celui qui a déjà été marié, en application de la loi du talion et en cas d’apostasie, pour celui qui rompt avec les musulmans. »",
    
    "« Ne te mets pas en colère. »",
    
    "« Que celui qui croit en Allah et au Jour dernier dise du bien ou se taise. Que celui qui croit en Allah et au Jour dernier honore son voisin. Que celui qui croit en Allah et au Jour dernier honore son hôte. »",
    
    "« Parmi les paroles héritées des premiers prophètes figurent celles-ci : “Si tu n’éprouves aucune pudeur, fais ce qu’il te plaît”. » "
];

window.addEventListener('load', ()=>{
    avoirHadith ();
});


let obtenir = document.getElementById('obtenir');
obtenir.addEventListener('click', ()=>{
    avoirHadith ();
});

function avoirHadith (){
    let ha = document.getElementById('affiche');
    let index = Math.floor(Math.random() * hadith.length);
    affiche.innerHTML = hadith[index] + " <hr> <p style='text-align: right;'>- MOHAMMAD RASULULLAH (S.A.W)</p>";
}