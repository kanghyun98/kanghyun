import React from 'react';
import styled from '@emotion/styled';

import TagList from 'components/UI/molecules/TagList';
import PostText from 'components/UI/atoms/PostText';

const TagListWrapper = styled.div`
  min-width: 9rem;
  padding-top: 1rem;

  & > p {
    margin-bottom: 1rem;
  }
`;

const TagNav = ({ tags, totalNum }) => {
  return (
    <TagListWrapper>
      <PostText content="태그 목록" weight="700" />
      <TagList tags={tags} totalNum={totalNum} />
    </TagListWrapper>
  );
};

export default TagNav;