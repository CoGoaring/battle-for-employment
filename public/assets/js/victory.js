const victoryButton = document.querySelector(".victoryButton");

victoryButton.addEventListener("click", async function() {
    let progress = 1;

    const response = await fetch("/api/users", {
        method: "PUT",
        body: JSON.stringify({ progress }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        document.location.reload();    
    }
});