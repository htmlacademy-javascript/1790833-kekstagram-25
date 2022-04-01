const Random=(min, max)=> {
  return Math.floor(Math.random() * (max - min + 1)) + min;};
  const unicRandom=(idrandom, min, max, i)=> {
    let id;
    if (i==0) {
      id = Random(min, max);
    }
    else {
      for(;;) {
        id = Random(min, max);
        let s = false;
        for (let j = 0; j < idrandom.length; j++) {
          if (idrandom[j] == id) { s = true; break; };
      };
          if (!s) {break;}
      };
    };
    idrandom.push(id);
    return id;
  };
  export {Random, unicRandom};
