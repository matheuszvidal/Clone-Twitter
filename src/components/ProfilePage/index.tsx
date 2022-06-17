import React from 'react';

// import { Container } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>

            <h1>Matheus Vidal</h1>
            <h2>@vidownzera</h2>

            <p>
            Adoro falar sobre tecnologia, jogos e um monte de merda. Estudando pra um dia quem sabe me tornar um Dev. 🧑🏻‍💻
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    Cáceres, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 08 de maio de 1999
                </li>
            </ul>
        </ProfileData>
    </Container>
  )
}

export default ProfilePage;