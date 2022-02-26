const shuffle = (låtar) => {
  let tilllagdaLåtar = [];
  let antalHögar = Math.floor(Math.sqrt(låtar.length));
  let antalLåtarPerHög = Math.floor(Math.sqrt(låtar.length));
  let högar = [];
  for (let i = 0; i <= antalHögar; i++) {
    högar.push([]);
  }
  let shuffladeLåtar = [];
  let förraHög = [];
  const randomNum = (max) => {
    return Math.floor(Math.random() * max);
  };
  //lägg till låtar i högar
  for (let j = 0; j < högar.length; j++) {
    for (let i = 0; i < låtar.length; i++) {
      if (högar[j].length < antalLåtarPerHög) {
        if (!tilllagdaLåtar.includes(låtar[i])) {
          högar[j].push(låtar[i]);
          tilllagdaLåtar.push(låtar[i]);
        }
      }
    }
  }

  //random ordning
  const shufflaLåtar = () => {
    while (shuffladeLåtar.length < låtar.length) {
      let randomHög = högar[randomNum(högar.length)];
      if (
        JSON.stringify(förraHög).includes(JSON.stringify(randomHög)) ||
        !randomHög.length
      ) {
        shufflaLåtar();
      } else {
        förraHög = null;
        förraHög = randomHög;
        let randomLåtFrånRandomHög = randomHög[randomNum(randomHög.length)];
        if (shuffladeLåtar.includes(randomLåtFrånRandomHög)) {
          shufflaLåtar();
        } else {
          shuffladeLåtar.push(randomLåtFrånRandomHög);
        }
      }
    }
  };
  shufflaLåtar();
  return shuffladeLåtar;
};

module.exports = {
  shuffle,
};
