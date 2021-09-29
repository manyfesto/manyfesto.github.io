let names = ['R. Buse Çetin', 'Jessica Fjeld', 'Malavika Jayaram', 'Paola Ricaurte Quijano', 'John C. Havens', 'Sabelo Mhlambi', 'Aarathi Krishnan',
    'Angie Abdilla',
    'A Jung Moon',
    'Carlos Affonso Souza',
    'Chelle Adamson',
    'Eileen M. Lach',
    'Farah Ghazal',
    'Jennyfer Taylor',
    'Monique Morrow',
    'Nagla Rizk',
    'Raja Chatila',
    'Ravit Dotan',
    'Sara Jordan',
    'Sarita Rosenstock']
if (document.getElementById("names")) {
    document.getElementById("names").onload = function () { shuffle() };
}

function shuffle(array) {
    var currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

shuffle(names)
let Names = names.join(', ')
if (document.getElementById("names")) {
    document.getElementById("names").innerHTML = Names;
}


