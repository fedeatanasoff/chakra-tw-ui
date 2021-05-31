import { Container } from '@chakra-ui/layout';
import React from 'react';
import { Stack, Icon, Text } from '@chakra-ui/react';
import { FaTwitter, FaRegListAlt } from 'react-icons/fa';
import { BiHash, BiBell, BiHomeCircle } from 'react-icons/bi';
import { HiOutlineUser, HiOutlineBookmark } from 'react-icons/hi';
import { MdMailOutline } from 'react-icons/md';
import { GoSettings } from 'react-icons/go';

const Layout = ({ children }) => {
  return (
    <Container maxW="container.md" alignSelf="center">
      <Stack direction="row">
        <Stack>
          <Icon as={FaTwitter} />
          <Stack>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Icon as={BiHomeCircle} />
              <Text>Inicio</Text>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Icon as={BiHash} />
              <Text>Explorar</Text>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Icon as={BiBell} /> spacing={3}
              <Text>Notificaciones</Text>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Icon as={MdMailOutline} />
              <Text>Mensajes</Text>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Icon as={HiOutlineBookmark} />
              <Text>Guardados</Text>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Icon as={FaRegListAlt} />
              <Text>Listas</Text>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Icon as={HiOutlineUser} />
              <Text>Perfil</Text>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Icon as={GoSettings} />
              <Text>Mas opciones</Text>
            </Stack>
          </Stack>
        </Stack>
        {children}
      </Stack>
    </Container>
  );
};

export default Layout;
