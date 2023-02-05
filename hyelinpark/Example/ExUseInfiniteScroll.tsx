import React from "react";
import { useInfiniteScroll } from "../custom_hook/useInfiniteScroll";

export const CardList: FC<{ data: Docs[]; fetchMore: () => void }> = ({
  data,
  fetchMore,
}) => {
  const { lastItemRef } = useInfiniteScroll(fetchMore);

  return (
    <StyledCardList>
      {data?.map((book, index) => {
        if (index === data.length - 1) {
          return (
            <div ref={lastItemRef} key={index}>
              <CardItem book={book} />
            </div>
          );
        }
        return <CardItem book={book} key={index} />;
      })}
    </StyledCardList>
  );
};
