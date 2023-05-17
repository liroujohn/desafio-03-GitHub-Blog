import { ExternalLink } from '../../../../components/ExternalLink'
import { ProfilDetails, ProfileContainer, ProfilePicture } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/liroujohn.png" />
      <ProfilDetails>
        <header>
          <h1>João Gabriel</h1>
          <ExternalLink text="Github" href="#" />
        </header>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            liroujohn
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            TitaniumFix
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            12 seguidores
          </li>
        </ul>
      </ProfilDetails>
    </ProfileContainer>
  )
}
