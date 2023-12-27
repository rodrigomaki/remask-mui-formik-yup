import { TextField } from "@mui/material";
import { mask as masker, unMask } from "remask";

type Props = {
  mask: string[];
  [x: string]: any;
};

const InputMask = ({ mask, ...props }: Props) => {
  const getMaskedValue = (unmaskedValue: string) => {
    return masker(unmaskedValue, mask);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const unmaskedValue = unMask(event.target.value);
    const maskedValue = getMaskedValue(unmaskedValue);
    const syntheticEvent = {
      target: {
        value: unmaskedValue,
        name: props.name,
      },
    };
    // usa onChange do formik com valor sem máscara (para salvar)
    props.onChange(syntheticEvent);
    // agora usa de novo o onChange, mas com a máscara pra mostrar no input
    props.onChange({
      target: {
        value: maskedValue,
        name: props.name,
      },
    });
  };

  const handleValue = getMaskedValue(props.value);

  return (
    <>
      <TextField {...props} onChange={handleChange} value={handleValue} />
    </>
  );
};

export default InputMask;
