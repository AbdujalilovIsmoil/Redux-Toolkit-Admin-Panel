import { Input } from "antd";
import { memo, FC } from "react";
import { inputInterface } from "../../../ts/interfaces";

const index: FC<inputInterface> = memo(
  ({
    id,
    type,
    name,
    value,
    disabled,
    maxLength,
    className,
    minLength,
    placeholder,
    onBlur = () => {},
    onChange = () => {},
  }): JSX.Element => {
    return (
      <>
        <Input
          type={type}
          name={name}
          id={`${id}`}
          value={value}
          onBlur={onBlur}
          disabled={disabled}
          onChange={onChange}
          className={className}
          maxLength={maxLength}
          minLength={minLength}
          placeholder={placeholder}
        />
      </>
    );
  }
);

export default index;
