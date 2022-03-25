const Random=(min, max)=> {
  return Math.floor(Math.random() * (max - min + 1)) + min;}

function unicRandom(idrandom, min, max, i) {
  let id;
  if (i==0) {
    id = Random(min, max);
  }
  else {
    for(;;) {
      id = Random(min, max);
      let s = false;
      for (let j = 0; j < idrandom.length; j++) {
        if (idrandom[j] == id) { s = true; break; }
    }
        if (!s) {break;}
    }
  }
  idrandom.push(id)
  return id;
}



const idrandom = [];
const urlrandom = [];
const arr = [];



for(let i=0; i<25; i++) {
  const id = unicRandom(idrandom, 1, 25, i);
  const urltmp = unicRandom(urlrandom, 1, 25 , i);

  const url = 'photos/' + urltmp + '.jpg';

const commentrandom = []
const comment = [];
const countcomment = Random(1, 5);

const chanceComment = [ 'Всё отлично!', 'В целом всё неплохо. Но не всё.',
'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const names = ['Павел', 'Петя', 'Тогирджон', 'Ильмир', 'Екатерина', 'Джонни' ]




for(let j = 0; j< countcomment; j++) {
  const idcomment = unicRandom(commentrandom, 1, 534, j)
  const messageTmp = Random(0, chanceComment.length);
  const message  = chanceComment[messageTmp];
  const namestmp = Random(0, names.length);
  const name = names[namestmp];
  const urlAvatar =  'img/avatar-' + Random(1, 6) +'.svg';
  comment.push({id:idcomment, urlAvatar, message, name});
}




  const description = 'описание';
  const likes = Random(15, 200);

    arr.push({id, url, likes, description, comment,});

}
