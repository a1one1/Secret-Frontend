import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonCat = (props: any) => (
  <ContentLoader
    speed={2}
    width={200}
    height={75}
    viewBox='0 0 200 75'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='8' y='1' rx='0' ry='0' width='200' height='75' />
  </ContentLoader>
);

export default SkeletonCat;
