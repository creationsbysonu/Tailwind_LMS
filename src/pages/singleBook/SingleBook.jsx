import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SingleBook = () => {
  const {id} =useParams()
  const [book,setBook]=useState({})
  console.log(id)
  const fetchBook = async ()=>{
    const response = await axios.get(`http://localhost:3000/book/${id}`)
    if (response.status===200){
      setBook(response.data.data)
    }
  }

  useEffect(()=>{
    fetchBook()
  },[])
  console.log(book)


  return (
    <>
          <Navbar/>
          <div class='flex flex-wrap justify-normal'>
            <div class="max-w-sm bg-violet-100 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 mb-2 mt-2 mr-8 hover:shadow-black transition duration-500 ">
            <a href="#">
                <img class="rounded-t-lg w-50 h-50" src={"https://static.vecteezy.com/system/resources/previews/006/115/725/non_2x/black-and-white-open-book-logo-illustration-on-white-background-free-vector.jpg"} alt="" />
            </a>
              <div class="p-5">
                  <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.bookName}</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.bookPrice}</p>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.isbnNumber}</p>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.authorName}</p>
                  <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Read more</button>    
                  
              </div>
          </div>
        </div>

    </>

    
  )
}

export default SingleBook