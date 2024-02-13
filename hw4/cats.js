const cats = [
    {
        name: 'Charlie',
        adoptionStatus: 'available'
    },
    {
        name: 'Lily',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Coco',
        adoptionStatus: 'available'
    },
    {
        name: 'Oreo',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Luna',
        adoptionStatus: 'available'
    },
    {
        name: 'Milo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lola',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Leo',
        adoptionStatus: 'available'
    },
    {
        name: 'Willow',
        adoptionStatus: 'available'
    },
    {
        name: 'Bella',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Max',
        adoptionStatus: 'available'
    },
    {
        name: 'Cleo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lucy',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Daisy',
        adoptionStatus: 'available'
    },
]

var freeCats = [

]

var msg = 'Congrats! You are now the proud owner of ';
var catsSize = cats.length;

for (var i = 0; i < catsSize; i++)
{
    if (cats[i].adoptionStatus == 'available')
        {
            freeCats.push(cats[i].name);
        }
}

var freeCatsSize = freeCats.length;

for (var i = 0; i < freeCatsSize; i++)
{
    msg += freeCats[i];
    if (i < freeCatsSize - 1)
    {
        msg += ', and ';
    }
}

document.getElementById('yourCats').innerHTML = msg;
