import PageTitle from "../../components/common/pageTitle";
import ContactForm from "../../components/contact/contactForm";
import ContactInfo from "../../components/contact/contactInfo";

const Contact = () => {
  return (
    <>
      <PageTitle title={"contact"} />
      <div className="mb-10 w-full bg-[#f8f8f8]">
        <div className="w-full px-2 py-10 md:px-6 xl:px-[75px]">
          <div className="w-full grid-cols-1 lg:grid lg:grid-cols-2 lg:space-x-[30px] rtl:space-x-reverse">
            <ContactInfo />
            <div className="bg-white p-3 sm:p-10">
              <div className="title flex flex-col items-center">
                <h1 className="text-[34px] font-bold text-[#222222]">
                  Get In Touch
                </h1>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
