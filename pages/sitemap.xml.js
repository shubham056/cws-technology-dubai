import React from "react";
import * as fs from "fs";
import { getAllBlogPosts, getAllServicesData, getBlogCategories } from '../utils/strapi';

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {

  const BASE_URL = { development: "http://localhost:3000", production: "https://www.cwstechnology.ae"}[process.env.NODE_ENV];
   
  const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "sitemap.xml.js",
        "404.js",
        "index",
        "_app.js",
        "_document.js",
        "api",
        "[service]"
      ].includes(staticPage);
    })
  .map((staticPagePath) => {
    return `${BASE_URL}/${staticPagePath.replace('.js', '')}`;
  });

  //console.log(staticPaths)

  // remove index path
  let staticPathss = staticPaths.filter((item ,index )=> index != 4 )
  //console.log( staticPathss )

   const blogs = await getAllBlogPosts();
   const services = await getAllServicesData();
   const blogCategories = await getBlogCategories();

   const dynamicBlogPaths = blogs.data.map( singleBlog => `${BASE_URL}/blog/${singleBlog.slug}`)
   const dynamicServicesPaths = services.data.map( singleService => `${BASE_URL}/services/${singleService.slug}`)
   //const dynamicBlogCategoriesPaths = blogCategories.data.map( singleBlogCategory => `${BASE_URL}/category/${singleBlogCategory.slug}${BASE_URL}/category/${singleBlogCategory.slug}`)

   const homePath = 'https://www.cwstechnology.ae/'

  const allPaths = [homePath,...staticPathss,...dynamicBlogPaths,...dynamicServicesPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url,index) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>${index == 0 ? "daily" : "monthly"}</changefreq>
              <priority>${index == 0 ? 1.00 : 0.8}</priority>
            </url>
          `;
        })
      .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;