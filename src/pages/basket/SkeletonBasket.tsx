import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonBasket = (props: any) => (
  <ContentLoader
    speed={2}
    width={1000}
    height={671}
    viewBox='0 0 1000 671'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='0' y='0' rx='0' ry='0' width='950' height='70' />
    <rect x='0' y='93' rx='0' ry='0' width='950' height='218' />
    <rect x='0' y='405' rx='0' ry='0' width='251' height='44' />
    <rect x='266' y='385' rx='0' ry='0' width='234' height='64' />
    <rect x='485' y='500' rx='0' ry='0' width='140' height='23' />
    <rect x='487' y='554' rx='0' ry='0' width='249' height='68' />
    <rect x='760' y='555' rx='0' ry='0' width='224' height='66' />
  </ContentLoader>
);

export default SkeletonBasket;
