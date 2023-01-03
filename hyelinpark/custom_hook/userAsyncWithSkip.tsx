import { useReducer, useEffect, useCallback } from "react";

type ActionType = {
  type?: any;
  data?: any;
  error?: any;
};

type Props = [any, () => void];

// 현재는 예시라 any 작성, any 타입 지양할 것

function reducer(state: any, action: ActionType) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export function useAsyncWithSkip(
  callback: any,
  skip = false,
  deps = []
): Props {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: false,
  });
  // 첫번째 인자로는 callback 함수,
  // 두번째 인자로는 initial state 를 넣어주어야 함

  const fetchData = useCallback(async () => {
    dispatch({ type: "LOADING" });
    try {
      const data = await callback();
      dispatch({ type: "SUCCESS", data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  }, [callback]);

  useEffect(() => {
    if (skip) return;
    // skip === true 면 아무런 작업하지 않게 한다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fetchData();
  }, deps);

  return [state, fetchData];
}
