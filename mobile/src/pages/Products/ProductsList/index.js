import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
    Container,
    Title,
    Description,
    Button,
    ButtonText
} from './styles';

export default ({ data }) => {
    const navigation = useNavigation();

    const handleNav =()=>{
   navigation.navigate('ProductsWeb', {data});
    }
    return (
        <Container>
            <Title>{data.title}</Title>
            <Description>{data.description}</Description>
            <Button onPress={handleNav}>
                <ButtonText>Acessar</ButtonText>
            </Button>
        </Container>
    );
}
