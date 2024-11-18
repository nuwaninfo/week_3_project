const submitButton = document.getElementById("submit-button")

submitButton.addEventListener("click", async function() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value

    const userFormData = {
        name: name,
        email: email
    };

    const userData = await fetch("http://localhost:3000/user", {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(userFormData)
    })
    const userDataJson = await userData.json()
    console.log(userDataJson)
})