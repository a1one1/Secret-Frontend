import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={370}
    height={550}
    viewBox='0 0 370 550'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='-7' y='2' rx='3' ry='3' width='370' height='450' />
    <rect x='140' y='523' rx='0' ry='0' width='56' height='24' />
    <rect x='99' y='479' rx='0' ry='0' width='135' height='28' />
  </ContentLoader>
);

export default Skeleton;
