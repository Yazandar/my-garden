let flowersList = ['Alstroemerias','Gardenias','Orchids','Roses','Sunflowers','Tulips','Peonies'];
let preview = document.getElementById('flowersTable');

function Flowers(name, season, image){
    this.name = name;
    this.season = season;
    this.image= name+'jpeg';
    Flowers.all.push(this);
}

Flowers.all=[];
console.loge(Flowers.all);

function creating(){
    for (let i = 0; i < flowersList.length; i++) {
        new Flowers = flowersList[i];
        
    }
}


function render(){
    let fRow = document.createElement('tr')
    preview.appendChild(fRow);
    fRow = document.textContent(Flowers.all)
}

render();

localStorage.setItem('info',JSON.stringify(Flowers.all));

function getinfo(){
    let info = JSON.parse.localStorage.getItem('info');
}
