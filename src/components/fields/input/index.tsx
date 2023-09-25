import { Input } from "antd";
import { inputInterface } from "ts/interfaces";

const index = (props: inputInterface) => {
  return (
    <>
      <Input {...props} />
    </>
  );
};

export default index;
