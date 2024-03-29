import React, { createRef, FC, useEffect } from 'react';
import styled from '@emotion/styled';

const src = 'https://utteranc.es/client.js';
const repo = 'kanghyun98/kanghyun';

type UtterancesAttributesType = {
  src: string;
  repo: string;
  'issue-term': string;
  label: string;
  theme: string;
  crossorigin: string;
  async: string;
};

const UtterancesWrapper = styled.div`
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  & > .utterances {
    max-width: 60rem;
  }
`;

const CommentWidget: FC = () => {
  const element = createRef<HTMLDivElement>();

  useEffect(() => {
    if (element.current === null) return;

    const utterances: HTMLScriptElement = document.createElement('script');

    const attributes: UtterancesAttributesType = {
      src,
      repo,
      'issue-term': 'pathname',
      label: 'Comment',
      theme: `github-light`,
      crossorigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    element.current.appendChild(utterances);
  }, []);

  return <UtterancesWrapper ref={element} />;
};

export default CommentWidget;
