const userName = prompt("Как вас зовут?");
const newParagraphHTML =
    `<p class="par yellow">Привет, ${userName}!</p>`;
firstPar.insertAdjacentHTML('beforebegin', newParagraphHTML);
