import { React } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { setLanguage } from '../states/LanguageSlice'

const languages = ['it', 'en', 'FR']

const LanguageSelector = () => {
  const currentLanguage = useSelector((state) => {
    console.log(state)
    return state.language.language
  })
  const dispatch = useDispatch()

  return languages.map((lang, idx) => {
    return (
      <Button
        id={`lang-${idx}`}
        variant={[currentLanguage === lang ? 'primary' : 'success']}
        onClick={() => dispatch(setLanguage(lang))}
      >
        {' '}
        {lang}{' '}
      </Button>
    )
  })
}

export default LanguageSelector
