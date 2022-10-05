import Flex from "components/Flex";
import { FC } from "react";

type Notice = {
  lengthState: number;
  lengthConst: number;
};

const NoticeLength: FC<Notice> = ({ lengthState, lengthConst }) => {
  return (
    <Flex justify="end">
      <span
        style={{
          fontSize: "10px",
          color: lengthState > lengthConst ? "red" : "gray",
        }}
      >
        {lengthState}/{lengthConst}
        {lengthState > lengthConst ? "!!!" : ""}
      </span>
    </Flex>
  );
};

export default NoticeLength;
