import { Button } from "@mui/material";
import { useFormik } from "formik";
import InputMask from "./components/InputMask";
import { cpfSchema } from "./validation";
import "./App.css";

function App() {
  const formik = useFormik({
    initialValues: {
      cpf: "",
    },
    validationSchema: cpfSchema,
    onSubmit: (values) => {
      console.log("values :>> ", values);
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <InputMask
          mask={["999.999.999-99"]}
          size="small"
          color="primary"
          error={!!formik.errors.cpf}
          helperText={formik.errors.cpf}
          {...formik.getFieldProps("cpf")}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </>
  );
}

export default App;
