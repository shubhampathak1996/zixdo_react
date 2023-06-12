import React from 'react'
import BlogCard from '../../components/blog/BlogCard'
import Banner from '../banner/Banner'
import Footer from '../common/Footer'
import Header from '../common/Header'
import { useSelectAllBlog } from "../../shared/hooks/UseBlog"
import { URI } from '../../domain/constant';
import renderHTML from 'react-render-html'
import moment from 'moment'


function Blog() {

    const [blog_data] = useSelectAllBlog();
    const { all_blogs } = blog_data;

    return (
        <div>
            <Banner
                Banner_title={"Blog"}
                Banner_desktop_img={"assets/images/210310-8-170.jpg"}
                Banner_mobile_img={"assets/images/210310-8-170_mobilebanner.jpg"}
                is_asha_page={true}
            />
            <section className="blog ptb-50">
                <div className="container">
                    <div className="row">
                        {
                            all_blogs && (
                                all_blogs.map((item) => {
                                    return (
                                        <BlogCard
                                            blog_featured_image={`${URI}${item.image}`} blog_title={item.title} blog_content={renderHTML(item.description.substring(0, 260))} blog_added_date={moment(item.createdAt).format("Do MMM, YYYY")} blog_slug={item.slug}
                                        />
                                    )
                                })
                            )
                        }
                    </div>
                    {
                        //     <div className="row main-pagi">
                        //     <div className="col-md-12">
                        //         <nav aria-label="Page navigation example">
                        //             <ul className="pagination justify-content-center">
                        //                 <li className="page-item disabled">
                        //                     <a className="page-link" href="#" tabIndex={-1}>&lt;</a>
                        //                 </li>
                        //                 <li className="page-item"><a className="page-link" href="#">1</a></li>
                        //                 <li className="page-item"><a className="page-link" href="#">2</a></li>
                        //                 <li className="page-item"><a className="page-link" href="#">3</a></li>
                        //                 <li className="page-item">
                        //                     <a className="page-link" href="#">&gt;</a>
                        //                 </li>
                        //             </ul>
                        //         </nav>
                        //     </div>
                        // </div>
                    }
                </div>
            </section>


            <Footer />
        </div>
    )
}

export default Blog