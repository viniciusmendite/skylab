import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import ProductsList from './ProductsList';
import {
    Container,
    ItemList
} from './styles';

export default () => {

    const [libs, setLibs] = useState([]);
    const [productInfo, setProductInfo] = useState([]);
    let page = 1;

    const navigation = useNavigation();

    navigation.setOptions({
        title: 'Bibliotecas',
    });

    const loadLibs = async () => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        setLibs([...libs, ...docs]);
        setProductInfo(productInfo);
        console.log(productInfo)
    }

    useEffect(() => {
        loadLibs();
    }, []);

    const loadMore = () => {
        if (libs.length === productInfo.total) {
            return;
        }

        page++;
        loadLibs();
    }

    return (
        <Container>
            <StatusBar backgroundColor="#DA552F" barStyle='light-content' />

            <ItemList
                data={libs}
                keyExtractor={item => String(item._id)}
                renderItem={({ item }) => <ProductsList data={item} />}
                onEndReached={loadMore}
                onEndReachedThreshold={0.2}
            />
        </Container>
    );
}