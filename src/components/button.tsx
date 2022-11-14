import React, { FC } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

interface Props {
    title: string,
    onPress: () => void
}

const Button: FC<Props> = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: '60%',
        backgroundColor: '#6200ee',
        justifyContent: 'center',
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 10,
    },
    text: {
        color: '#fff',
        fontSize: 15,
        alignSelf: 'center',
        fontWeight: 'bold'
    }
})