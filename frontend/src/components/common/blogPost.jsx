import { BiCommentDetail } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const BlogPost = () => {
  return (
    <div className="w-full">
      <div className="w-full border border-[#D3D3D3]">
        <div className="relative h-[340px] w-full">
          <span className="h-full w-full">
            <img
              src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fshopo.mamunuiux.com%2Fuploads%2Fcustom-images%2Fblog--2022-09-22-04-13-57-7380.jpg&w=1920&q=75"
              className="h-full w-full"
            />
          </span>
        </div>
        <div className="p-[24px]">
          <div className="mb-3 flex items-center space-x-9 rtl:space-x-reverse">
            <div className="flex items-center space-x-1.5 text-[#FFBB38] rtl:space-x-reverse">
              <span className="flex h-5 w-5 items-center justify-center">
                <IoPersonOutline className="h-full w-full" />
              </span>
              <span className="text-base text-[#8e8e8e] capitalize">
                by admin
              </span>
            </div>
            <div className="flex items-center space-x-1.5 text-[#FFBB38] rtl:space-x-reverse">
              <span className="flex h-5 w-5 items-center justify-center">
                <BiCommentDetail className="h-full w-full" />
              </span>
              <span className="text-base text-[#8e8e8e] capitalize">
                <span>0 </span>
                <span>comments</span>
              </span>
            </div>
          </div>
          <div>
            <a href="/blog">
              <h1 className="capitalizen mb-1 line-clamp-2 cursor-pointer text-[22px] font-semibold text-[#222222] hover:text-blue-500">
                Top 10 Best Professional Blogging Platforms for 2022
              </h1>
            </a>
            <div className="line-clamp-2">
              <p className="mb-4 text-justify font-sans text-black">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <p className="mb-4 text-justify font-sans text-black">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </p>
              <p className="mb-4 text-justify font-sans text-black">
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.
              </p>
            </div>
            <a href="/view-more-blogs">
              <div className="mt-2 flex items-center space-x-1 rtl:space-x-reverse">
                <span className="text-base font-semibold text-[#222222]">
                  View More
                </span>
                <span className="h-5 w-5 text-[#222222] flex justify-center items-center">
                  <MdKeyboardArrowRight className="h-full w-full" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogPost;
