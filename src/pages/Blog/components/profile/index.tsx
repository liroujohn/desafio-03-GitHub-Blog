import { ExternalLink } from '../../../../components/ExternalLink'
import { ProfilDetails, ProfileContainer, ProfilePicture } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { Profiler, useCallback, useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'
import { Spinner } from '../../../../components/Spinner'

const username = import.meta.env.VITE_GITHUB_USERNAME

interface ProfileData {
  login: string
  bio: string
  avatar_url: string
  html_url: string
  name: string
  company?: string
  followers: number
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)
  const [isloading, setIsLoading] = useState({})

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/users/${username}`)

      setProfileData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [profileData])

  useEffect(() => {
    getProfileData()
  }, [])

  return (
    <ProfileContainer>
      {isloading ? (
        <Spinner />
      ) : (
        <>
          <ProfilePicture src={profileData.avatar_url} />
          <ProfilDetails>
            <header>
              <h1>{profileData.name}</h1>
              <ExternalLink text="Github" href="#" />
            </header>

            <p>{profileData.bio}</p>

            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                {profileData.login}
              </li>
              {profileData?.company && (
                <li>
                  <FontAwesomeIcon icon={faBuilding} />
                  {profileData.company}
                </li>
              )}
              <li>
                <FontAwesomeIcon icon={faUserGroup} />
                {profileData.followers} seguidores
              </li>
            </ul>
          </ProfilDetails>
        </>
      )}
    </ProfileContainer>
  )
}
