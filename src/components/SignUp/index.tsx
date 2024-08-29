import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { MDBInput, MDBCol, MDBRow, MDBBtn } from 'mdb-react-ui-kit'

import { SingUpForm } from './types'
import { SignUpSchema } from './validation'

import { Keys } from '../../i18n/resource'

export default function SignUp() {
  const { t } = useTranslation()
  const onSubmit = (values: SingUpForm) => console.log(values)

  const { handleSubmit, handleChange } = useFormik<SingUpForm>({
    initialValues: {} as SingUpForm,
    validationSchema: SignUpSchema,
    onSubmit,
  })

  return (
    <form onSubmit={handleSubmit}>
      <MDBRow className="mb-4">
        <MDBCol>
          <MDBInput
            id="firstName"
            label={t(Keys.firstName)}
            name="firstName"
            onChange={handleChange}
          />
        </MDBCol>

        <MDBCol>
          <MDBInput
            id="lastName"
            label={t(Keys.lastName)}
            name="lastName"
            onChange={handleChange}
          />
        </MDBCol>
      </MDBRow>

      <MDBInput
        className="mb-4"
        type="email"
        id="email"
        label={t(Keys.email)}
        name="email"
        onChange={handleChange}
      />

      <MDBInput
        className="mb-4"
        type="password"
        id="password"
        label={t(Keys.password)}
        name="password"
        onChange={handleChange}
      />

      <MDBBtn type="submit" className="mb-4" block>
        {t(Keys.signUp)}
      </MDBBtn>
    </form>
  )
}
