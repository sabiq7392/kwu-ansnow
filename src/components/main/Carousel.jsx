import banner from '../../images/banner.png';
import CarouselItem from './partials/_CarouseItem';

export default function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <CarouselItem 
          img={banner} 
          alt="ansnow banner" 
          active="active"
        />
        <CarouselItem 
          img="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Build custom gaming pc"
          caption="Second slide label"
          paragraph="Some representative placeholder content for the second slide."
        />
        <CarouselItem 
          img="https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Build suite office pc"
          caption="Second slide label"
          paragraph="Some representative placeholder content for the second slide."
        />
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}