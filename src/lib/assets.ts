const P = "https://images.pexels.com/photos";

const px = (id: number, w: number) =>
  `${P}/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const IMG = {
  heroBottom: px(27099922, 2400),
  transitionBg: px(11618710, 2400),
  grid1: px(23696832, 1920),
  grid2: px(10834384, 1920),
  travelBottom: px(15469407, 2400),
  journeyMap:
    "https://cdn.prod.website-files.com/697797a5e8e563920247d163/697e93f69422637c278d3a87_769023d7c92ad7434b2952dd8f431745_map.svg",
  journey1: px(24513297, 1600),
  journey2: px(3293192, 1600),
  journey3: px(35823226, 1600),
  journey4: px(13799693, 1600),
  numFin: px(12446345, 2400),
  numTop: px(12365962, 2400),
  testiBg: px(2387675, 2400),
  testiBottom: px(12446349, 2400),
  securityBg: px(19780237, 2400),
  ctaBg: px(9080918, 2400),
  ctaTop: px(14923408, 1920),
  footerBg: px(13240848, 2400),
};

export const VIDEOS = {
  hero: "https://videos.pexels.com/video-files/33339624/14196145_2560_1440_30fps.mp4",
  cta: "https://videos.pexels.com/video-files/3009253/3009253-hd_1920_1080_30fps.mp4",
};

export const AVATARS = {
  kenneth: `${P}/34103132/pexels-photo-34103132.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=400&h=400`,
  amir: `${P}/23476948/pexels-photo-23476948.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=400&h=400`,
};

export const ESCAPES = [
  {
    name: "Paris",
    blurb: "Europe honeymoons, done right",
    img: px(15452274, 1600),
  },
  {
    name: "Thailand",
    blurb: "Island holidays for families",
    img: px(8170275, 1600),
  },
  {
    name: "Dubai",
    blurb: "Short city breaks",
    img: px(13256066, 1600),
  },
  {
    name: "Greece",
    blurb: "Aegean escapes",
    img: px(37844509, 1600),
  },
  {
    name: "Swiss Alps",
    blurb: "Alpine holidays",
    img: px(38367977, 1600),
  },
];

export const DESTINATIONS = [
  "Kashmir",
  "Maldives",
  "Bali",
  "Thailand",
  "Singapore",
  "Europe",
  "Turkey",
  "Bhutan",
  "Vietnam",
  "Mauritius",
];
