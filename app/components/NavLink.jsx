import Link from "next/link"

const Navlink = ({ href, title }) => {
    return(
        <Link 
        href={href} className='block py-2 pl-3 pr-4 text-[#e5e5ff] sm:text-xl rounded md:p-0 hover:text-[#9999FF]'>{title}</Link>
    )
}

export default Navlink;