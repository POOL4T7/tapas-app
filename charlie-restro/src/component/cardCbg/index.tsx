import Image from "next/image";
import Link from "next/link";

const CardC = ({data}:any) => {
  return (
    <>
      <div className="h-[7rem] relative flex flex-row w-full bg-white shadow-sm border border-slate-200 rounded-lg">
        <div className="relative p-2.5 w-2/5 shrink-0 overflow-hidden h-full">
           <Image
                      width={300}
                      height={200}
                      alt="img"
                        src={data.imageUrl}
                        className="h-full w-full object-cover rounded-md"
                      />
        </div>
        <div className="p-2 flex-1 overflow-hidden flex flex-col justify-between">
          <div>
            <h6 className="mt-2 text-slate-800 font-semibold text-xs sm:text-sm md:text-sm">
              {data.title}
            </h6>
            <p className=" leading-normal text-left font-light text-xs">
              {data.sub}
            </p>
          </div>
          <div className="mt-2">
          <Link href={`${data.url}`}>
            <div
              className="text-slate-800 font-semibold text-xs sm:text-sm hover:underline flex items-center"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardC;
