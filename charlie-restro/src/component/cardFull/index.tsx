import Image from "next/image";

const CardFull = () => {
    return (
        <>
            <div className="relative my-2 grid w-full h-[30rem]  flex-col items-end justify-center overflow-hidden rounded-lg bg-white">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('/image/mundo-tapas-bar-restaurant.jpg')] bg-cover bg-center">
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative text-center p-6 px-6 py-14 md:px-12">
                    <h2 className="mb-6 text-3xl font-medium text-white">
                    Berlin&lsquo;s premier destination for authentic Indian cuisine!                    </h2>
                    <h5 className="mb-4 text-xl font-semibold text-slate-300">
                        @ Tapas Mundo
                    </h5>
                    <Image
                               width={300}
                               height={200}
                               alt="img"
                               style={{borderRadius:'50%'}}
                                 src={`/image/logob.png`}
                                 className="h-32 w-32 m-auto  object-cover rounded-md"
                               />
                </div>
            </div>
        </>
    )
}

export default CardFull;