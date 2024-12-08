
// Get selected site
let contentName = window.location.href.split('#')[1];

let content;
document.title = contentName;

// Get scp api
fetch("https://scp-data.tedivm.com/data/scp/goi/content_goi.json")
    .then(scpRequest => scpRequest.json())
    .then((scpRequest) => {
        
        let allContent = Object.values(scpRequest);

        // Find the content based on the selected site
        allContent.forEach(element => {
            if (element.link == contentName) {
                content = element;
                return;
            }
        });

        console.log(content.raw_content);

        document.getElementById("content").innerHTML = content.raw_content;
        document.getElementById("official-web").href = content.url;

    });