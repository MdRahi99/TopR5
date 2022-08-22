function getPlayerNameById(nameId){
    const playerList = document.getElementById('olElement');
    const playerValue = document.createElement('li');
    const player = nameId;
    if(playerList.children.length < 5){
        playerValue.innerText = player;
        playerList.appendChild(playerValue);
        this.disabled = true;
    }
    else{
        alert("Choose Limit Over");
    }
}