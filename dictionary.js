function searchDictionary() {

    const input = document.getElementById("search-input").value.trim().toLowerCase();

    const resultList = document.getElementById("result-list");

    resultList.innerHTML = "";

 

    if (input !== "") {

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)

            .then(response => response.json())

            .then(data => {

                if (data.title === "No Definitions Found") {

                    resultList.innerHTML = "<li>No results found</li>";

                } else {

                    data.forEach(entry => {

                        const listItem = document.createElement("li");

                        const word = entry.word;

                        const definition = entry.meanings[0].definitions[0].definition;

                        listItem.textContent = `${word}: ${definition}`;

                        resultList.appendChild(listItem);

                    });

                }

            })

            .catch(error => {

                console.error("Error fetching data:", error);

                resultList.innerHTML = "<li>Error fetching data</li>";

            });

    } else {

        resultList.innerHTML = "<li>No results found</li>";

    }

}

 

document.getElementById("search-input").addEventListener("input", searchDictionary);

 