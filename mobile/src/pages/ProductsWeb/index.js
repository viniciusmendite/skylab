import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

export default () => {

    const route = useRoute();
    const navigation = useNavigation();

    const title = route.params.data.title;
    const url = route.params.data.url;

    navigation.setOptions({
        title: title
    });

    return (
        <WebView startInLoadingState={true} source={{ uri: url }} />
    );
}
