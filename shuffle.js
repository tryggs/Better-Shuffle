const shuffle = (songs) => {
  let addedSongs = [];
  let numberOfGroups = Math.floor(Math.sqrt(songs.length));
  let numberSongsPerGroup = Math.floor(Math.sqrt(songs.length));
  let groups = [];
  for (let i = 0; i <= numberOfGroups; i++) {
    groups.push([]);
  }
  let shuffledSongs = [];
  let lastGroup = [];
  const randomNum = (max) => {
    return Math.floor(Math.random() * max);
  };
  //lägg till songs i groups
  for (let j = 0; j < groups.length; j++) {
    for (let i = 0; i < songs.length; i++) {
      if (groups[j].length < numberSongsPerGroup) {
        if (!addedSongs.includes(songs[i])) {
          groups[j].push(songs[i]);
          addedSongs.push(songs[i]);
        }
      }
    }
  }

  //random ordning
  const shuffleSongs = () => {
    while (shuffledSongs.length < songs.length) {
      let randomGroup = groups[randomNum(groups.length)];
      if (
        JSON.stringify(lastGroup).includes(JSON.stringify(randomGroup)) ||
        !randomGroup.length
      ) {
        shuffleSongs();
      } else {
        lastGroup = null;
        lastGroup = randomGroup;
        let randomSongFromRandomGroup =
          randomGroup[randomNum(randomGroup.length)];
        if (shuffledSongs.includes(randomSongFromRandomGroup)) {
          shuffleSongs();
        } else {
          shuffledSongs.push(randomSongFromRandomGroup);
        }
      }
    }
  };
  shuffleSongs();
  return shuffledSongs;
};
module.exports = {
  shuffle,
};
