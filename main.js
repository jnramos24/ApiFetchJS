
function getData() {
    fetch("http://localhost:3000/posts")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        })
        .catch(function (error) {
            console.log(`Error: ${error}`)

        })
}

function deleteData() {
    fetch("http://localhost:3000/posts/3", {
        method: "DELETE"
    })
        .then(function (response) {
            if (response.ok) {
                console.log("post borrado correctamente")
            } else {
                console.log("Algun error")
            }
        })
        .catch(function (error) {
            console.log(`Error: ${error}`)
        })
}

function saveData() {
    fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            id: "3",
            title: "Title 3",
            views: 1000
        })
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(`Post creado`)
        })
        .catch(function (error) {
            console.log(`Error: ${error}`)
        })
}

function setData() {
    fetch("http://localhost:3000/posts/1", {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Titulo actualizado',
            views: 0
        })
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log("Post actualizado")
        })
        .catch(function (error) {
            console.log(`Error: ${error}`)
        })
}
// CRUD  Create Read Update Delete


