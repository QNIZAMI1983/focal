const library = {
  tracks: { /* ... */ },
  playlists: { /* ... */ },

  printPlaylists: function () {
    for (const playlistId in this.playlists) {
      const playlist = this.playlists[playlistId];
      console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    }
  },

  printTracks: function () {
    for (const trackId in this.tracks) {
      const track = this.tracks[trackId];
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },

  printPlaylist: function (playlistId) {
    const playlist = this.playlists[playlistId];
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    for (const trackId of playlist.tracks) {
      const track = this.tracks[trackId];
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },

  addTrackToPlaylist: function (trackId, playlistId) {
    const playlist = this.playlists[playlistId];
    if (playlist) {
      playlist.tracks.push(trackId);
    } else {
      console.log("Playlist not found. Please check the playlistId.");
    }
  },

  generateUid: function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function (name, artist, album) {
    const trackId = this.generateUid();
    this.tracks[trackId] = {
      id: trackId,
      name: name,
      artist: artist,
      album: album
    };
  },

  addPlaylist: function (name) {
    const playlistId = this.generateUid();
    this.playlists[playlistId] = {
      id: playlistId,
      name: name,
      tracks: []
    };
  },

  printSearchResults: function (query) {
    for (const trackId in this.tracks) {
      const track = this.tracks[trackId];
      const nameMatch = track.name.toLowerCase().includes(query.toLowerCase());
      const artistMatch = track.artist.toLowerCase().includes(query.toLowerCase());
      const albumMatch = track.album.toLowerCase().includes(query.toLowerCase());

      if (nameMatch || artistMatch || albumMatch) {
        console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
      }
    }
  }
};


// Print all playlists
library.printPlaylists();

// Print all tracks
library.printTracks();

// Print the tracks in a specific playlist
library.printPlaylist("p01");

// Add a track to a playlist
library.addTrackToPlaylist("t03", "p01");


// Add a new track to the library
library.addTrack("New Song", "New Artist", "New Album");

// Add a new playlist to the library
library.addPlaylist("New Playlist");

// Print tracks matching a search query (stretch)
library.printSearchResults("John");



