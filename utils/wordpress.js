// /utils/wordpress.js

const BASE_URL = 'http://137.184.38.109/wp-json/wp/v2';
//const BASE_URL = process.env.WORDPRESS_API_URL;

export async function getPosts() {
  const postsRes = await fetch(BASE_URL + '/posts?_embed&page=1&per_page=9');
  const posts = await postsRes.json();
  return posts;
}

export async function getPopularBlogPost() {
  const postsRes = await fetch(BASE_URL + '/posts?_embed&page=1&per_page=3');
  const posts = await postsRes.json();
  return posts;
}

export async function getCommonServices() {
  const servicesRes = await fetch(BASE_URL + '/common_services?_fields=id,date,slug,title,content,acf');
  const services = await servicesRes.json();
  return services;
}

export async function getIntroVideo() {
  const IntroVideoRes = await fetch(BASE_URL + '/common_video?_fields=id,date,slug,title,content,acf');
  const introVideo = await IntroVideoRes.json();
  return introVideo;
}

export async function getTeamMembers() {
  const TeamMembersRes = await fetch(BASE_URL + '/tema_members?_fields=id,date,slug,title,content,acf');
  const temaMembers = await TeamMembersRes.json();
  return temaMembers;
}

export async function getTestimonial() {
  const TestimonialRes = await fetch(BASE_URL + '/common_testimonial?_fields=id,date,slug,title,content,acf');
  const testimonials = await TestimonialRes.json();
  return testimonials;
}

export async function getOurPrivileges() {
  const OurPrivilegesRes = await fetch(BASE_URL + '/our_privilege?_fields=id,date,slug,title,,acf');
  const privileges = await OurPrivilegesRes.json();
  return privileges;
}

export async function getPost(slug) {
  const posts = await getPosts();
  const postArray = posts.filter((post) => post.slug == slug);
  const post = postArray.length > 0 ? postArray[0] : null;
  return post;
}
export async function getEvents() {
  const eventsRes = await fetch(BASE_URL + '/events?_embed');
  const events = await eventsRes.json();
  return events;
}

export async function getEvent(slug) {
  const events = await getEvents();
  const eventArray = events.filter((event) => event.slug == slug);
  const event = eventArray.length > 0 ? eventArray[0] : null;
  return event;
}

export async function getSlugs(type) {
  let elements = [];
  switch (type) {
    case 'posts':
      elements = await getPosts();
      break;
    case 'events':
      elements = await getEvents();
      break;
  }
  const elementsIds = elements.map((element) => {
    return {
      params: {
        slug: element.slug.toString(),
      },
    };
  });
  return elementsIds;
}