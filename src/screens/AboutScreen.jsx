import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import { TouchableOpacity } from 'react-native-gesture-handler';

function AboutScreen({ navigation }) {

    const handleAuthorNamePress = () => {
        alert(`Thanks for using this app, from Kevin CHONG!`);
    };

    return (
        <MainLayout>
            <SafeAreaView>
                <Text>My To Do List App</Text>
                <TouchableOpacity onPress={handleAuthorNamePress}>
                    <Text>By: Kevin CHONG</Text>
                </TouchableOpacity>
                <Text>{new Date().toLocaleDateString()}</Text>
                <Button
                    title="Go to Home"
                    onPress={() => navigation.navigate('Home')}
                />
            </SafeAreaView>
        </MainLayout>
    );
}

export default AboutScreen;