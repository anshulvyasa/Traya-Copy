import { Button } from "@/components/ui/button";
import ContactBar from "../components/header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="mih-h-screen">
      <ContactBar />
      <div className="grid grid-cols-1 md:grid-cols-2 pl-4 ">
        <div className="flex flex-col gap-4 mt-[14%] pl-6 max-w-3xl">
          <div className="text-[22px] sm:text-[34px] font-normal ">
            Science-Led Solutions
          </div>
          <h1 className="text-[#404040] text-balance text-[27px] sm:text-[40px] font-bold  flex flex-col -space-y-2">
            <span>Know The Root Cause </span>
            <span>Of Your Hair Problems</span>
          </h1>
          <Button
            className="py-5 text-white max-w-[60%] bg-[#343a40] hover:bg-white hover:text-black cursor-pointer"
            onClick={() => navigate("/hair-assesment")}
          >
            TAKE HAIR TEST
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
