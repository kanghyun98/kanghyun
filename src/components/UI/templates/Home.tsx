import React, { FC } from 'react';

import HomeBanner from 'components/UI/organisms/HomeBanner';
import PortfolioSummary from 'components/UI/organisms/PortfolioSummary';
import BlogSummary from 'components/UI/organisms/BlogSummary';
import { PostListProps } from 'components/UI/organisms/PostList';

interface HomeType {
  posts: PostListProps;
  backgroundImageURL: string;
}

const Home: FC<HomeType> = ({ posts, backgroundImageURL }) => {
  return (
    <>
      <HomeBanner backgroundImageURL={backgroundImageURL} />
      <PortfolioSummary />
      <BlogSummary posts={posts} />
    </>
  );
};

export default Home;
