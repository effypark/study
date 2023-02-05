import { useCallback, useRef } from "react";

export function useInfiniteScroll(fetchMore: () => void) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const lastItemRef = useCallback((node: HTMLDivElement) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // fetch를 하기위한 callback
          fetchMore();
        }
      },
      { rootMargin: "200% 0px" }
    );

    if (node) {
      observerRef.current.observe(node);
    }
  }, []);

  return {
    lastItemRef,
  };
}

// 1.useRef 사용
// IntersectionObserver를 넣어둘 useRef를 생성
// 여기서의 useRef는 매번 새롭게 생성하는 IntersectionObserver를 담아둘 공간으로, 일반적으로 DOM을 참조하기 위한 목적이 아님

// 원하는 element에 lastItemRef를 넣어줌
// CardList 컴포넌트에서 마지막 CardItem에 ref에 lastItemRef를 넣어줌

// 2. lasItemRef 작성하기

// - ref 함수 작성
// <div ref={lastItemRef} key={index}>는 <div ref={(ref) => lastItemRef(ref)} key={index}>와 같습니다. 즉 node element를 받게 됨
// useInfiniteScroll에서 lastItemRef를 작성하게 되면 첫번째 parameter는 node element가 된다

// - 기존 lastItem의 observe 중단
// 기존에 관찰하던 node가 있다면 observerRef.current.disconnect();로 모든관찰을 중단

// - 새로운 IntersectionObserver 생성
// observerRef.current = new IntersectionObserver으로 새로운 IntersectionObserver를 생성합니다. IntersectionObserver의 parameter는 두가지가 있다
// 첫번쨰는 callback function
// 두번째는 옵션 (root, rootMargin, threshold를 지정)

// 📌 총 정리
// CardList를 생성할때 lastItemRef로 마지막 Item을 관찰
// ref를 생성하면서 기존관찰을 모두 disconnect()하고, 내부에 new IntersectionObserver()를 생성합니다. 그리고 node를 관찰(observe(node))

// 관찰하던 node와 root의 교차(intersection)가 발생하면, IntersectionObserver의 callback이 실행
// callback함수에 의해 fetchMore이 실행
