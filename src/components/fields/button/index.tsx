import { Button } from "antd";
import { memo, FC } from "react";
import { buttonInterface } from "../../../ts/interfaces";

const index: FC<buttonInterface> = memo(
  ({
    id,
    type,
    disabled,
    children,
    className,
    onClick = () => {},
  }): JSX.Element => {
    return (
      <>
        <Button
          type={type}
          id={`${id}`}
          onClick={onClick}
          disabled={disabled}
          className={className}
        >
          {children}
        </Button>
      </>
    );
  }
);

export default index;
