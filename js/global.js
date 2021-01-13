import navigatePage from './miniNavigator/miniNavigator.js';
import burgerClick from './header/burger.js';
import messageBox from './messageBox/messageBox.js';
import changeToolbarColor from './header/menuScrollReaction.js';

burgerClick();
navigatePage();
changeToolbarColor();
messageBox.showMessageBox();

function changeTitle() {
    const titlesArray = [
        "Не переставай вчитись",
        "Будь мужнім",
        "Ділись знаннями",
        "Не аватарь",
        "Довідник піхотинця",
        "Infantry handbook",
        "Чисть зброю",
        "Бережи екіпіровку",
        "Вдосконалюйся",
        "Не розслабляйся",
        "Будь пильним"
    ];
    const index = Math.floor(Math.random() * 11);
    document.title =titlesArray[index];
}
setInterval(changeTitle, 3000);