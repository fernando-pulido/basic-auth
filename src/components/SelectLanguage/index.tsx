import { ChangeEvent, FC } from 'react'
import { styled } from 'styled-components'
import { useTranslation } from 'react-i18next'

import { Keys } from '../../i18n/resource'

type SelectLanguageProps = {
  className?: string
}

const SelectLanguage: FC<SelectLanguageProps> = ({ className }) => {
  const { i18n, t } = useTranslation()

  const handleChangeLanguage = (e: ChangeEvent<HTMLSelectElement>) =>
    i18n.changeLanguage(e.target.value)

  return (
    <select
      onChange={handleChangeLanguage}
      className={className}
      defaultValue={i18n.language}
    >
      <option value="en">{t(Keys.english)}</option>
      <option value="es">{t(Keys.spanish)}</option>
    </select>
  )
}

export const ChangeLanguage = styled(SelectLanguage)`
  width: 200px;
  height: 50px;
  font-size: 24px;
  border-radius: 5px;
`
