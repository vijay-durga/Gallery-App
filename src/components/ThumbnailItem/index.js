import './index.css'

const ThumbnailItem = props => {
  const {eachImage, onSelectingImage, isActive} = props
  const {thumbnailUrl, id, thumbnailAltText} = eachImage
  const thumbnailClassName = isActive ? `active` : `btn-thumb`

  const onClickingImageThumbnail = () => onSelectingImage(id)

  return (
    <li className="thumbnail.li">
      <button type="button" className="btn">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
          onClick={onClickingImageThumbnail}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
