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

  // 이 부분은 좀 더 공부해야함...
  // React Hook useEffect has a missing dependency
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [state, fetchData];
}
