import { memo } from "react";
import { Input } from "antd";
import { inputInterface } from "../../../ts/interfaces";

const index = memo(
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
  }: inputInterface): JSX.Element => {
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
