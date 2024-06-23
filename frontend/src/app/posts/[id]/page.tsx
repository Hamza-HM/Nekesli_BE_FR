"use client";

interface PostDetailParams {
  id: string;
}

const PostDetail = ({ params }: { params: PostDetailParams }) => {
  return <div className="text-white">Post id is {params.id}</div>;
};

export default PostDetail;
