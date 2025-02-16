import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import colors from '../misc/colors';

const RoundIconBtn = ({ antIconName, size, color, style, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.iconContainer, style]}
            onPress={onPress}
        >
            <AntDesign
                name={antIconName}
                size={size || 24}
                color={color || colors.DARK}
            />
        </TouchableOpacity>
    );
};

export default RoundIconBtn;

const styles = StyleSheet.create({
    iconContainer: {
        padding: 15,
        marginTop: 15,
        borderRadius: 50,
        backgroundColor: colors.PRIMARY,
        elevation: 5, // For Android shadow
        shadowColor: '#000', // For iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
