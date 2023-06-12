import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ blog_title, blog_content, blog_added_date, blog_featured_image, blog_slug }) => {
    return (

        <div className="col-md-6">
            <div className="blog-content">
                <Link to={`/blog/${blog_slug}`}>
                    <img src={blog_featured_image} />
                </Link>
                <a href="#">
                    <div className="blog-content-main">
                        <h3>{blog_title}</h3>
                        <p>
                            {blog_content}
                        </p>
                        <span>{blog_added_date}</span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default BlogCard