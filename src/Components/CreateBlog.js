import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function CreateBlog() {

    let [title, setTitle] = useState("");

    let [description, setDescription] = useState("");

    let navigate = useNavigate();

    let handleSubmit = (e) => {

        e.preventDefault();

        let data = { title, description };

        fetch("http://localhost:8000/products", {

            method: "POST",

            headers: { "Content-Type": "Application/json" },

            body: JSON.stringify(data)

        })

            .then(() => {

                navigate("/");

            })

    }

    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <div>
                            <label>Enter Your Blog Title</label>
                            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" />
                            <label>Enter Your Blog Description</label>
                            <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} className="form-control" />
                        </div>
                        <div className="submit-btn">
                            <button onClick={handleSubmit} className="btn btn-info my-3">Create Blog</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
