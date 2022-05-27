const qs = require('qs');
import API_BASE_URL from './apiUrl';
//const API_BASE_URL = 'http://localhost:1337/api/';

export async function getPosts(page) {
  const query = qs.stringify({
    pagination: {
      page: page,
      pageSize: 9,
    },
  }, {
    encodeValuesOnly: true,
  });
  const postsRes = await fetch(API_BASE_URL + `blogs?${query}&populate=*`);
  const posts = await postsRes.json();
  return posts;
}

export async function getService(slug) {
  const serviceRes = await fetch(API_BASE_URL + `services?filters[slug]=${slug}&populate=*`);
  const service = await serviceRes.json();
  return service;
}

export async function getPostss(slug) {
let url = API_BASE_URL + `blogs?populate=*&filters[slug]=${slug}`
  const postsRes = await fetch(API_BASE_URL + `blogs?populate=*&filters[slug]=${slug}`);
  const posts = await postsRes.json();
  return posts;
  
}

export async function getPopularBlogPost(pageLimit) {
  const postsRes = await fetch(API_BASE_URL + `blogs?pagination[page]=1&pagination[pageSize]=${pageLimit}&populate=*`);
  const posts = await postsRes.json();
  return posts;
}

export async function getIntroVideo() {
  const IntroVideoRes = await fetch(API_BASE_URL + 'intro-video?populate=*');
  const introVideo = await IntroVideoRes.json();
  return introVideo;
}

export async function getContactUsInfo() {
  const ContactUsInfoRes = await fetch(API_BASE_URL + 'contact-us-info');
  const contactUsInfo = await ContactUsInfoRes.json();
  return contactUsInfo;
}

export async function getParallaxSectionInfo() {
  const ParallaxSectionRes = await fetch(API_BASE_URL + 'parallax-section?populate=*');
  const parallaxSection = await ParallaxSectionRes.json();
  return parallaxSection;
}

export async function getTeamMembers(getAlll) {
  const apiEndPoint = (getAlll) ? 'team-members?pagination[page]=1&pagination[pageSize]=4&populate=*' : 'team-members?populate=*'
  const TeamMembersRes = await fetch(API_BASE_URL + apiEndPoint);
  const temaMembers = await TeamMembersRes.json();
  return temaMembers;
}

export async function getfeatures() {
  const featuresRes = await fetch(API_BASE_URL + 'features?populate=*');
  const features = await featuresRes.json();
  return features;
}

export async function getOurPrivileges() {
  const OurPrivilegesRes = await fetch(API_BASE_URL + 'our-privileges');
  const privileges = await OurPrivilegesRes.json();
  return privileges;
}

export async function getTestimonial() {
  const TestimonialRes = await fetch(API_BASE_URL + 'testimonials');
  const testimonials = await TestimonialRes.json();
  return testimonials;
}

export async function getPortfolio() {
  const PortfoliosRes = await fetch(API_BASE_URL + 'portfolios?pagination[page]=1&pagination[pageSize]=4&populate=*');
  const portfolios = await PortfoliosRes.json();
  return portfolios;
}

export async function getOurProcess() {
  const OurProcessRes = await fetch(API_BASE_URL + 'our-process?populate=*');
  const ourProcess = await OurProcessRes.json();
  return ourProcess;
}

export async function getOurCareers() {
  const OurCareersRe = await fetch(API_BASE_URL + 'careers?populate=*');
  const ourCareers = await OurCareersRe.json();
  return ourCareers;
}

export async function getApplyingFor() {
  const ApplyingForRes = await fetch(API_BASE_URL + 'careers?fields[0]=applying_for');
  const applyingFor = await ApplyingForRes.json();
  return applyingFor;
}

export async function getAboutYourself() {
  const AboutYourselfRes = await fetch(API_BASE_URL + 'about-yourself');
  const aboutYourself = await AboutYourselfRes.json();
  return aboutYourself;
}

export async function getBannerData() {
  const BannerDataRes = await fetch(API_BASE_URL + 'home-banner?populate=*');
  const bannerData = await BannerDataRes.json();
  return bannerData;
}

export async function getOurClients() {
  const OurClientsRes = await fetch(API_BASE_URL + 'our-clients?populate=*');
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
  const BlogCategoriesRes = await fetch(API_BASE_URL + `blog-categories?&sort[1]=slug`);
  const blogCategories = await BlogCategoriesRes.json();
  return blogCategories;
}

export async function getBlogCategoriesBySlug(page,slug) {
  const query = qs.stringify({
    pagination: {
      page: page,
      pageSize: 9,
    },
  }, {
    encodeValuesOnly: true,
  });
  const BlogCategoriesBySlugRes = await fetch(API_BASE_URL + `blogs?${query}&filters[blog_categories][slug]=${slug}&populate=*`);
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
  const ServicesRes = await fetch(API_BASE_URL + `common-services?${query}&populate=*`);
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

