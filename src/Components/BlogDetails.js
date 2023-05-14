import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function BlogDetails() {

    let { id } = useParams();

    let navigate = useNavigate();

    let [blogs, setBlogs] = useState("");

    let [isPending, setIsPending] = useState(true);

    let [error, setError] = useState("");

    let getData = async (resource) => {

        let response = await fetch(resource);

        let data = response.json();

        return data;

    };

    getData("http://localhost:8000/products/" + id)

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


    let handleDelete = () => {

        fetch("http://localhost:8000/products/" + blogs.id, {

            method: "DELETE"

        })

            .then(() => {

                navigate("/");

            });

    };

    return (
        <>
            {isPending && <h1>Loading...</h1>}
            {error && <h1>Data Could Not Be Loaded Due To Some Reason</h1>}
            {blogs && (
                <div key={blogs.id} className="card mb-4 mx-auto" style={{ maxWidth: "500px" }}>
                    <img src={blogs.thumbnail} className="card-img-top" alt={blogs.thumbnail} />
                    <div className="card-body">
                        <h5 className="card-title">{blogs.title}</h5>
                        <p className="card-text">{blogs.description}</p>
                        <div className='text-center'>
                            <button onClick={handleDelete} className="btn btn-danger px-5">Delete Blog</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
