let musicians = [];
let albums = [];
let currentView = 'musicians'; // 'musicians' or 'albums'
let editingId = null;

//Function starts
//Go get all musicians from API (wait for response)
//Create empty string
//Loop through each musician, adding HTML for each one
//When loop is done, put all that HTML on the page
//Function ends

async function displayMusicians() { //creates the function to display musicians. async means this function will wait for the data from the internet
    const musicians = await getAllMusicians(); // calls your API from api.js and waits for it to return. The 'await" says pause until the data comes back.

    let html = ''; //Creates an empty string variable. Build up HTML piece by piece in this this variable.
    for (let musician of musicians) { //Starts a loop. For each musician in the array, run the code inside the {}.
        html += `
            <div class="col-md mb-3">
        <div class="card-body">
            <h3 class="card-title">${musician.musician_name}</h3>
            <p class="card-text">Genre: ${musician.genre}</p>
            <p class="card-text">Year Formed: ${musician.year_formed}</p>
            <p class="card-text">Origin: ${musician.origin}</p>
            <button class="btn btn-primary" onclick="showAlbumsForMusician(${musician.id})">
                View Albums
            </button>
            <div id="albums-container-${musician.id}"></div>
        </div>
    </div>
`;
    }//creates HTML. the musician.musician_name gets replaced with the actual name
    html+=`</div>`;

    document.getElementById('musicians-list').innerHTML = html;// document is the webpage and the musician find the musician in your html. inner html replaces the sting
}

async function displayAlbums() {
    const albums = await getAllAlbums();

    let html = '';
    for (let album of albums) {
        html += `
            <div>
                <h3>${album.title}</h3>
                <p>Artist ID: ${album.musician_id}</p>
                <p>Tracks: ${album.number_of_tracks}</p>
                <p>Label: ${album.label}</p>
                <p>Description: ${album.description}</p>
            </div>
        `;
    }

    document.getElementById('albums-list').innerHTML = html;
}

async function displayMusician(id) {
    const musician = await getMusicianByID(id);
    let html = `
            <div>
                <h3>${musician.musician_name}</h3>
                <p>Genre: ${musician.genre}</p>
                <p>Year Formed: ${musician.year_formed}</p>
                <p>Origin: ${musician.origin}</p>
            </div>
        `;
    document.getElementById('musician-list').innerHTML = html;
}

async function displayAlbum(id) {
    const album = await getAlbumByID(id);
    let html = `
            <div>
                <h3>${album.title}</h3>
                <p>Artist ID: ${album.musician_id}</p>
                <p>Tracks: ${album.number_of_tracks}</p>
                <p>Label: ${album.label}</p>
                <p>Description: ${album.description}</p>
            </div>
        `;

    document.getElementById('album-list').innerHTML = html;
}

async function showAlbumsForMusician(id) {
    const albums = await getAlbumsByMusicianID(id);
    let html = `<h2>Artist Albums</h2>`;

    for (let album of albums) {
        html += `
            <div style="border: 1px solid #ccc; margin: 10px; padding: 10px;">
                <h3>${album.title}</h3>
                <p>Tracks: ${album.number_of_tracks}</p>
                <p>Label: ${album.label}</p>
                <p><em>${album.description}</em></p>
            </div>
        `;
    }
    document.getElementById(`albums-container-${id}`).innerHTML = html;
}

function showMusicians() {
    document.getElementById('musicians-section').style.display = 'block';
    document.getElementById('albums-section').style.display = 'none';
    displayMusicians();
}

function showAlbums() {
    document.getElementById('musicians-section').style.display = 'none';
    document.getElementById('albums-section').style.display = 'block';
    displayAlbums();
}

displayMusicians();