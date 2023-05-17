import { ExternalLink } from '../../../../components/ExternalLink'
import { PostHeaderContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendarDay,
  faComment,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export function PostHeader() {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  return (
    <PostHeaderContainer>
      <header>
        <ExternalLink
          as="button"
          onClick={goBack}
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          text="voltar"
          variant="iconLeft"
        />
        <ExternalLink text="ver no github" href="#" target="_blank" />
      </header>

      <h1>JavaScript data types and data structures</h1>

      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          liroujohn
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarDay} />
          Há 1 dia
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />
          10 comentários
        </li>
      </ul>
    </PostHeaderContainer>
  )
}
