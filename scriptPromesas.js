document.addEventListener('DOMContentLoaded', () => {

    const digimonID = 1417;
    const apiUrl = `https://digi-api.com/api/v1/digimon/${digimonID}`;

    function nombreDigimonPromesa() {
        return new Promise((resolve, reject) => {
            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error al obtener el Digimon');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data && data.name) {
                        document.getElementById('nombreDigimonPromesa').innerText = `${data.name}`;
                        resolve(data);
                    } else {
                        throw new Error('No se encontraron datos válidos para el Digimon solicitado');
                    }
                })
                .catch(error => {
                    console.error(error);
                    reject(error);
                });
        });
    }

    function imagenDigimonPromesa() {
        return new Promise((resolve, reject) => {
            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error al obtener el Digimon');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data && data.images && data.images.length > 0 && data.images[0].href) {
                        const imgElement = document.createElement('img');
                        imgElement.src = data.images[0].href;

                        const digimonContainer = document.getElementById('containerPromesas');
                        digimonContainer.innerHTML = '';
                        digimonContainer.appendChild(imgElement);

                        resolve();
                    } else {
                        throw new Error('No se encontraron datos válidos para el Digimon solicitado');
                    }
                })
                .catch(error => {
                    console.error(error);
                    reject(error);
                });
        });
    }

    function onClickFetchButton() {
        let opcion = document.getElementById("opcionTextoPromesa").checked;
        if (opcion) {
            nombreDigimonPromesa();
        } else {
            imagenDigimonPromesa();
        }
    }

    document.getElementById("botonPromesa").addEventListener("click", onClickFetchButton);
});