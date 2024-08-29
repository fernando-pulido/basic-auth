import { I18nextProvider } from 'react-i18next'
import { MDBContainer } from 'mdb-react-ui-kit'

import i18next from './i18n/config'
import SignUp from './components/SignUp'
import { ChangeLanguage } from './components/SelectLanguage'

import './App.css'

const App = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <MDBContainer>
        <ChangeLanguage />
        <SignUp />
      </MDBContainer>
    </I18nextProvider>
  )
}

export default App
