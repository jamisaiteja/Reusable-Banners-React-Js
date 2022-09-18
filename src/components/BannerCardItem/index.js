// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList} = props
  const {header, description, className} = bannerCardsList
  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{header}</h1>
        <p className="para">{description}</p>
        <button className="show-more-btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
