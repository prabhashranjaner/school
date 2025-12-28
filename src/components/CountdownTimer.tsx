import { useCallback, useEffect, useState } from "react";
import Card from "./Card";
import styled from "styled-components";

const StyledCounterdownTimer = styled.div`
  display: flex;
  align-items: center;
  gap: 160x;
  justify-content: center;
  gap: 12px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Label = styled.span`
  color: white;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  @media screen and (min-width: 786px) {
    font-size: 18px;
  }
`;

const CountdownTimer = ({ targetDate }: PropsType) => {
  const calculateTimeLeft = useCallback(() => {
    const timeLeft: TimerType = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
    const difference = +new Date(targetDate) - +new Date();

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      timeLeft.days = String(days).padStart(2, "0");
      timeLeft.hours = String(hours).padStart(2, "0");
      timeLeft.minutes = String(minutes).padStart(2, "0");
      timeLeft.seconds = String(seconds).padStart(2, "0");
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timerId = setInterval(() => {
      const timeLeftObj = calculateTimeLeft();

      if (Object.keys(timeLeftObj).length === 0) {
        clearInterval(timerId);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      setTimeLeft(timeLeftObj);
    }, 1000);

    return () => clearInterval(timerId);
  }, [calculateTimeLeft]);

  return (
    <StyledCounterdownTimer>
      <CardWrapper>
        <Card value={timeLeft.days} />
        <Label>Days</Label>
      </CardWrapper>

      <CardWrapper>
        <Card value={timeLeft.hours} />
        <Label>hours</Label>
      </CardWrapper>

      <CardWrapper>
        <Card value={timeLeft.minutes} />
        <Label>Minutes</Label>
      </CardWrapper>
      <CardWrapper>
        <Card value={timeLeft.seconds} />
        <Label>Seconds</Label>
      </CardWrapper>
    </StyledCounterdownTimer>
  );
};

export default CountdownTimer;

type PropsType = {
  targetDate: string;
};

type TimerType = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};
