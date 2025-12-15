import React , { useState , useEffect, use } from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate , useParams } from 'react-router-dom';

const DeleteBook = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams(); 

  useEffect(() => {
    setLoading(true);
    axios.delete(`http://localhost:3000/books/${id}`)
    .then(() => {
        setLoading(false);
        navigate('/');
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        console.log(error);
      },[]);
  })
  return (
    <div>DeleteBook</div>
  )
}

export default DeleteBook