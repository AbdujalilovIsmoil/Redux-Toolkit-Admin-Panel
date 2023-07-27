import { useState } from "react";
import { Input } from "./components/fields";

const App = (): JSX.Element => {
  const [value, setValue] = useState<string>("");

  return (
    <>
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default App;
