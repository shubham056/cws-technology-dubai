const qs = require('qs');
import API_BASE_URL from './apiUrl';
//const API_BASE_URL = 'http://localhost:1337/api/';

export async function getPosts(page) {
  // const query = qs.stringify({
  //     page: page,
  //     limit: 9,
  //   }, {
  //   encodeValuesOnly: true,
  // });
  const postsRes = await fetch(API_BASE_URL + `blogs?page=${page}&fields=id,title,image,content,slug,blog_categories.*.*.*,author.*.*.*&limit=9&meta=*`);
  const posts = await postsRes.json();
  return posts;
}

export async function getService(slug) {
  const serviceRes = await fetch(API_BASE_URL + `services?filter[slug][_eq]=${slug}`);
  const service = await serviceRes.json();
  return service;
}

export async function getPostss(slug) {
let url = API_BASE_URL + `blogs?filter[slug][_eq]=${slug}`
  const postsRes = await fetch(API_BASE_URL + `blogs?filter[slug][_eq]=${slug}`);
  const posts = await postsRes.json();
  return posts;
  
}

export async function getPopularBlogPost(pageLimit) {
  const postsRes = await fetch(API_BASE_URL + `blogs?fields=id,title,image,content,slug,blog_categories.*.*.*,author.*.*.*&page=1&limit=${pageLimit}&meta=*`);
  const posts = await postsRes.json();
  return posts;
}

export async function getIntroVideo() {
  const IntroVideoRes = await fetch(API_BASE_URL + 'intro_video');
  const introVideo = await IntroVideoRes.json();
  return introVideo;
}

export async function getContactUsInfo() {
  const ContactUsInfoRes = await fetch(API_BASE_URL + 'contact_us_info');
  const contactUsInfo = await ContactUsInfoRes.json();
  return contactUsInfo;
}

export async function getParallaxSectionInfo() {
  const ParallaxSectionRes = await fetch(API_BASE_URL + 'parallax_section');
  const parallaxSection = await ParallaxSectionRes.json();
  return parallaxSection;
}

export async function getTeamMembers(getAlll) {
  const apiEndPoint = (getAlll) ? 'team_members?limit=4' : 'team_members'
  const TeamMembersRes = await fetch(API_BASE_URL + apiEndPoint);
  const temaMembers = await TeamMembersRes.json();
  return temaMembers;
}

export async function getfeatures() {
  const featuresRes = await fetch(API_BASE_URL + 'features');
  const features = await featuresRes.json();
  return features;
}

export async function getOurPrivileges() {
  const OurPrivilegesRes = await fetch(API_BASE_URL + 'our_privileges');
  const privileges = await OurPrivilegesRes.json();
  return privileges;
}

export async function getTestimonial() {
  const TestimonialRes = await fetch(API_BASE_URL + 'testimonials');
  const testimonials = await TestimonialRes.json();
  return testimonials;
}

export async function getPortfolio() {
  const PortfoliosRes = await fetch(API_BASE_URL + 'portfolios');
  const portfolios = await PortfoliosRes.json();
  return portfolios;
}

export async function getOurProcess() {
  const OurProcessRes = await fetch(API_BASE_URL + 'our_process');
  const ourProcess = await OurProcessRes.json();
  return ourProcess;
}

export async function getOurCareers() {
  const OurCareersRe = await fetch(API_BASE_URL + 'careers');
  const ourCareers = await OurCareersRe.json();
  return ourCareers;
}

export async function getApplyingFor() {
  const ApplyingForRes = await fetch(API_BASE_URL + 'careers?fields[]=applying_for');
  const applyingFor = await ApplyingForRes.json();
  return applyingFor;
}

export async function getAboutYourself() {
  const AboutYourselfRes = await fetch(API_BASE_URL + 'about_yourself');
  const aboutYourself = await AboutYourselfRes.json();
  return aboutYourself;
}

export async function getBannerData() {
  const BannerDataRes = await fetch(API_BASE_URL + 'home_banner_dubai');
  const bannerData = await BannerDataRes.json();
  return bannerData;
}

export async function getOurClients() {
  const OurClientsRes = await fetch(API_BASE_URL + 'our_clients');
  const ourClients = await OurClientsRes.json();
  return ourClients;
}

export async function getIndustries() {
  const IndustriesRes = await fetch(API_BASE_URL + 'industries?populate=*');
  const industries = await IndustriesRes.json();
  return industries;
}

export async function getTechnologies() {
  const TechnologiesRes = await fetch(API_BASE_URL + 'technologies?populate=*');
  const technologies = await TechnologiesRes.json();
  return technologies;
}

export async function getServices() {
  const ServicesRes = await fetch(API_BASE_URL + `services?pagination[page]=1&pagination[pageSize]=4`);
  const services = await ServicesRes.json();
  return services;
}

export async function getBlogCategories() {
  const BlogCategoriesRes = await fetch(API_BASE_URL + `blog_categories?fields=id,name,slug,status&sort=slug`);
  const blogCategories = await BlogCategoriesRes.json();
  return blogCategories;
}

export async function getBlogCategoriesBySlug(page,slug) {
  // const query = qs.stringify({
  //   pagination: {
  //     page: page,
  //     pageSize: 9,
  //   },
  // }, {
  //   encodeValuesOnly: true,
  // });
  
  const BlogCategoriesBySlugRes = await fetch(API_BASE_URL + `blogs?page=${page}&limit=9&fields=id,title,image,content,slug,blog_categories.*.*.*,author.*.*.*&filter[blog_categories][blog_categories_id][slug][_eq]=${slug}&meta=*`);
  const blogCategoriesBySlug = await BlogCategoriesBySlugRes.json();
  return blogCategoriesBySlug;
}

export async function getAllServices(page) {
  const query = qs.stringify({
    pagination: {
      page: page,
      pageSize: 6,
    },
  }, {
    encodeValuesOnly: true,
  });
  const ServicesRes = await fetch(API_BASE_URL + `services?${query}&populate=*`);
  const services = await ServicesRes.json();
  return services;
}

export async function getAllCommonServices(page) {
  const query = qs.stringify({
    pagination: {
      page: page,
      pageSize: 6,
    },
  }, {
    encodeValuesOnly: true,
  });
  //const ServicesRes = await fetch(API_BASE_URL + `common_services?${query}`);
  const ServicesRes = await fetch(API_BASE_URL + `common_services`);
  const services = await ServicesRes.json();
  return services;
}

export async function getPost(slug) {
  const post = await getPostss(slug);
  // const postArray = posts.data.filter((post) => post.attributes.slug == slug);
  // const post = postArray.length > 0 ? postArray[0] : null;
  return post;
}

export async function getSlugs(type) {
  console.log('type--', type)
  let elements = [];
  switch (type) {
    case 'posts':
      elements = await getPosts();
      break;
    case 'events':
      elements = await getEvents();
      break;
  }
  const elementsIds = elements.data.map((element) => {
    return {
      params: {
        slug: element.attributes.slug.toString(),
      },
    };
  });
  return elementsIds;
}

