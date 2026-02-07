import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Internal Imports
import AuthorBox from "./AuthorBox";
import { publicationsContext } from "../../../App";
import { publicationData } from "../../../State&Api/Api";

const Publications = () => {
  const { adminVisible, setAdminvisible } = useContext(publicationsContext);

  // Redux logic to get data
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.Niees.publication);

  useEffect(() => {
    dispatch(publicationData());
  }, [dispatch]);

  return (
    <>
      {/* Admin Author Box visibility toggle */}
      {/* {adminVisible && <AuthorBox />} */}

      <div className="bg-[#f8fafc] min-h-screen py-10 px-4">
        {/* Main Container */}
        <div className="max-w-300 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts && posts.map((post) => {
              // Passing multiple data via state for the Detail Page
              const postData = {
                author: post.author,
                description:post.description,
                excerpt : post.excerpt ,
                journal: post.journal,
                title: post.title,
                image: post.image,
                category: post.category
              };

              return (
                <article
                  key={post.id}
                  className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full border border-gray-100"
                >
                  {/* Featured Image Section */}
                  <div className="relative aspect-video overflow-hidden">
                    <Link to="/publications/hazardous" state={postData}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </Link>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex flex-col grow">
                    {/* Category */}
                    <div className="mb-3">
                      <span className="text-[12px] uppercase tracking-wider font-semibold text-[#046bd2] hover:text-[#045cb4]">
                        <a href="#">{post.category}</a>
                      </span>
                    </div>

                    {/* Entry Title - Fixed Syntax */}
                    <h2 style={{ display: "-webkit-box", WebkitLineClamp: 5, WebkitBoxOrient: "vertical", overflow: "hidden" }} className="text-[20px] font-bold leading-tight mb-4 text-[#1e293b] hover:text-[#046bd2] transition-colors">
                      <Link to="/publications/hazardous" state={postData} >
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt - Showing short summary */}
                    <div className="text-[#334155] text-[15px] leading-relaxed line-clamp-3">
                      <p style={{ display: "-webkit-box", WebkitLineClamp: 5, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{post.excerpt.replace(/<[^>]+>/g, '')}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Publications;