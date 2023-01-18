import React from "react";
import { useStep } from "../hooks";
import styled from "styled-components";

const BottomNavigator = styled.nav`
  width: 100%;
  max-width: 500px;
  padding: 16px 16px 24px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: right;
  background-color: var(--color-white);
  ${({ noPrev }) => !noPrev && "display: flex; justify-content: space-between"};
`;

const Button = styled.button`
  padding: 0;
  border: none;
  border-radius: 12px;
`;

export function ExUseStep() {
  const [currentStep, helpers] = useStep(15);

  const {
    canGoToPrevStep,
    canGoToNextStep,
    goToNextStep,
    goToPrevStep,
    reset,
    setStep,
  } = helpers;

  // reset 힘수는 초기값 (초기 step) 으로 리셋시켜주는 용도
  // cangoto --- 함수로는 prev button, next button 분기처리를 해주면 된다.

  return (
    <BottomNavigator noPrev={!canGoToPrevStep}>
      {canGoToPrevStep && (
        <Button onClick={goToPrevStep}>
          <img
            src={require("../../assets/icons/curation/back-active.svg")}
            alt=""
          />
        </Button>
      )}
      {currentStep === 0 ? (
        !canGoToPrevStep && type !== "" ? (
          <Button onClick={goToNextStep}>
            <img
              src={require("../../assets/icons/curation/next-active.svg")}
              alt="다음"
              width="60px"
              height="44px"
            />
          </Button>
        ) : (
          <Button disabled>
            <img
              src={require("../../assets/icons/curation/next-disabled.svg")}
              alt=""
            />
          </Button>
        )
      ) : (type === "1" &&
          currentStep === 1 &&
          answer?.under &&
          answer?.upper) ||
        (type === "2" && currentStep === 1 && answer?.cup && answer?.band) ||
        (currentStep !== 1 &&
          (Array.isArray(answer) ? answer.length > 0 : answer !== "")) ? (
        <Button onClick={handleNextButtonClick}>
          <img
            src={require("../../assets/icons/curation/next-active.svg")}
            alt="다음"
            width="60px"
            height="44px"
          />
        </Button>
      ) : (
        <Button disabled>
          <img
            src={require("../../assets/icons/curation/next-disabled.svg")}
            alt=""
          />
        </Button>
      )}
    </BottomNavigator>
  );
}
