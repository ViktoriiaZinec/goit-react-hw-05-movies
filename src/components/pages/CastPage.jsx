import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'service/video-servise';
import css from '../css/Styles.module.css';

const CastPage = () => {
  const [actors, setActors] = useState([]);
  const { movie_id: id } = useParams();

  useEffect(() => {
    // console.log('id :>> ', id);
    if (!id) return;
    const getActors = async () => {
      const data = await getCast(id);
      setActors(data.data.cast);
      console.log('data :>> ', data.data);
    };

    getActors();
  }, [id]);

  if (!actors.length) return null;
  return (
    <ul className={css.cast_list}>
      {actors.map(actor => (
        <li className={css.cast_item} key={actor.id}>
          <img
            src={
              actor.profile_path
                ? 'https://image.tmdb.org/t/p/w500' + actor.profile_path
                : 'https://flutter-examples.com/wp-content/uploads/2022/03/image_not_found.png'
            }
            alt={actor.name}
            width="120"
            height="180"
          ></img>

          <p>{actor.name}</p>
        </li>
      ))}
    </ul>
  );
};
export default CastPage;
