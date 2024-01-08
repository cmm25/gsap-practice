import "./featured.css";
import photos from "../data";
export default function Feature(){
    const[firstUrl, secondUrl]= photos;
    return(
        <section className="featured-section"  data-scroll-section>
            <div className="row-layout" >
                <h6>green</h6>
                <img src={firstUrl} alt="" data-scroll/>
            </div>
            <div className="column-layout">
                <h6>lily</h6>
                <img src={secondUrl} alt="" data-scroll/>
            </div>
        </section>
    )
}