import React from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import BlogSidebar from '../../components/Blog/BlogSidebar';
import {
    getPost,
    getSlugs,
    getContactUsInfo,
    getPopularBlogPost,
    getBlogCategories

} from '../../utils/strapi';
import moment from 'moment-timezone';
import ErrorPage from 'next/error';
import Moment from "moment-timezone";
import Image from 'next/image';
import assetsURL from '../../utils/assetsURL';


const BlogDetails = ({ post, contactUsInfo, popularPosts, blogCategories }) => {
    // console.log(popularPosts)
    // return false

    if (!post) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <>
            <Navbar />

            {post && <PageBanner
                pageTitle={post.data[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={post.data[0].title}
            />}

            <div className="blog-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className='blog-details-desc'>
                                <div className="article-image">
                                    <img
                                        src={(post.data[0].image != null) ? `${assetsURL}${post.data[0].image}` : "/images/blog/blog-large-1.jpg"}
                                        alt={(post.data[0].title != null) ? post.data[0].title : "blog-image"}
                                        width="100%" objectFit="fill"
                                    />

                                </div>
                                <div className="article-content">
                                    <ul className="entry-meta">
                                        <li>
                                            <i className="ri-user-line"></i>
                                            <a href="/blog">cwsadmin</a>
                                        </li>
                                        <li>
                                            <i className="ri-time-line"></i>
                                            {Moment(post.data[0].date_created).format('LL')}
                                        </li>
                                        {/* <li>
                                            <i className="ri-message-2-line"></i>
                                            (0) Comment
                                        </li> */}
                                    </ul>
                                    <div dangerouslySetInnerHTML={{ __html: post.data[0].content }}>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="pl-15">
                                {popularPosts && blogCategories &&
                                    <BlogSidebar
                                        popularPosts={popularPosts}
                                        blogCategories={blogCategories}
                                    />}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Details Style */}
                <style jsx>{`
                    .blog-details-desc .article-content {
                        margin-top: 30px;
                    }
                    .blog-details-desc .article-content .entry-meta {
                        padding-left: 0;
                        margin-bottom: 20px;
                    }
                    .blog-details-desc .article-content .entry-meta li {
                        list-style-type: none;
                        display: inline-block;
                        color: #79798D;
                        font-size: 14px;
                        font-weight: 400;
                        margin-right: 20px;
                        position: relative;
                        padding-left: 20px;
                    }
                    .blog-details-desc .article-content .entry-meta li:last-child {
                        margin-right: 0;
                    }
                    .blog-details-desc .article-content .entry-meta li a {
                        color: #79798D;
                    }
                    .blog-details-desc .article-content .entry-meta li i {
                        position: absolute;
                        left: 0;
                        top: 50%;
                        -webkit-transform: translateY(-50%);
                                transform: translateY(-50%);
                        color: #36CC72;
                        font-size: 14px;
                    }
                    .blog-details-desc .article-content p {
                        font-size: 15px;
                    }
                    .blog-details-desc .article-content h3 {
                        font-size: 28px;
                        font-weight: 500;
                        margin-top: 30px;
                        margin-bottom: 25px;
                    }
                    .blog-details-desc .article-content .features-list {
                        padding-left: 15px;
                        margin-top: 25px;
                        margin-bottom: 0;
                    }
                    .blog-details-desc .article-content .features-list li {
                        list-style-type: none;
                        font-size: 15px;
                        color: var(--paragraph-color);
                        position: relative;
                        padding-left: 25px;
                        margin-bottom: 15px;
                        line-height: 1.6;
                    }
                    .blog-details-desc .article-content .features-list li:last-child {
                        margin-bottom: 0;
                    }
                    .blog-details-desc .article-content .features-list li i {
                        font-size: 18px;
                        color: #36CC72;
                        position: absolute;
                        left: 0;
                        top: 4px;
                    }
                    .blog-details-desc .article-content .wp-block-gallery.columns-3 {
                        padding-left: 0;
                        list-style-type: none;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-wrap: wrap;
                            flex-wrap: wrap;
                        margin-right: -10px;
                        margin-left: -10px;
                        margin-bottom: 30px;
                        margin-top: 35px;
                    }
                    .blog-details-desc .article-content .wp-block-gallery.columns-3 li {
                        -webkit-box-flex: 0;
                            -ms-flex: 0 0 33.3333%;
                                flex: 0 0 33.3333%;
                        max-width: 33.3333%;
                        padding-right: 10px;
                        padding-left: 10px;
                    }
                    .blog-details-desc .article-content .wp-block-gallery.columns-3 li figure {
                        margin-bottom: 0;
                    }

                    // article-author
                    .blog-details-desc .article-author {
                        background-color: #F4F8FC;
                        padding: 50px 50px 50px 180px;
                        border-radius: 5px;
                        margin-top: 30px;
                        position: relative;
                    }
                    .blog-details-desc .article-author img {
                        position: absolute;
                        left: 55px;
                        top: 50%;
                        -webkit-transform: translateY(-50%);
                                transform: translateY(-50%);
                        border-radius: 50%;
                    }
                    .blog-details-desc .article-author p {
                        font-size: var(--font-size);
                        margin-bottom: 20px;
                    }
                    .blog-details-desc .article-author span {
                        color: var(--black-color);
                        font-size: 18px;
                        font-weight: 500;
                    }

                    // article-footer
                    .blog-details-desc .article-footer {
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-wrap: wrap;
                            flex-wrap: wrap;
                        margin-top: 30px;
                    }
                    .blog-details-desc .article-footer .article-tags {
                        -webkit-box-flex: 0;
                            -ms-flex: 0 0 50%;
                                flex: 0 0 50%;
                        max-width: 50%;
                        color: var(--optional-color);
                    }
                    .blog-details-desc .article-footer .article-tags a {
                        display: inline-block;
                        background-color: #EAF0FF;
                        color: var(--main-color);
                        padding: 5px 15px;
                        margin-right: 5px;
                        font-size: 14px;
                        border-radius: 5px;
                    }
                    .blog-details-desc .article-footer .article-tags a:last-child {
                        margin-right: 0;
                    }
                    
                    .blog-details-desc .article-footer .article-tags a:hover {
                        background-color: var(--main-color);
                        color: var(--white-color);
                    }
                    .blog-details-desc .article-footer .article-share {
                        -webkit-box-flex: 0;
                            -ms-flex: 0 0 50%;
                                flex: 0 0 50%;
                        max-width: 50%;
                    }
                    .blog-details-desc .article-footer .article-share .social {
                        padding-left: 0;
                        list-style-type: none;
                        text-align: right;
                        margin-bottom: 0;
                    }
                    .blog-details-desc .article-footer .article-share .social li {
                        display: inline-block;
                        margin-left: 8px;
                    }
                    .blog-details-desc .article-footer .article-share .social li span {
                        display: inline-block;
                        font-size: 15px;
                        font-weight: 500;
                        position: relative;
                        top: -1px;
                    }
                    .blog-details-desc .article-footer .article-share .social li a i {
                        display: inline-block;
                        height: 35px;
                        width: 35px;
                        line-height: 35px;
                        background-color: #EAF0FF;
                        color: var(--main-color);
                        border-radius: 50px;
                        text-align: center;
                        font-size: var(--font-size);
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                    }
                    .blog-details-desc .article-footer .article-share .social li a i:hover {
                        background-color: var(--main-color);
                        color: var(--white-color);
                        -webkit-transform: translateY(-5px);
                                transform: translateY(-5px);
                    }

                    // article-tag 
                    .blog-details-desc .article-tag {
                        margin-top: 45px;
                    }
                    .blog-details-desc .article-tag h4 {
                        margin-bottom: 35px;
                        position: relative;
                        padding-bottom: 15px;
                        font-size: 20px;
                    }
                    .blog-details-desc .article-tag h4::before {
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 50px;
                        height: 1px;
                        bottom: -1px;
                        background-color: var(--main-color);
                    }

                    // article-comments
                    .blog-details-desc .article-comments {
                        margin-top: 30px;
                    }
                    .blog-details-desc .article-comments h4 {
                        margin-bottom: 35px;
                        position: relative;
                        padding-bottom: 15px;
                        font-size: 20px;
                    }
                    .blog-details-desc .article-comments h4::before {
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 50px;
                        height: 1px;
                        bottom: -1px;
                        background-color: var(--main-color);
                    }
                    .blog-details-desc .article-comments .comments-list {
                        position: relative;
                        padding-left: 110px;
                        margin-bottom: 45px;
                    }
                    .blog-details-desc .article-comments .comments-list:last-child {
                        margin-bottom: 0;
                    }
                    .blog-details-desc .article-comments .comments-list img {
                        position: absolute;
                        left: 0;
                        top: 0;
                    }
                    .blog-details-desc .article-comments .comments-list h5 {
                        font-size: 20px;
                        margin-bottom: 10px;
                    }
                    .blog-details-desc .article-comments .comments-list span {
                        display: inline-block;
                        margin-bottom: 10px;
                        font-size: 14px;
                        color: var(--paragraph-color);
                    }
                    .blog-details-desc .article-comments .comments-list p {
                        font-size: 15px;
                    }
                    .blog-details-desc .article-comments .comments-list .reply-btn {
                        font-size: 20px;
                        color: var(--black-color);
                        position: absolute;
                        right: 0;
                        top: 0;
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                    }
                    .blog-details-desc .article-comments .comments-list .reply-btn:hover {
                        color: var(--main-color);
                        -webkit-transform: translateY(-5px);
                                transform: translateY(-5px);
                    }

                    // article-leave-comment
                    .blog-details-desc .article-leave-comment {
                        margin-top: 45px;
                    }
                    .blog-details-desc .article-leave-comment h4 {
                        margin-bottom: 35px;
                        position: relative;
                        padding-bottom: 15px;
                        font-size: 20px;
                    }
                    .blog-details-desc .article-leave-comment h4::before {
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 50px;
                        height: 1px;
                        bottom: -1px;
                        background-color: var(--main-color);
                    }
                    .blog-details-desc .article-leave-comment form .form-group {
                        margin-bottom: 20px;
                    }
                    .blog-details-desc .article-leave-comment form .form-group .form-control {
                        height: 60px;
                        color: #79798D;
                        border: 1px solid #F4F8FC;
                        background-color: #F4F8FC;
                        display: block;
                        width: 100%;
                        border-radius: 5px;
                        padding: 15px;
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                        font-size: 15px;
                        font-weight: 400;
                        outline: 0;
                    }
                    .blog-details-desc .article-leave-comment form .form-group .form-control::-webkit-input-placeholder {
                        color: var(--paragraph-color);
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                    }
                    .blog-details-desc .article-leave-comment form .form-group .form-control:-ms-input-placeholder {
                        color: var(--paragraph-color);
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                    }
                    .blog-details-desc .article-leave-comment form .form-group .form-control::-ms-input-placeholder {
                        color: var(--paragraph-color);
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                    }
                    .blog-details-desc .article-leave-comment form .form-group .form-control::placeholder {
                        color: var(--paragraph-color);
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                    }
                    .blog-details-desc .article-leave-comment form .form-group .form-control:focus {
                        -webkit-box-shadow: none;
                                box-shadow: none;
                        background-color: transparent;
                        border: 1px solid var(--main-color);
                    }
                    .blog-details-desc .article-leave-comment form .form-group .form-control:focus::-webkit-input-placeholder {
                        color: transparent;
                    }
                    .blog-details-desc .article-leave-comment form .form-group .form-control:focus:-ms-input-placeholder {
                        color: transparent;
                    }
                    .blog-details-desc .article-leave-comment form .form-group .form-control:focus::-ms-input-placeholder {
                        color: transparent;
                    }
                    .blog-details-desc .article-leave-comment form .form-group .form-control:focus::placeholder {
                        color: transparent;
                    }
                    .blog-details-desc .article-leave-comment form .form-group textarea.form-control {
                        min-height: 135px;
                    }
                    .blog-details-desc .article-leave-comment form .default-btn {
                        margin-top: 5px;
                        -webkit-transform: unset;
                                transform: unset;
                    }

                    // Responsive Style
                    @media only screen and (max-width: 767px) {
                        .blog-details-desc .article-content .entry-meta li {
                            font-size: 12px;
                            margin-right: 5px;
                        }
                        .blog-details-desc .article-content .features-list {
                            padding-left: 0;
                        }
                        .blog-details-desc .article-author {
                            padding: 30px;
                        }
                        .blog-details-desc .article-author img {
                            position: relative;
                            left: 0;
                            top: unset;
                            -webkit-transform: unset;
                                    transform: unset;
                            margin-bottom: 20px;
                        }
                        .blog-details-desc .article-footer .article-tags {
                            -webkit-box-flex: unset;
                                -ms-flex: unset;
                                    flex: unset;
                            max-width: unset;
                        }
                        .blog-details-desc .article-footer .article-share {
                            -webkit-box-flex: unset;
                                -ms-flex: unset;
                                    flex: unset;
                            max-width: unset;
                        }
                        .blog-details-desc .article-review {
                            margin-top: 30px;
                        }
                        .blog-details-desc .article-review .review-list {
                            padding-left: 100px;
                            margin-bottom: 25px;
                        }
                        .blog-details-desc .article-review .review-list .reply-btn {
                            position: relative;
                        }
                        .blog-details-desc .article-comment {
                            margin-top: 30px;
                        }
                        .blog-details-desc .article-comment form .form-group {
                            margin-bottom: 20px;
                        }
                        .blog-details-desc .article-content h3 {
                            font-size: 25px;
                            line-height: 1.4;
                        }
                        .blog-details-desc .article-comments .comments-list {
                            padding-left: 100px;
                        }
                        .blog-details-desc .article-comments .comments-list h5 {
                            font-size: 17px;
                        }
                        .blog-details-desc .article-footer {
                            display: block;
                            text-align: center;
                        }
                        .blog-details-desc .article-footer .article-share .social {
                            text-align: center;
                            margin-top: 25px;
                        }
                    }

                    @media only screen and (min-width : 768px) and (max-width : 991px) {
                        .blog-details-desc .article-leave-comment form .form-group {
                            margin-bottom: 15px;
                        }
                    }

                    @media only screen and (min-width : 992px) and (max-width : 1199px) {
                        .blog-details-desc .article-comment form .form-group {
                            margin-bottom: 15px;
                        }
                    }
                `}</style>
            </div>

            {contactUsInfo && <Footer contactUsInfo={contactUsInfo} />}
        </>
    )
}

export default BlogDetails;

//hey Next, these are the possible slugs
// export async function getStaticPaths() {
//     const paths = await getSlugs("posts");
//     return {
//         paths,
//         //this option below renders in the server (at request time) pages that were not rendered at build time
//         //e.g when a new blogpost is added to the app
//         fallback: true,
//     };
// }

//access the router, get the id, and get the data for that post
export async function getServerSideProps({ params, res }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    try {

        const post = await getPost(params.slug);
        const contactUsInfo = await getContactUsInfo();
        const popularPosts = await getPopularBlogPost(5); // Get Popular Blog Post
        const blogCategories = await getBlogCategories(); // Get all blog categories

        return {
            props: {
                post,
                popularPosts,
                contactUsInfo,
                blogCategories
            }
        };

    } catch (error) {
        res.statusCode = 404
        return {
            props: {
                post: {}
            }
        }
    }

}