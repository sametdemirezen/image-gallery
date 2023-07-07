const Picture = ({photo,img}) => {
  //console.log(photo,img.large);
return (
  <div className="picture">
    <div className="imageContainer">
      <img src={img.large} alt="" />
      </div>
      <div className="info">
      <p>{photo}</p>
      </div>
  </div>
)
}
export default Picture;