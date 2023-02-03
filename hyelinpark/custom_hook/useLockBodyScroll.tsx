import { useLayoutEffect } from "react";
// Hook
export function useLockBodyScroll(): void {
  // useLaoutEffect Hook 은 콜백 반환 유형은 "() = > void" 유형

  useLayoutEffect((): (() => void) => {
    // original body overflow
    const originalStyle: string = window.getComputedStyle(
      document.body
    ).overflow;

    // mount 될 때 스크롤 방지
    document.body.style.overflow = "hidden";
    // 컴포넌트가 언마운트 될 때 스크롤을 다시 사용
    return () => (document.body.style.overflow = originalStyle);
  }, []);
  // dependcy array 를 빈 배열로 두고, 마운트 or 언마운트 될 때에만 실행되게 한다.
  // modal 컴포넌트가 보여질 때 그리고 사라질 때만
}
