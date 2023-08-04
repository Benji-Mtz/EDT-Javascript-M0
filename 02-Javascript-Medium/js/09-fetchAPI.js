const url = "https://jsonplaceholder.typicode.com/comments"

const consultarAPI = () => {
    fetch(url)
        .then((res) => res.json())
        .then(result => {
            result.forEach(comment => {
                console.log(comment);
            });
        })
}

consultarAPI()