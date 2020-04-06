import styled from 'styled-components/native';

export const Container = styled.View`
background-color: #FFF;
borderWidth: 1px;
border-color: #DDD;
border-radius: 5px;
padding: 20px;
margin-bottom: 20px;
`;

export const Title = styled.Text`
font-size: 18px;
font-weight: bold;
color: #333;
text-transform: capitalize;
`;

export const Description = styled.Text`
font-size: 16px;
color: #999;
margin-top: 5px;
line-height: 24px;
`;

export const Button = styled.TouchableOpacity`
height: 42px;
border-radius: 5px;
border-width: 2px;
border-color: #DA552F;
background-color: transparent;
justify-content: center;
align-items: center;
margin-top: 10px;
`;

export const ButtonText = styled.Text`
font-size: 16px;
color: #DA552F;
font-weight: bold;
`;

