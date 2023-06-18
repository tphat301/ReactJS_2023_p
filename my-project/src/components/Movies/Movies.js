import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import useDebounce from '../../Hook/useDebounce'
// https://api.themoviedb.org/3/movie/550?api_key=608636081839260ae02718b59832f2de
// https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=608636081839260ae02718b59832f2de

const StyledMoviesBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 12px;
  max-width: 1200px;
  width: calc(100% - 20px);
  text-align: center;
`

const StyledSearch = styled.input`
  outline: none;
  padding: 12px;
  border-radius: 14px;
  text-indent: 8px;
  border: 1px solid #ccc;
  margin-bottom: 80px;
  margin-left: 50px;
`

const StyledMoviesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 20px);
  margin: 0 -10px;
`

const StyledMoviesItem = styled.div`
  width: calc(100% / 3 - 20px);
  margin: 0 10px 20px 10px;
  .movie-pic {
    width: 300px;
    height: 300px;
    .movie-pic img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  h2 {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
  }
`

const MovieItem = (props) => {
  return (
    <StyledMoviesItem>
      <div className='movie-pic'>
        <img src={props.img} alt={props.alt} />
      </div>
      <h2>{props.title || 'Tiêu đề của phim'}</h2>
    </StyledMoviesItem>
  )
}

const Movies = () => {
  const [dataMovie, setDataMovie] = React.useState([])

  const [query, setQuery] = React.useState('')

  const debounceFn = useDebounce(query, 1000)

  const handleInputSearch = (e) => {
    setQuery(e.target.value)
  }
  React.useEffect(() => {
    const fetchData = async () => {
      const respone = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=95f2419536f533cdaa1dadf83c606027&query='${debounceFn}'`
      )
      return respone.data.production_companies
    }
    fetchData()
      .then((data) => {
        setDataMovie(data)
      })
      .catch((error) => console.log(error))
  }, [debounceFn])

  return (
    <StyledMoviesBox>
      <StyledSearch
        type='text'
        onChange={handleInputSearch}
        name='keyword'
        className='keyword'
        placeholder='Enter you search...'
      />
      <StyledMoviesList>
        {dataMovie.length > 0 &&
          dataMovie.map((item, index) => {
            return (
              <MovieItem
                img={`https://image.tmdb.org/t/p/w500/${item.logo_path}`}
                alt={item.name}
                title={item.name}
                key={item.id}
              ></MovieItem>
            )
          })}
      </StyledMoviesList>
    </StyledMoviesBox>
  )
}

export default Movies
