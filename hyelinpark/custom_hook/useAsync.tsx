import { useReducer, useEffect, useCallback } from "react";

type ActionType = {
  type?: any;
  data?: any;
  error?: any;
};

type Props = [any, () => void];

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

export function useAsync(callback: any, deps = []): Props {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: false,
  });

  const fetchData = useCallback(async () => {
    dispatch({ type: "LOADING" });
    try {
      const data = await callback();
      dispatch({ type: "SUCCESS", data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  }, [callback]);

  // 📝 React Hook useEffect has a missing dependency
  // // eslint-disable-next-line react-hooks/exhaustive-deps 를 삽입하여 에러 해결

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [state, fetchData];
}
