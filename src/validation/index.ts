import * as yup from "yup";

const cpfSchema = yup.object({
  cpf: yup.string().required("CPF é obrigatório"),
});

export { cpfSchema };
