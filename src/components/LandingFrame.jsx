import { Link } from "react-router-dom"
import LandingFrameStyles from "../assets/styles/LandingFrameStyles"

const LandingFrame = (props) => {
  const {title, linkText} = props

  return (
    <LandingFrameStyles>
      <h3>{title}</h3>
      <Link to='./movies'>explore {linkText}</Link>
    </LandingFrameStyles>
  )
}

export default LandingFrame