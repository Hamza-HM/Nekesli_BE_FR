"use client"; // Add this line to make it a client component

const PostDetail = ({ params }) => {
  return <div className="text-white">Post id is {params.id}</div>;
};

export default PostDetail;
