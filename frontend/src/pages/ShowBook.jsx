import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'


const ShowBook = () => {
    const [books , setBooks] = useState ({});
    const [loading , setLoading] = useState (false);
    const {id} = useParams();

    useEffect(() => {
        
        setLoading(true);

        axios.get(`http://localhost:3000/books/${id}`)
        .then((res) => {
            setBooks(res.data.data || res.data || {});
            setLoading(false);
        })
        .catch((err) =>{
            console.log(err.message);
            setBooks({});
            setLoading(false);
        })
    },[])


  return (
    <div className='p-4'>
        <BackButton />
        <h1 className='text-3x1 my-4'>Book</h1>
        
            { loading ? <Spinner /> : (
                <div className='flex flex-col border-2 border-sky-400 rounded-x1 w-fit p-4'>
                   <div className='my-4'>
                       <span className='text-x1 mr-4 text-gray-500'>Id</span>
                       <span>{books._id}</span>
                   </div>
                    <div className='my-4'>
                       <span className='text-x1 mr-4 text-gray-500'>Title</span>
                       <span>{books.title}</span>
                   </div>
                    <div className='my-4'>
                       <span className='text-x1 mr-4 text-gray-500'>Author</span>
                       <span>{books.author}</span>
                   </div>
                    <div className='my-4'>
                       <span className='text-x1 mr-4 text-gray-500'>PublishYear</span>
                       <span>{books.publishYear}</span>
                   </div>
                    <div className='my-4'>
                       <span className='text-x1 mr-4 text-gray-500'> Create time</span>
                       <span>{new Date(books.createdAt).toString()}</span>
                   </div>
                   <div className='my-4'>
                       <span className='text-x1 mr-4 text-gray-500'>Updated time</span>
                       <span>{new Date(books.UpdatedAt).toString()}</span>
                   </div>
                </div>
            )}
        
    </div>
  )
}

export default ShowBook