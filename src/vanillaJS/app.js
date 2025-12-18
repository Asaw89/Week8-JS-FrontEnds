let musicians = [];
let albums = [];
let currentView = 'musicians'; // 'musicians' or 'albums'
let editingId = null;

async function displayMusicians() {
    const musicians = await getAllMusicians();

    let html = '';
    for (let musician of musicians) {
        html += `
            <div>
                <h3>${musician.musician_name}</h3>
                <p>Genre: ${musician.genre}</p>
            </div>
        `;
    }

    document.getElementById('musicians-list').innerHTML = html;
}

async function displayAlbums() {
    const albums = await getAllAlbums();
    
    let html = '';
    for (let album of albums) {
        html += `
            <div>
                <h3>${album.album_name}</h3>
                <p>Genre: ${album.genre}</p>
            </div>
        `;
    }
    
    document.getElementById('albums-list').innerHTML = html;
}