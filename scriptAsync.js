document.addEventListener('DOMContentLoaded', () => {

    const digimonID = 1471;
    const apiUrl = `https://digi-api.com/api/v1/digimon/${digimonID}`;

    async function nombreDigimonAsync() {

        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Error al obtener el Digimon');
            }

            const data = await response.json();

            if (data && data.name) {
                document.getElementById('nombreDigimonAsync').innerText = `${data.name}`;
            } else {
                throw new Error('No se encontraron datos válidos para el Digimon solicitado');
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function imagenDigimonAsync() {
        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Error al obtener el Digimon');
            }

            const data = await response.json();

            if (data && data.images && data.images.length > 0 && data.images[0].href) {
                const imgElement = document.createElement('img');
                imgElement.src = data.images[0].href;

                const digimonContainer = document.getElementById('containerAsync');
                digimonContainer.innerHTML = '';
                digimonContainer.appendChild(imgElement);
            } else {
                throw new Error('No se encontraron datos válidos para el Digimon solicitado');
            }
        } catch (error) {
            console.error(error);
        }
    }

    function onClickFetchButton() {
        let opcion = document.getElementById("opcionTextoAsync").checked;
        if (opcion) {
            nombreDigimonAsync();
        } else {
            imagenDigimonAsync();
        }
    }

    document.getElementById("botonAsync").addEventListener("click", onClickFetchButton);
});