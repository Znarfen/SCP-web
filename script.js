
// Get scp api
fetch("https://scp-data.tedivm.com/data/scp/goi/content_goi.json")
    .then(scpRequest => scpRequest.json())
    .then((scpRequest) => {
        
        let allContent = Object.values(scpRequest)

        let sort = window.location.href.split('#')[1];
        let creator = null;

        try {
            creator = window.location.href.split('#')[2];
        } catch {}

        if (sort == "rating") {
            loadRatingOrder(allContent, creator);
        } else {
            loadOrder(allContent, creator);
        }

        //loadRatingOrder(allContent, "GreenWolf");

    });

// Load a selected (SCP) item
function loadContent(newItem) {

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

    // Create rating
    let description = document.createElement("p");
    description.textContent = "> rating: " + newItem.rating;
    container.appendChild(description);

    // Create creator
    let creator = document.createElement("p");
    creator.textContent = "> creator: " + newItem.creator;
    container.appendChild(creator);

    // Append container to body
    document.getElementById("content").appendChild(container);
}

// Load default order
function loadOrder(items, creator = null) {
    items.forEach((item) => {
        if ((creator == item.creator) || (creator == null)) {
            loadContent(item);
        }
    });
}

// Load order by rating
function loadRatingOrder(items, creator = null) {
    
    // Bubble sort ratings
    for (let i = 0; i < items.length; i++) {
        
        for (let j = 0; j < items.length -i -1; j++) {
            
            if (items[j].rating > items[j+1].rating) {
                let temp = items[j];
                items[j] = items[j+1];
                items[j + 1] = temp;
            }
        }
    }

    // Invert list (from 1 , 2 , 3 . . . to 9 , 8 , 7 . . .)
    for (let i = items.length -1; i > 0; i--) {
        if ((creator == items[i].creator) || (creator == null)) {
            loadContent(items[i]);
        }
    }
}