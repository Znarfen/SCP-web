
// Get scp api
fetch("https://scp-data.tedivm.com/data/scp/goi/content_goi.json")
    .then(scpRequest => scpRequest.json())
    .then((scpRequest) => {
        
        let allContent = Object.values(scpRequest)

        let id = 0;

        allContent.forEach(content => {
            loadContent(content)
        });

    });

// Load a selected (SCP) item
function loadContent(newItem) {
    //console.log(newItem);

    // Create a div to contain information
    let container = document.createElement("div");
    container.className = "scp-container";
    container.id = newItem.link;
    container.onclick = () => {
        window.location = "view.html#" + newItem.link;
    };

    // Create title
    let title = document.createElement("h2");
    title.textContent = "# " + newItem.title;
    container.appendChild(title);

    // Create description
    let description = document.createElement("p");
    description.textContent = "> " + newItem.title;
    container.appendChild(description);

    // Append container to body
    document.getElementById("content").appendChild(container);
}