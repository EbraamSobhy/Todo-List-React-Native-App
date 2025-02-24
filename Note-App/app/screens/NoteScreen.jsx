import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import colors from '../misc/colors';
import SearchBar from '../components/SearchBar';

const NoteScreen = ({ user }) => {
    const [greet, setGreet] = useState('');

    const findGreet = () => {
        const hrs = new Date().getHours()
        if(hrs === 0 || hrs < 12) {
            return setGreet("Morning");
        }
        if(hrs === 1 || hrs < 17) {
            return setGreet("Afternoon");
        }
        setGreet("Evening");
    }

    useEffect(() => {
        findGreet()
    }, []);

    return (
        <>
            <StatusBar barStyle = 'dark-content' backgroundColor={colors.LIGHT} />
            <View style={styles.container}>
            <Text style={styles.header}>{`Good ${greet} ${user.name}`}</Text>
            <SearchBar />
            <View style={styles.emptyHeaderContainer}>
                <Text style={styles.emptyHeader}>Add Notes</Text>
            </View>
            </View>
        </>
    )
}

export default NoteScreen;

const styles = StyleSheet.create({
    header: {
        flex: 1,
        marginTop: 50,
        marginBottom: 10,
        fontSize: 23,
        fontWeight: "bold",
    },
    container: {
        paddingHorizontal: 20
    },
    emptyHeaderContainer: {

    },
    emptyHeader: {
        
    }
})