import { Link } from "react-router";

const BodyHeader = ({ title, subtitle }) => {
  return (
    <div className="mt-[30px]">
      <div>
        <h2 className="mb-[5px] text-[28px] font-bold capitalize">{title === "home" ? "dashboard" : title}</h2>
        <ul className="m-0 flex gap-[5px] text-[14px] text-[#5A5A5A]">
          <li>
            <Link to="/" className="capitalize  font-normal text-[#6176fe]">
              dashboard
            </Link>
          </li>
          <li className={`active ${title === "home" ? "hidden" : ""}`}>
            <span className="font-normal capitalize">/ {subtitle}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BodyHeader;
