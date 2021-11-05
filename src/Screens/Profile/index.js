import React from 'react';
import { View, Switch, Button } from 'react-native';
import styled from 'styled-components/native';

import { useTheme, Fonts, Images, Metrics } from 'Themes';
import { McText, McImage, PlayButton } from 'Components';

const Profile = ({ navigation }) => {
  const theme = useTheme();
  return (
    <Container>
      <Title>Profile Screen</Title>
      <SwitchSection>
        <Text>Theme Switch</Text>
        <Switch
          value={theme.mode === 'dark'}
          onValueChange={(value) => theme.setMode(value ? 'dark' : 'light')}
          style={{
            marginLeft: 12,
          }}
        />
      </SwitchSection>
      <Button
        onPress={() => {
          navigation.navigate('Home');
        }}
        title="Back"
      ></Button>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.background};
`;
const Title = styled.Text`
  font-size: 30px;
  color: ${(props) => props.theme.colors.text};
`;
const Text = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
`;
const SwitchSection = styled.View`
  margin: 30px 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export default Profile;
