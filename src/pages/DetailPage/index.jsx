import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { imageBasePath } from "../../components/constant";
import axios from "../../api/axios";
import "./DetailPage.css";

const DetailPage = () => {

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData(){
      const response = await axios.get(
        `/movie/${movieId}`
      );
      setMovie(response.data);
    }
    fetchData();
  }, [movieId])

  if(!movie) return null;

  return (
    <section className="detail__container">
      <img className="detail-img"
        src={`${imageBasePath}${movie.backdrop_path}`}
        alt='detail'
      />
      <div className="detail-wrapper">

        <h2>{movie.title} {movie.original_title}</h2>
        <p><b>줄거리:</b> {movie.overview}</p><br/><br/>
        <b>장르:</b> {movie.genres.map((item) => (
          <span key={item.id}>
            {item.name}&nbsp;
          </span>
        ))}
        <br/><br/><span><b>출시:</b> {movie.release_date}</span>
      
      </div>
    </section>
  )
}

export default DetailPage