import React from "react";
import "./blogcard.css";

const blogs = [
  {
    id: "001",
    title: "Solving Fizz Buzz",
    description:
      "Fizz Buzz is a traditional coding challenge. Here I walked you through my approach to solving the challenge",
    image:
      "https://images.unsplash.com/photo-1616574808712-5cf60f175073?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG51bWJlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    tag: "coding challenge",
    date: "01 June, 2021",
  },
  {
    id: "002",
    title: "Object Oriented Programming Explained",
    description:
      "I use OOP all the time and I explain here what it means, in simple terms",
    image:
      "https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGluZ3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",

    tag: "article",
    date: "07 June, 2021",
  },
  {
    id: "003",
    title: "React Hooks",
    description:
      "The most popular and used hooks in the react library are explained in this article",
    image:
      "https://images.unsplash.com/photo-1541690090176-17d35a190b6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvb2tzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    tag: "article",
    date: "15 June, 2021",
  },
  {
    id: "004",
    title: "Palindrome",
    description:
      "This is one of the common coding challenges at job interviews. Find out the meaning and my approach to solving it",
    image:
      "https://images.unsplash.com/photo-1616037502269-72da0baf7d71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFscGhhYmV0c3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    tag: "coding challenge",
    date: "18 June, 2021",
  },
];

const BlogCard = () => {
  return (
    <>
      {blogs.map((blog) => {
        return (
          <div className="dami__blogcard" key={blog.id}>
            <div className="dami__blogcard-image">
              <img src={blog.image} />
            </div>
            <div className="dami__blogcard-content_bottom">
              <h4> {blog.title} </h4>
              <p> {blog.description} </p>
              <div className="dami__blogcard-content_tags">
                <p>
                  <span>{blog.date}</span>
                </p>
                <p>
                  Tag: <span>{blog.tag}</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogCard;
