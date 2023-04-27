import { React } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'

const languages = ['it', 'en', 'FR']

const currentLanguage = useSelector((state) => state.language)
const dispatch = useDispatch()

const LanguageSelector = () => {
  return languages.map((lang, idx) => {
    ;<Button
      id={`lang-${idx}`}
      variant={[currentLanguage == lang ? 'primary' : 'success']}
      onClick={() => dispatch({ type: 'SETLANG', language: lang })}
    >
      {' '}
      {lang}{' '}
    </Button>
  })
}

export default LanguageSelector
