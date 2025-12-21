const API_BASE_URL = 'http://localhost:8000';

export async function getAllMusicians() {
    const response = await fetch(`${API_BASE_URL}/musicians`);
    const data = await response.json();
    return data.musicians;
}

export async function getAllAlbums() {
    const response = await fetch(`${API_BASE_URL}/albums`);
    const data = await response.json();
    return data.albums;
}

export async function getAlbumsByMusicianID(id) {
    const response = await fetch(`${API_BASE_URL}/musicians/${id}/albums`);
    const data = await response.json();
    return data.albums;
}