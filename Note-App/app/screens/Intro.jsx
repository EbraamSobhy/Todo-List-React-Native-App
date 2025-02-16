import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import colors from "../misc/colors";
import RoundIconBtn from '../components/RoundIconBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Intro() {
    const [user, setUser] = useState('');
    const handleChange = (text) => {
        setUser(text);
    };
    const handelSubmit = async () => {
        const user = { name: user };
        await AsyncStorage.setItem('user', JSON.stringify(user));
        setUser('');
    };
    return (
        <>
            <StatusBar />
            <View style={styles.container}>
            <Text style={styles.title}>Enter your name to countinue: </Text>
            <TextInput style={styles.textInput}
                placeholder='Enter your name'
                onChangeText={handleChange}
                value={user}
            />
            {
                user.trim().length >= 3 ? (
                    <RoundIconBtn antIconName="arrowright" onPress={handelSubmit} />
                ) : null
            }
            </View>
        </>
    )
}

const width = Dimensions.get('window').width - 50;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        alignSelf: 'center',
    },
    textInput: {
        marginTop: 20,
        borderColor: colors.PRIMARY,
        borderStyle: "solid",
        borderWidth: 2,
        width,
        height: 45,
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 15,
    },
})