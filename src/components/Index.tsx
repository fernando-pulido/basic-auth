import { useFormik } from 'formik'
import { MDBInput, MDBCol, MDBRow, MDBBtn } from 'mdb-react-ui-kit'
import { SignupSchema } from './validation'
import { SingUpForm } from './types'

export default function SignUp() {
  const onSubmit = (values: SingUpForm) => {
    console.log(values)
  }

  const { handleSubmit, handleChange } = useFormik<SingUpForm>({
    initialValues: {} as SingUpForm,
    validationSchema: SignupSchema,
    onSubmit,
  })

  return (
    <form onSubmit={handleSubmit}>
      <MDBRow className="mb-4">
        <MDBCol>
          <MDBInput
            id="firstName"
            label="First name"
            name="firstName"
            onChange={handleChange}
          />
        </MDBCol>

        <MDBCol>
          <MDBInput
            id="lastName"
            label="Last name"
            name="lastName"
            onChange={handleChange}
          />
        </MDBCol>
      </MDBRow>

      <MDBInput
        className="mb-4"
        type="email"
        id="email"
        label="Email address"
        name="email"
        onChange={handleChange}
      />

      <MDBInput
        className="mb-4"
        type="password"
        id="password"
        label="Password"
        name="password"
        onChange={handleChange}
      />

      <MDBBtn type="submit" className="mb-4" block>
        Sign in
      </MDBBtn>
    </form>
  )
}
