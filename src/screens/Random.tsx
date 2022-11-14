import { FC, useState, useEffect } from "react";
import { KeyboardAvoidingView, SafeAreaView } from "react-native";
import { getRandomAsteroidInfo } from "../api/getAsteroidInfo";
import { Title } from "../components";
import { aboutConstants } from "../constants/aboutConstant";


const Random: FC = () => {

    const [data, setData] = useState({})
    const [rdate, setRdate] = useState('')

    const randomDate = (start: Date, end: Date) => {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    useEffect(() => {

        const n = String(randomDate(new Date(2012, 0, 1), new Date())).split(" ")
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let month1 = months.indexOf(n[1]);
        const genDate = n[3] + "-" + String(month1 + 1) + "-" + n[2]
        setRdate(genDate)
        getRandomAsteroidInfo(genDate, setData)
    }, [])

    


    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <Title title={aboutConstants.ID} subtitle={data?.id} />
                <Title title={aboutConstants.NAME} subtitle={data?.name} />
                <Title title={aboutConstants.NASA_JPL_URL} subtitle={data?.nasa_jpl_url} />
                <Title title={aboutConstants.IS_POTENTIALLY_HAZARDOUS} subtitle={String(data?.is_potentially_hazardous_asteroid)} />
            </SafeAreaView>
        </KeyboardAvoidingView>

    )
}

export default Random