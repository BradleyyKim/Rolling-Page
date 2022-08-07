import * as React from "react";
import TextareaEl from "../../elements/textarea/Textarea";

interface ContentProps {
  setMainTxt?: React.Dispatch<React.SetStateAction<string>>;
  mainTxt: string;
}
const ContentInput: React.FC<ContentProps> = ({ setMainTxt, mainTxt }) => {
  const onInputFunc = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = event.target;
    if (setMainTxt) {
      setMainTxt(input.value);
    }
    return input.value;
  };

  return (
    <TextareaEl
      value={mainTxt}
      onChange={onInputFunc}
      isInput={false}
      height="165px"
      placeholder="내용을 입력해주세요 !"
      id="contents"
      fontSize="14px"
      fontWeight="400"
      border="none"
      bgColor="transparent"
      required
    />
  );
};

export default ContentInput;
