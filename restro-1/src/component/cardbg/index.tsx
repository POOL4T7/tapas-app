import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Cardg = ({data}:any) => {
    return (
      <>
       <Link href={data.url}>
        <div className="relative h-[30rem] flex flex-col my-2 bg-white shadow-sm border border-slate-200 rounded-lg w-full text-left">
          <div className="relative h-[50%] m-2.5 overflow-hidden text-white rounded-md">
            <Image
            width={300}
            height={200}
            alt="img"
              src={data.imageUrl}
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="p-4 flex-1">
            <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-left">
              POPULAR
            </div>
            <h6 className="mb-2 text-slate-800 font-semibold text-xs sm:text-sm md:text-sm">
             {data.title}
            </h6>
            <p className="text-slate-600 leading-normal font-light text-xs sm:text-xs md:text-xs">
             {data.description}
            </p>
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <motion.img
                alt="Tania Andrew"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                className="relative inline-block h-8 w-8 md:h-10 md:w-10 rounded-full"
              />
              <div className="flex flex-col ml-3 text-xs md:text-xs">
                <span className="text-slate-800 font-semibold">Tapas Mundo</span>
                <span className="text-slate-600">March 20, 2025</span>
              </div>
            </div>
          </div>
        </div>
        </Link>
      </>
    );
  };
  
  export default Cardg;
  