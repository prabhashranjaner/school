import { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  position: relative;
  display: inline-block;
  width: 70px;
  height: 70px;
  perspective: 500px;
  font-size: 35px;
  text-align: center;

  @media screen and (min-width: 786px) {
    width: 160px;
    height: 160px;
    font-size: 80px;
  }
`;

const CardChild = styled.span`
  background-color: var(--col-gray-1);
  display: block;
  width: 100%;
  height: 50%;
  line-height: 70px; /* equal to the height of the card*/
  color: white;
  border-radius: 8px;
  overflow: hidden;

  @media screen and (min-width: 786px) {
    line-height: 160px;
    border-radius: 12px;
  }
`;

const Top = styled(CardChild)`
  border-bottom: 1px solid var(--col-gray-3);

  @media screen and (min-width: 786px) {
    border-bottom: 3px solid var(--col-gray-3);
  }
`;

const Bottom = styled(CardChild)`
  position: absolute;
  line-height: 0;
  bottom: 0;
  left: 0;
`;

const Card = ({ value }: PropsType) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    console.log("dataset", cardRef.current!.dataset.value);

    const previousValue = card.dataset.value;
    if (previousValue === value) return;
    console.log("inside useeffect");

    const top = card.querySelector(".top") as HTMLSpanElement;
    const bottom = card.querySelector(".bottom") as HTMLSpanElement;
    const flipAnim = card.querySelector(".flip-animation") as HTMLSpanElement;

    flipAnim.textContent = value;
    flipAnim.style.display = "block";

    flipAnim.addEventListener(
      "animationend",
      () => {
        top.textContent = value;
        bottom.textContent = value;
        card.dataset.value = value;
        flipAnim.style.display = "none";
      },
      { once: true }
    );
  }, [value]);

  return (
    <StyledCard ref={cardRef} data-value={value} className="flip-card">
      <Top className="top">{value}</Top>
      <Bottom className="bottom">{value}</Bottom>
    </StyledCard>
  );
};

export default Card;

type PropsType = {
  value: string;
};
