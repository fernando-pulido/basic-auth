import * as Yup from 'yup'

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'minimo de digitos 2!')
    .max(10, 'maximo de digitos 5!')
    .required('Ingrese el nombre'),
  lastName: Yup.string()
    .min(4, 'minimo de digitos 4!')
    .max(10, 'maximio digitos 5!')
    .required('ingrese el apellido'),
  email: Yup.string().email('email no valido').required('Ingrese el email'),
  password: Yup.string()
    .min(3, 'minimo de digitos 3!')
    .max(4, 'maximo de digitos 4!')
    .required('Ingrese una password'),
})
