import BlogPost from "../common/blogPost";

const LatestNews = () => {
  return (
    <div className="w-full bg-[#f8f8f8]">
      <div className="px-2 py-5 md:px-6 md:py-10 lg:py-[60px] xl:px-[75px]">
        <div className="mb-[30px] flex items-center justify-center">
          <h1 className="text-3xl font-semibold text-[#222222]">
            My Latest News
          </h1>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-[30px]">
            <BlogPost />
            <BlogPost />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LatestNews;
