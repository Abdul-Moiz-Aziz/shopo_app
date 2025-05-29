import { FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdSettingsPhone } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div>
      <h1 className="mb-1 text-[22px] leading-[30px] font-semibold text-[#222222]">
        Contact Information
      </h1>
      <p className="mb-5 text-[15px] leading-[30px] text-[#8e8e8e]">
        Fill the form below or write us .We will help you as soon as possible.
      </p>
      <div className="mb-[30px] flex flex-col xl:flex-row xl:space-x-[30px] space-y-[30px] xl:space-y-0 rtl:space-x-reverse">
        <div className="item flex h-[196px] w-full flex-col justify-center bg-[#FFEAE5] p-5 xl:w-1/2">
          <div className="mb-3 flex justify-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-solid border-[#FFBB38] text-[#FFBB38]">
              <MdSettingsPhone className="h-5 w-5" />
            </span>
          </div>
          <p className="text-center text-[22px] leading-[30px] font-semibold text-black">
            phone
          </p>
          <p className="text-center text-[15px] leading-[30px] text-black">
            +88 01682 825 123
          </p>
        </div>
        <div className="item flex h-[196px] w-full flex-col justify-center bg-[#D3EFFF] p-5 xl:w-1/2">
          <div className="mb-3 flex justify-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-solid border-[#FFBB38] text-[#FFBB38]">
              <FaRegEnvelope className="h-5 w-5" />
            </span>
          </div>
          <p className="text-center text-[22px] leading-[30px] font-semibold text-black capitalize">
            email
          </p>
          <p className="text-center text-[15px] leading-[30px] text-black">
            admin@gmail.com
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col justify-between bg-[#E7F2EC] p-5">
        <div className="flex space-x-5 rtl:space-x-reverse">
          <div className="mb-3 flex justify-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-solid border-[#FFBB38] text-[#FFBB38]">
              <IoLocationOutline className="w-5 h-5" />
            </span>
          </div>
          <div>
            <h1 className="mb-2 text-[22px] leading-[30px] font-semibold text-[#222222]">
              Address
            </h1>
            <p className="text-[15px] leading-[30px] text-[#222222]">
              New York, USA
            </p>
          </div>
        </div>
        <div className="mt-5 h-[206px] w-full">
          <iframe
            title="newWork"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.94539481518!2d-74.26675559025064!3d40.69739290398433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1656755618576!5m2!1sen!2sbd"
            loading="lazy"
            style={{ border: "0px", width: "100%", height: "100%" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;
