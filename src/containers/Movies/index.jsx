import React, { Component, createRef } from 'react'
import { Col,  Row } from 'react-bootstrap';
import Pagination from '../Pagination';
import fakeGenres from '../../db/fakeGenres';
import moviesDb from '../../db/fakeMovies';
import Index from '../Genres';
import paginate from '../../components/paginate';
import Movie from './Movie';


let updated = [];

export default class Movie_list extends Component {
   constructor(props){
       super(props);
       this.state = {
        movies: [],
        genres: [],
        pageSize: 3,
        genre: 'Action',
        currentPage: 1,

    }
    this.btnRef = createRef();

    this.deleteMovie = this.deleteMovie.bind(this)
   }

    // bu demak qachonki birinchi marta shu component ishga tushganda yoki dom shuni o'qiganda


    componentDidMount(){
        this.setState({movies: moviesDb, genres: fakeGenres})
    }

    componentWillUnmount() {
        // clearInterval(this.timerID)
    }

    likeHandler = (item) => {
        const movies = [...this.state.movies]
        const index = movies.indexOf(item)
        movies[index] = { ...movies[index], like: !movies[index].like }
        this.setState({ movies });
        console.log(item.id)
    };


    deleteMovie (id){
        const data = this.state.movies.filter(i => i.id !== id);
        this.setState({movies: data})
    }


    clickHandler = (id) => {
        const result = this.state.movies.filter(item => item.id !== id)
        console.log(result)
        this.setState({ movies: result });
    };


    formhandler = e => {
        e.preventDefault();

    }

    inputHanler = e => {
        const {value, name} = e.target;
        console.log(value, name);
        this.setState({input: {name:value}})

    }

    onTakeCurrentPage = (currentPage) => {
        this.setState({currentPage})
    }

    genreHandler = genre => {
        const movies  = moviesDb
        const res = movies.filter(m => m.genre === genre)
        res.length? this.setState({genre, movies: res, currentPage: 1}) : this.setState({genre, movies: moviesDb, currentPage: 1})
    }



    render() {
        const {genres, movies, pageSize, currentPage, genre} = this.state;
        updated = paginate(movies,currentPage, pageSize)
        const count = movies.length
        return (<div>
            < h4 onClick={() => console.log(this.btnRef.current.focus())} > Showing {movies.length} movies in the database.</h4 >
            <input ref={this.btnRef} name="name"/>
            {movies.length === 0 ? <h1>No movies</h1> : 
            <>
                <Row >
                    <Col className="col-3">
                        <Index genre={genre} onGenreChange={this.genreHandler} data={genres} />
                    </Col>
                    <Col className="col-9">
                        <table>
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rate</th>
                            </tr>
                            </thead>
                            <tbody>
                                {updated.map((item, index) => (
                                    <Movie key={index} item={item} likeHandler={this.likeHandler} deleteHandler={this.deleteMovie} />
                                ))}
                            </tbody>
                        </table>
                        <Pagination count={count} pageSize={pageSize} currentPage={currentPage} onTakeCurrentPage={this.onTakeCurrentPage} />
                    </Col>
                </Row>

            </>}
            
            </div>
        )
    }
}