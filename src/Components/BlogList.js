import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export default function BlogList({ blogs }) {
    return (
        <div className='container my-5'>
            {blogs.map((blog) => (
                <div key={blog.id} className="card mb-4 mx-auto" style={{ maxWidth: "500px" }}>
                    <img src={blog.thumbnail} className="card-img-top" alt={blog.thumbnail} />
                    <div className="card-body">
                        <h5 className="card-title">{blog.title}</h5>
                        <p className="card-text">{blog.description}</p>
                        <div className='text-center'>
                            <Link to={`/blogs/${blog.id}`} className="btn btn-primary px-5">Read More</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
