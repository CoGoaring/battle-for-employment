let progress = document.getElementById("progress").value;
async function handleScoring(e) {
    e.preventDefault();
    let score = 0;
    const radios = document.querySelectorAll("input[type='radio']:checked");
    if (radios.length === 0) {
        alert("Please select an option");
        return;
    }
    radios.forEach(radio => {
        const { name, value } = radio;

        if (name === value) {
            score++;
        }
    });

    try {
        if (score === radios.length) {
            progress++;
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
        } else {
            alert("It`s not very effective...")
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

document.querySelector("form").addEventListener("submit", handleScoring);
