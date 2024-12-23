import React from 'react'

const card = ({book}) => {
        console.log(book)
  return (
    <>
        

<div class="max-w-sm bg-violet-100 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 mb-2 mt-2 mr-8 hover:shadow-black transition duration-500">
    <a href="#">
        <img class="rounded-t-lg" src="https://media.istockphoto.com/id/495477978/photo/open-book.jpg?s=612x612&w=0&k=20&c=vwJ6__M7CVPdjkQFUv9j2pr7QJiQ9bWW_5jXjR9TcjY=" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.bookName} </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">By-{book.authorName}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

    </>
  )
}

export default card