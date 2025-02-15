    import React, { useEffect, useRef } from 'react';
    import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
    import { Ionicons } from '@expo/vector-icons';

    const Task = (props) => {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
        }).start();
    }, [opacity]);

    const handleDelete = () => {
        Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
        }).start(() => {
        props.onDelete(props.id);
        });
    };

    return (
        <Animated.View style={[styles.item, { opacity }]}>
        <View style={styles.itemLeft}>
            {/* Check Icon */}
            <TouchableOpacity 
            onPress={() => props.onCheck(props.id)} 
            style={styles.iconContainer}
            >
            {props.completed ? (
                <Ionicons name="checkmark-circle" size={24} color="#55BCF6" />
            ) : (
                <Ionicons name="ellipse-outline" size={24} color="#55BCF6" />
            )}
            </TouchableOpacity>
            <Text style={[styles.itemText, props.completed && styles.itemTextCompleted]}>
            {props.text}
            </Text>
        </View>
        {/* Delete Icon */}
        <TouchableOpacity onPress={handleDelete}>
            <Ionicons name="trash" size={24} color="red" />
        </TouchableOpacity>
        </Animated.View>
    );
    };

    export default Task;

    const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: 'wrap'
    },
    iconContainer: {
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
        fontSize: 16,
    },
    itemTextCompleted: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
    });
