import {
  StyledMovieItem,
  StyledMovieImage,
  StyledMovieInfo,
  StyledMovieOverview,
  StyledMovieButton,
} from './styles/MovieItem.styled';
import { useEffect } from 'react';
import { IMovieItem } from '../interface/interfaces';

import Aos from 'aos';
import 'aos/dist/aos.css';

const voteFormatter = function (numero: number) {
  if (typeof numero !== 'number') {
    throw new Error('O argumento deve ser uma string contendo um número.');
  }

  const numeroAntesDoPonto = String(numero).split('.')[0];
  return parseInt(numeroAntesDoPonto, 10);
};

function MovieItem(props: IMovieItem) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <StyledMovieItem
      data-identifier={props.id}
      className="get-id"
      data-aos="zoom-in"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
      data-aos-duration="800"
    >
      <StyledMovieImage
        src={props.image ? props.image : '/movie-default.jpg'}
        alt="something"
      />
      <StyledMovieInfo>
        <h3>{props.title}</h3>
        <span className={props.average}> {voteFormatter(props.vote)} </span>
      </StyledMovieInfo>
      <StyledMovieOverview className="movie-overview">
        <StyledMovieButton onClick={e => props.onClick(e)}>
          Details
        </StyledMovieButton>
      </StyledMovieOverview>
    </StyledMovieItem>
  );
}

export default MovieItem;
