const API_BASE_URL = 'http://localhost:8000';

async function getAllMusicians() {
    const response = await fetch(`${API_BASE_URL}/musicians`);
    const data = await response.json();
    return data.musicians;
}

async function getAllAlbums() {
    const response = await fetch(`${API_BASE_URL}/albums`);
    const data = await response.json();
    return data.albums;
}

async function getMusicianbyID(id) {
    const response = await fetch(`${API_BASE_URL}/musicians/${id}`)
    const data = await response.json();
    return data.musician;
}

async function getAlbumsByMusicianID(id) {
    const response = await fetch(`${API_BASE_URL}/musicians/${id}/albums`)
    const data = await response.json();
    return data.albums;
}

async function createMusician(musician) {
    const response = await fetch(`${API_BASE_URL}/musicians`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(musician)
    });
    return await response.json();
}

async function createAlbum(album) {
    const response = await fetch(`${API_BASE_URL}/albums`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(album)
    });
    return await response.json();
}

async function updateMusician(id, musician) {
    const response = await fetch(`${API_BASE_URL}/musicians/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(musician)
    });
    return await response.json();
}

async function updateAlbum(id, album) {
    const response = await fetch(`${API_BASE_URL}/albums/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(album)
    });
    return await response.json();
}

async function deleteMusician(id) {
    const response = await fetch(`${API_BASE_URL}/musicians/${id}`, {
        method: 'DELETE'
    });
    return await response.json();
}

async function deleteAlbum(id) {
    const response = await fetch(`${API_BASE_URL}/albums/${id}`, {
        method: 'DELETE'
    });
    return await response.json();
}
