import Images from '../../themes/Images';

const Posts = [
  {
    id: 'post1',
    username: 'fajarpancas',
    name: 'Fajar Panca',
    avatar: Images.fajarpanca,
    posts: [
      {
        id: '1',
        image: Images.sample1,
      },
      {
        id: '2',
        image: Images.sample2,
      },
    ],
    caption:
      'Love should never be a secret. If you keep something as complicated as love stored up inside, it could make you sick.',
    likes: '137,728',
    commentCount: 5,
    createdAt: '2022-07-20 11:13:12',
  },
];

export default Posts;
