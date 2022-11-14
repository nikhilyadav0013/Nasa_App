import React, { FC, useState } from "react";
import { KeyboardAvoidingView, SafeAreaView, View, Text, StyleSheet, Alert } from "react-native";
import { Input, Button } from "../components";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../navigation/stackParamList";

type homeScreenProps = NativeStackNavigationProp<StackParamList, 'Home'>

const Home: FC = () => {

    const navigation = useNavigation<homeScreenProps>()

    const [id, setId] = useState<string | ''>('')

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Input
                        placeholder="Enter Asteroid Id"
                        onChangeText={text => setId(text)}
                    />
                    <Button
                        title="Random Asteroid"
                        onPress={() => navigation.navigate('Random')}
                    />
                    {id.length !==7 ? <View style={styles.submit}>
                        <Text style={styles.text}>Submit</Text>
                    </View> :
                        <Button
                            title="Submit"
                            onPress={() => navigation.navigate('About', { id: id })}
                        />}

                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>

    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    submit: {
        height: 40,
        width: '60%',
        backgroundColor: '#e3e3e3',
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