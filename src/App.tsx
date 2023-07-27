import { useState } from "react";
import { Button, Input } from "./components/fields";

const App = (): JSX.Element => {
  const [value, setValue] = useState<string>("");

  return (
    <>
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        type="link"
        onClick={() => console.log(value)}
        disabled={!value && true}
      >
        Send
      </Button>
    </>
  );
};

export default App;
