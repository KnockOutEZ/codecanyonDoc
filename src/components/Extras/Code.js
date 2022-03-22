import { CopyBlock, dracula } from "react-code-blocks";

const Code = ({
  text,
  language,
  showLineNumbers,
  startingLineNumber,
  theme,
}) => {
  return (
    <CopyBlock
      text={text}
      language={language}
      showLineNumbers={showLineNumbers}
      startingLineNumber={startingLineNumber}
      theme={dracula}
      wrapLines
    />
  );
};

export default Code;


// Usage
// import Code from "./Extras/Code";
{/* <Code
        text={"My code snippet goes here \n qweqwe"}
        language={"js"}
        showLineNumbers={false}
        startingLineNumber={1}
      ></Code> */}