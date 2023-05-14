import React, { useEffect, useState } from 'react'
import BlogList from './BlogList';

export default function Home() {

  let [blogs, setBlogs] = useState("");

  let [isPending, setIsPending] = useState(true);

  let [error, setError] = useState("");

  useEffect(() => {

    let getData = async (resource) => {

      let response = await fetch(resource);

      let data = response.json();

      return data;

    };

    getData("http://localhost:8000/products")

      .then((data) => {

        setBlogs(data);

        setIsPending(false);

        setError("");

      })

      .catch((error) => {

        setError(error);

        setIsPending(false);

        setBlogs("");

      });

  }, []);
  
  return (
    <>
      {isPending && <h1>Loading...</h1>}
      {error && <h1>Data Could Not Be Loaded Due To Some Reason</h1>}
      {blogs && <BlogList blogs={blogs}></BlogList>}
    </>
  )
}
