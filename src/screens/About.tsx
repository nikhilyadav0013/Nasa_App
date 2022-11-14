import { FC, useState, useEffect } from "react";
import { KeyboardAvoidingView, SafeAreaView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { getAsteroidInfo } from "../api/getAsteroidInfo";
import { Title } from "../components";
import { aboutConstants } from "../constants/aboutConstant";

const About: FC = () => {

    const route = useRoute()
    const [data, setData] = useState({})

    useEffect(() => {
        getAsteroidInfo(route?.params?.id, setData)
    }, [])
    

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <Title title={aboutConstants.ID} subtitle={data?.id} />
                <Title title={aboutConstants.NAME} subtitle={data?.name} />
                <Title title={aboutConstants.NASA_JPL_URL} subtitle={data?.nasa_jpl_url} />
                <Title title={aboutConstants.IS_POTENTIALLY_HAZARDOUS} subtitle={String(data?.is_potentially_hazardous_asteroid)} />
            </SafeAreaView >
        </KeyboardAvoidingView >

    )
}

export default About;

