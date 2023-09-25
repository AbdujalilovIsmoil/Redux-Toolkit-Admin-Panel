import { Button } from "antd";
import { buttonInterface } from "ts/interfaces";

const index = (props: buttonInterface) => {
  return (
    <>
      <Button {...props}>{props.children}</Button>
    </>
  );
};

export default index;
