import styled from "styled-components"
import { colors } from "../constants/colors"

interface Props {
  id: number
  url: string
  size: number
}

const ProfileImg = ({ id, url, size }: Props) => {
  return (
    <Img
      alt={`profile-${id}`}
      src={url}
      size={size}
    />
  )
}

export default ProfileImg

interface ImgProps {
  size: number
}

const Img = styled.img<ImgProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 16px;
  border: 4px solid ${colors.white};
`;