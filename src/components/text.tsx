import React, { FC } from 'react';
import { Text, StyleSheet } from 'react-native';

interface Props {
    title: string,
    subtitle: string
}

const Title: FC<Props> = ({ title, subtitle }) => {
    return (
        <Text style={styles.title}>
            {title}
            <Text style={styles.subtitle}>
                {subtitle}
            </Text>
        </Text>
    )

}

export default Title

const styles = StyleSheet.create({
    title: {
        color: 'blue',
        fontSize: 20,
        margin: 5
    },
    subtitle: {
        color: '#000',
        fontSize: 20
    }
})