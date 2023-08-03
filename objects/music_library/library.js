const library = {
    tracks: { t01: { id: "t01",
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three" },
              t02: { id: "t02",
                     name: "Model View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"},
              t03: { id: "t03",
                     name: "Four Thirty-Three",
                     artist: "John Cage",
                     album: "Woodstock 1952"}
            },
    playlists: { p01: { id: "p01",
                        name: "Coding Music",
                        tracks: ["t01", "t02"]
                      },
                 p02: { id: "p02",
                        name: "Other Playlist",
                        tracks: ["t03"]
                      }
               }
  };
  
  /////////////////////////////
  // FUNCTIONS TO IMPLEMENT:
  /////////////////////////////
  
  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  const printPlaylists = function() {
    for (const playlistId in library.playlists) {
      const playlist = library.playlists[playlistId];
      console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    }
  };
  
  
  
  // prints a list of all tracks, using the following format:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  const printTracks = function() {
    for (const trackId in library.tracks) {
      const track = library.tracks[trackId];
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  };
  
  
  
  // prints a list of tracks for a given playlist, using the following format:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  const printPlaylist = function(playlistId) {
    const playlist = library.playlists[playlistId];
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    for (const trackId of playlist.tracks) {
      const track = library.tracks[trackId];
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  };
  
  
  
  // adds an existing track to an existing playlist
  const addTrackToPlaylist = function(trackId, playlistId) {
    const playlist = library.playlists[playlistId];
    if (playlist) {
      playlist.tracks.push(trackId);
    } else {
      console.log("Playlist not found. Please check the playlistId.");
    }
  };
  
  // generates a unique id
  // (already implemented: use this for addTrack and addPlaylist)
  const generateUid = function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  
  
  // adds a track to the library
  const addTrack = function(name, artist, album) {
    const trackId = generateUid();
    library.tracks[trackId] = {
      id: trackId,
      name: name,
      artist: artist,
      album: album
    };
  };
  
  
  
  // adds a playlist to the library
  const addPlaylist = function(name) {
    const playlistId = generateUid();
    library.playlists[playlistId] = {
      id: playlistId,
      name: name,
      tracks: []
    };
  };
  
  
  // STRETCH:
  // given a query string string, prints a list of tracks
  // where the name, artist or album contains the query string (case insensitive)
  // tip: use "string".search("tri") 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
  const printSearchResults = function(query) {
    for (const trackId in library.tracks) {
      const track = library.tracks[trackId];
      const nameMatch = track.name.toLowerCase().includes(query.toLowerCase());
      const artistMatch = track.artist.toLowerCase().includes(query.toLowerCase());
      const albumMatch = track.album.toLowerCase().includes(query.toLowerCase());
  
      if (nameMatch || artistMatch || albumMatch) {
        console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
      }
    }
  };
  
  // Print all playlists
printPlaylists();

// Print all tracks
printTracks();

// Print the tracks in a specific playlist
printPlaylist("p01");

// Add a track to a playlist
addTrackToPlaylist("t03", "p01");

// Add a new track to the library
addTrack("New Song", "New Artist", "New Album");

// Add a new playlist to the library
addPlaylist("New Playlist");

// Print tracks matching a search query (stretch)
printSearchResults("John");
