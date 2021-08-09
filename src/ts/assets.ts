export type Assets = {
  baseUrl: string;
  images:{ key:string, url:string }[];
};
export default {
  baseUrl: './assets/',
  images: [
    {
      key: 'gameBG',
      url: 'img/bg.jpg',
    },
    {
      key: 'symbols',
      url: 'img/smilies.jpg',
    },
    {
      key: 'desyrel',
      url: 'fonts/desyrel.xml',
    },
    {
      key: 'boy',
      url: 'spine/spineboy.json',
    },
    {
      key: 'dragon',
      url: 'spine/dragon.json',
    },
  ],
};
