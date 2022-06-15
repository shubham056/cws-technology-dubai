import React, { useState } from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../../components/_App/Footer';
import Blogs from '../../components/Blog/Blogs';
import Router, { withRouter,useRouter  } from 'next/router'
import ReactPaginate from 'react-paginate';
import { getPosts, getContactUsInfo } from '../../utils/strapi';


const BlogPost = ({ posts,totalCount, pageCount, currentPage, perPage, contactUsInfo }) => {
    const router = useRouter();

    // console.log(posts)
    // return false;

 

    const jsxPosts = posts.data.map((post) => {
        const categories = post.blog_categories;
        return <Blogs 
                 blog={post}
                 categories={categories}
                 key={post.id}
                />
    });

    const pagginationHandler = (page) => {
        const currentPath = router.pathname;
        const currentQuery = router.query;
        currentQuery.page = page.selected + 1;

        router.push({
            pathname: currentPath,
            query: currentQuery,
        });

    };

    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Blog Post"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Blog Post"
            />

            <>
                <div className="blog-area pt-100 pb-100">
                    <div className="container">
                        <div className="row justify-content-center">

                            {jsxPosts}

                            <div className="col-lg-12 col-md-12">
                            <ReactPaginate
                                    previousLabel={<i className="ri-arrow-left-line"></i>}
                                    nextLabel={<i className="ri-arrow-right-line"></i>}
                                    breakLabel={'...'}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    activeClassName={'active'}
                                    containerClassName={'pagination justify-content-center'}
                                    pageClassName={'page-item'}
                                    pageLinkClassName={'page-link'}
                                    previousClassName={'page-item'}
                                    previousLinkClassName={'page-link'}
                                    nextClassName={'page-item'}
                                    nextLinkClassName={'page-link'}
                                    breakClassName={'page-item'}
                                    breakLinkClassName={'page-link'}
                    
                                    initialPage={currentPage - 1}
                                    pageCount={pageCount}
                                    onPageChange={pagginationHandler}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Shape Images */}
                    <div className="blog-shape-1">
                        <img src="/images/blog/shape-1.png" alt="image" />
                    </div>
                    <div className="blog-shape-2">
                        <img src="/images/blog/shape-2.png" alt="image" />
                    </div>
                </div>

                {/* Blog Card Style */}
                <style jsx>{`
                    .blog-area {
                        position: relative;
                        z-index: 1;
                        overflow: hidden;
                    }
                   
                    .blog-shape-1 {
                        position: absolute;
                        top: 10%;
                        right: 2%;
                        -webkit-transform: translateY(-10%) translateX(-2%);
                                transform: translateY(-10%) translateX(-2%);
                    }
                    .blog-shape-2 {
                        position: absolute;
                        top: 10%;
                        left: 2%;
                        -webkit-transform: translateY(-10%) translateX(-2%);
                                transform: translateY(-10%) translateX(-2%);
                    }
                   
                    // Responsive Style
                    @media only screen and (max-width: 767px) {
                        
                        .blog-shape-1 {
                            display: none;
                        }
                        .blog-shape-2 {
                            display: none;
                        }
                    }

                    @media only screen and (min-width : 768px) and (max-width : 991px) {
                        
                        .blog-shape-1 {
                            display: none;
                        }
                        .blog-shape-2 {
                            display: none;
                        }
                    }

                 
                `}</style>
            </>

            {contactUsInfo && <Footer contactUsInfo={contactUsInfo} />}
        </>
    )
}

export default BlogPost;

export async function getServerSideProps({ query: {page = 1 }  }) {
   // const page = query.page || 1; //if page empty we request the first page

    const posts = await getPosts(page);
    const contactUsInfo = await getContactUsInfo();
   
    return {
        props: {
            posts,
            totalCount: posts.meta.total_count,
            pageCount: Math.round(posts.meta.total_count/9),
            //currentPage: posts.meta.pagination.page,
            currentPage: 1,
            // perPage: 3,
            contactUsInfo

            
        },
       // revalidate: 10, // In seconds
    };
}