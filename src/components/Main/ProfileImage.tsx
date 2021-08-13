// 소개글 구역에 사용할 프로필 이미지
import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const PROFILE_IMAGE_LINK = "https://avatars.githubusercontent.com/u/70627979?v=4"

const ProfileImageWrapper = styled.img`
    width: 120px;
    height: 120px;
    margin-bottom: 30px;
    border-radius: 50%;
`

const ProfileImage: FunctionComponent = () => {
    return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image"/>;
}

export default ProfileImage;