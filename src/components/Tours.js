import Title from "./Title";
import { tour } from "../data";
import Tour from "./Tour";

const Tours = () => {
    return (
        <section className="section" id="tours">
        <Title title="featured" span="tours" />
  
        <div className="section-center featured-center">
          
          {tour.map((tour) => {
          return (
            <Tour key={tour.id} {...tour} />
          )
          })}
        </div>
      </section>
    )
}

export default Tours
