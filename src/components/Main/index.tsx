import React from 'react';

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, EmailIcon, BellIcon } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
        <Header>
            <button>
                <BackIcon />
            </button>
            <ProfileInfo>
                <strong>Matheus Vidal</strong>
                <span>612 Tweets</span>
            </ProfileInfo>
        </Header>

        {/* <ProfilePage /> */}

        <BottomMenu>
            <HomeIcon className='active' />
            <SearchIcon />
            <BellIcon />
            <EmailIcon />
        </BottomMenu>
    </Container>
  )
}

export default Main;