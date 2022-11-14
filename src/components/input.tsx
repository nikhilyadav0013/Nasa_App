import React, { FC } from "react";
import { View, TextInput, StyleSheet } from "react-native";

interface Props {
    placeholder: string,
    onChangeText: (text: string) => void
}

const Input: FC<Props> = ({placeholder, onChangeText}) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                onChangeText={onChangeText}
                placeholderTextColor='#000'
                style={styles.input}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        width: '80%',
        alignSelf: 'center',
        backgroundColor: '#e3e3e3',
        borderRadius: 5
    },
    input: {
        padding: 15,
        color: '#000'
    }
})