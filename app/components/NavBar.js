"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt2 } from "react-icons/hi";


const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-bl from-amber-300 to-orange-400  flex items-center justify-between py-7 md:px-24 px-5 lg:px-28 shadow-md">
			<div className="flex items-center gap-20">
				<div className="flex items-center text-3xl md:text-4xl gap-4 font-bold text-white">
					<Image src={"/vercel.svg"} alt="Forcythe logo" width={30} height={30} /> <p><span className="text-slate-700">PDF</span>ile</p>
				</div>

				<nav className="hidden md:flex gap-5 text-lg text-white font-medium items-center">
					<Link href={`about`}>About</Link>
					<Link href={`services`}>Services</Link>
					<Link href={`portfolio`}>Portfolio</Link>
					<Link href={`foundation`}>Contact</Link>
				</nav>
			</div>

			<div>
				<button className="bg-neutral-50 px-5 hidden md:block hover:bg-neutral-200 transition-all duration-200 ease-in-out py-2 rounded-2xl hover:shadow-slate-400 hover:shadow-md hover:border-white hover:border shadow-md cursor-pointer font-medium">Get started</button>
			</div>


			<div className="relative md:hidden block">
				<button
					onClick={() => setShowMenu(!showMenu)}
					className="px-3 cursor-pointer py-2.5  rounded-xl bg-white bg-opacity-10 block md:hidden"
				>
					<HiMenuAlt2 size={22} />
				</button>

				{showMenu && (
					<div>
						<nav className="md:hidden absolute bg-gradient-to-t to-slate-600 from-slate-900 shadow-sm right-0 top-16  shadow-secondary flex gap-5 text-lg flex-col rounded-xl text-white py-14 px-10 w-[15rem]">

							<button className="bg-gradient-to-bl from-amber-300 to-orange-400  px-5 md:hidden block  transition-all duration-200 ease-in-out py-2 rounded-2xl hover:shadow-slate-400 hover:shadow-md hover:border-white hover:border shadow-md cursor-pointer font-medium">Get started</button>


							<Link href={`about`}>About</Link>
							<Link href={`services`}>Services</Link>
							<Link href={`portfolio`}>Portfolio</Link>
							<Link href={`studio`}>Studio</Link>
							<Link href={`foundation`}>Foundation</Link>
						</nav>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
