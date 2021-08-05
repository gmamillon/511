const reve = document.getElementById('reve');
const dodo = document.getElementById('dodo');
const tout = document.getElementById('tout');
const style = document.getElementById('style');

const random100 = () => {
    return Math.random()*100;
}

var hi = "a";

dodo.addEventListener('click', () => {
    const lesang = document.createElement('div');
    lesang.innerHTML = `<div id="${hi}" style='position:absolute; right:${random100()}%; bottom: 110%; font-size: 40px; z-index: 10;'>❤️</div>`
    style.innerHTML += `
    #${hi} {
        position:absolute;
        right:${random100()}%;
        font-size: 40px;
        z-index: 10;
        animation: 2.5s linear 0s both ${hi};
    }
    @keyframes ${hi} {from {
        bottom: -3%;
    } to {
        bottom: 110%;
    }}`;
    tout.appendChild(lesang);
    var timeout = setTimeout(() => {
        tout.removeChild(lesang);
    }, 2500);
    hi += "a";
})