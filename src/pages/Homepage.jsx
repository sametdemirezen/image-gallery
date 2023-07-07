import Picture from "../components/Picture";
import data from "../helper/data"
const Homepage = () => {
    // console.log(data);
    // const [photografer, src] = data
    // console.log(photografer,src);
  return (
    <div className="pictures">
        {data.map( (item) => (
        <Picture photo={item.photographer} img={item.src}/>
        // console.log(item);
    ))}
    </div>
  )
}
export default Homepage