import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";

interface Helpers {
  goToNextStep: () => void;
  goToPrevStep: () => void;
  reset: () => void;
  canGoToNextStep: boolean;
  canGoToPrevStep: boolean;
  setStep: Dispatch<SetStateAction<number>>;
}

type setStepCallbackType = (step: number | ((step: number) => number)) => void;

// Helper 의 용도는 step 을 핸들링 할 수 있도록 도와준다
function useStep(maxStep: number): [number, Helpers] {
  const [currentStep, setCurrentStep] = useState(1);
  // 초기값 = 1;
  // maxStep 에는 multiStep 의 제일 최대값을 넣어주면 됨

  const canGoToNextStep = useMemo(
    () => currentStep + 1 <= maxStep,
    [currentStep, maxStep]
  );

  // 다음 step 으로 넘어갈게 있는지 확인해주는 함수로 boolean 값 리턴

  const canGoToPrevStep = useMemo(() => currentStep - 1 >= 1, [currentStep]);
  // 이전 step 으로 넘어갈게 있는지 확인해주는 함수로 boolean 값 리턴

  const setStep = useCallback<setStepCallbackType>(
    (step) => {
      // 값 (step)이 함수가 되도록 허용해서 useState 와 동일한 api 를 사용
      const newStep = step instanceof Function ? step(currentStep) : step;

      if (newStep >= 1 && newStep <= maxStep) {
        setCurrentStep(newStep);
        return;
      }

      throw new Error("Step not valid");
    },
    [maxStep, currentStep]
  );
  // setState 함수와 비슷한 함수로, 사용할 때는 setStep(4) 이런식으로 사용한다. step 을 업데이트 시켜주는 함수

  const goToNextStep = useCallback(() => {
    if (canGoToNextStep) {
      setCurrentStep((step) => step + 1);
    }
  }, [canGoToNextStep]);

  const goToPrevStep = useCallback(() => {
    if (canGoToPrevStep) {
      setCurrentStep((step) => step - 1);
    }
  }, [canGoToPrevStep]);

  const reset = useCallback(() => {
    setCurrentStep(1);
  }, []);

  return [
    currentStep,
    {
      goToNextStep,
      goToPrevStep,
      canGoToNextStep,
      canGoToPrevStep,
      setStep,
      reset,
    },
  ];
}

export default useStep;
