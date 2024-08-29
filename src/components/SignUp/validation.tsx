import * as Yup from 'yup'

export const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'mínimo de dígitos 2!')
    .max(10, 'máximo de dígitos 5!')
    .required('Ingrese el nombre'),
  lastName: Yup.string()
    .min(4, 'mínimo de dígitos 4!')
    .max(10, 'máximo dígitos 5!')
    .required('ingrese el apellido'),
  email: Yup.string().email('email no valido').required('Ingrese el email'),
  password: Yup.string()
    .min(3, 'mínimo de dígitos 3!')
    .max(4, 'máximo de dígitos 4!')
    .required('Ingrese una password'),
})
