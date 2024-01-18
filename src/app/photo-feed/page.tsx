import Image from "next/image"
import Link from "next/link"
import wonder from "./wonders"


const page = () => {
  return (
    <div className="mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">
        New wonders of the world
      </h1>
      <ul className="grid grid-flow-row md:grid-flow-col gap-4">
        {wonder.map(({id, src, name}) => {
          return (<li key={id}>
            <Link href={`/photo-feed/${id}`}>
              <Image alt={name} src={src}  className="w-full object-cover aspect-square"/>
            </Link>
          </li>)
        })}
      </ul>      
    </div>
  )
}

export default page
