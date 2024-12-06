
// SECURE CONTAIN PROTECT

// Get scp api
fetch("https://scp-data.tedivm.com/data/scp/items/index.json")
    .then(scpRequest => scpRequest.json())
    .then((scpRequest) => {
        
        let allSCP = Object.values(scpRequest)

        let id = 0;

        allSCP.forEach(content => {
            id++;
            if(id > 10) {
                return; // Use 'return' instead of 'break' to exit the forEach loop
            }
            loadContent(content)
        });

    });

// Load a selected (SCP) item
function loadContent(newSCP) {
    console.log(newSCP);
    console.log(newSCP.scp);
    console.log(newSCP.images[0]);
    console.log(newSCP.url);

    // Create a div to contain information
    let container = document.createElement("div");
    container.className = "scp-container";
    container.id = newSCP.scp;

    // Create title
    let title = document.createElement("h2");
    title.textContent = newSCP.scp;
    container.appendChild(title);

    // Create image / tumnail
    newSCP.images.forEach(images => {
        let picture = document.createElement("img");
        picture.setAttribute("src", images);
        container.appendChild(picture);
    });

    // Append container to body
    document.getElementById("content").appendChild(container);    
}