function writePoem () {
    let name = document.getElementById("input-name").value;
    if ((name == "") || (name == "Введите имя") || (name == "Ламберт")) {
        name = "Ламберт";
        document.querySelector(".poem-block").style.backgroundImage = "url('img/geralt4.png')";
    } else {
        document.querySelector(".poem-block").style.backgroundImage = "url('img/geralt3.png')";
         };
    document.getElementById("poem-text1").textContent = `${name}, ${name} хер моржовый,`;
    document.getElementById("poem-text2").textContent = `${name}, ${name} вредный хуй!`;
    document.querySelector(".main-block").style.display = "none";
    document.querySelector(".poem-block").style.display = "block";
}

function newPoem() {
    document.querySelector(".main-block").style.display = "block";
    document.querySelector(".poem-block").style.display = "none";
    document.getElementById("input-name").value = "Введите имя";
    document.getElementById("poem-text").textContent = "";
}

function clearInput() {
    document.getElementById("input-name").value = "";
}

document.getElementById("btn-write").addEventListener('click', writePoem);
document.getElementById("btn-new").addEventListener('click', newPoem);
document.getElementById("input-name").addEventListener('click', clearInput);