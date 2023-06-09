import { useState } from 'react';
import { getCast } from 'service/video-servise';
const CastPage = actors => {
  return <h1>Cast</h1>;
  // const [actors, setActors] = useState({});

  // const defaultImg =
  //   'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fru%2Fimage-vector%2Fimage-not-found-grayscale-photo-1737334631&psig=AOvVaw1-GJGIxYTff8RxRUivH4YC&ust=1686308950647000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCp-8HEs_8CFQAAAAAdAAAAABAE';

  // return (
  //   <ul>
  //     {actors.map(actor => (
  //       <li key={actor.id}>
  //         <img src={actor.profile_path} alt={actor.name}></img>
  //       </li>
  //     ))}
  //   </ul>
  // );
};
export default CastPage;
