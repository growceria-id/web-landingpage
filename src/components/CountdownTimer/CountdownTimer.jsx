import React, {useEffect, useState} from "react"
import { CountdownContainer, CountdownSection, CountdownText, CountdownNumber, CountdownDivider } from "./CountdownTimerElements"
import { getRemainingTime } from "./Utils/CountdownTimerUtils"

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [countdownTimestampMs])
    
    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTime(countdown))
    }

    return (
        <CountdownContainer>
            <CountdownSection>
                <CountdownNumber>{remainingTime.days}</CountdownNumber>
                <CountdownText>hari</CountdownText>
            </CountdownSection>
            <CountdownDivider>:</CountdownDivider>
            <CountdownSection>
                <CountdownNumber>{remainingTime.hours}</CountdownNumber>
                <CountdownText>jam</CountdownText>
            </CountdownSection>
            <CountdownDivider>:</CountdownDivider>
            <CountdownSection>
                <CountdownNumber>{remainingTime.minutes}</CountdownNumber>
                <CountdownText>menit</CountdownText>
            </CountdownSection>
            <CountdownDivider>:</CountdownDivider>
            <CountdownSection>
                <CountdownNumber>{remainingTime.seconds}</CountdownNumber>
                <CountdownText>detik</CountdownText>
            </CountdownSection>
        </CountdownContainer>
    )
}

export default CountdownTimer