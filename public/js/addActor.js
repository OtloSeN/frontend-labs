function addActor() {  
    let actor = document.getElementById('actor').value;

    if(actor) {
        let li = document.createElement("LI");
        let textnode = document.createTextNode(actor);

        li.appendChild(textnode);
        document.getElementById("actors-list").appendChild(li);
    }
}
