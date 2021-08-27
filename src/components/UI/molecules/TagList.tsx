// 카테고리 목록
import React, { FC } from 'react';
import styled from '@emotion/styled';

import Tag from 'components/UI/atoms/Tag';

export interface TagValueProps {
  fieldValue: string;
  totalCount: number;
}

export interface TagListType {
  tags: TagValueProps[];
  totalNum: number;
}

const SyledTagList = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 828px) {
    flex-direction: row;
    padding-bottom: 0.5rem;
    overflow: auto;
  }
`;

const TagList: FC<TagListType> = ({ tags, totalNum }) => {
  return (
    <SyledTagList>
      <Tag tagName="All" tagNum={totalNum} tagLink={`/blog`} key="All" />
      {tags.map(({ fieldValue, totalCount }: TagValueProps) => (
        <Tag
          tagName={fieldValue}
          tagNum={totalCount}
          tagLink={`/blog/${fieldValue}`}
          key={fieldValue}
        />
      ))}
    </SyledTagList>
  );
};

export default TagList;
