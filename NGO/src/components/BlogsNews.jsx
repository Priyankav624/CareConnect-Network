import React from 'react';
import { Container, Row, Col, Card, Placeholder } from 'react-bootstrap';
import Donation from './Donation'

const BlogsNews = () => {
    
  const blogPosts = [
    {
      title: 'NGO Update 1: Empowering Communities Through Education',
      author: 'Sara Johnson',
      date: 'January 5, 2024',
      image: 'https://placekitten.com/800/500',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit lacus eu ex varius, ut aliquam leo aliquet...',
    },
    {
      title: 'NGO Update 2: Clean Water Initiatives in Developing Regions',
      author: 'Daniel Rodriguez',
      date: 'January 8, 2024',
      image: 'https://placekitten.com/800/501',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...',
    },
    {
      title: 'NGO Update 3: Healthcare Outreach Programs',
      author: 'Aisha Ahmed',
      date: 'January 12, 2024',
      image: 'https://placekitten.com/800/502',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
    },
    {
      title: 'NGO Update 4: Sustainable Agriculture Projects',
      author: 'Carlos Fernandez',
      date: 'January 15, 2024',
      image: 'https://placekitten.com/800/503',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...',
    },
    {
      title: 'NGO Update 5: Combating Human Trafficking',
      author: 'Lila Patel',
      date: 'January 18, 2024',
      image: 'https://placekitten.com/800/504',
      content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
    },
    {
      title: 'NGO Update 6: Mental Health Awareness Campaigns',
      author: 'Samuel Lee',
      date: 'January 22, 2024',
      image: 'https://placekitten.com/800/505',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    },
    {
      title: 'NGO Update 7: Disaster Relief Efforts',
      author: 'Maria Rodriguez',
      date: 'January 25, 2024',
      image: 'https://placekitten.com/800/506',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
    },
    {
      title: 'NGO Update 8: Empowering Women in Rural Areas',
      author: 'Ravi Sharma',
      date: 'January 28, 2024',
      image: 'https://placekitten.com/800/507',
      content: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    },
    {
      title: 'NGO Update 9: Youth Development Programs',
      author: 'Emily Wilson',
      date: 'February 1, 2024',
      image: 'https://placekitten.com/800/508',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...',
    },
    {
      title: 'NGO Update 10: Building Sustainable Communities',
      author: 'Mohammed Ali',
      date: 'February 4, 2024',
      image: 'https://placekitten.com/800/509',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...',
    },
  ];
  
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Latest Blog Posts</h1>
      {blogPosts.map((post, index) => (
        <div className="blog-post" key={index}>
          <img src={post.image} alt={post.title} className="img-fluid" />
          <h2>{post.title}</h2>
          <p>
            <strong>Author:</strong> {post.author} | <strong>Date:</strong> {post.date}
          </p>
          <p>{post.content}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default BlogsNews;
