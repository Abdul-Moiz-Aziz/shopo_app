// ModalPopup.js
import { MdClose } from "react-icons/md";

const LoginPopup = ({ isOpen, onClose }) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#222222]/80 backdrop-blur-sm">
      <div className="relative w-[90%] max-w-md bg-[#FFD230] text-[#222222] rounded-xl shadow-2xl p-6 md:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#222222] text-2xl hover:scale-125 transition-transform"
        >
          <MdClose />
        </button>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Welcome</h2>
          <p className="mb-6 text-sm text-[#222222]/90">
            Please log in or sign up to continue.
          </p>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => {
                onClose();
                navigate("/auth/login");
              }}
              className="bg-[#222222] text-[#FFD230] px-6 py-2 rounded-lg font-medium hover:opacity-90 transition"
            >
              Login
            </button>
            <button
              onClick={() => {
                onClose();
                navigate("/auth/register");
              }}
              className="bg-[#222222] text-[#FFD230] px-6 py-2 rounded-lg font-medium hover:opacity-90 transition"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
