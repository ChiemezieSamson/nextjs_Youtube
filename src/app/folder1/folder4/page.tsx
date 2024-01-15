import Link from "next/link"

const Folder4 = () => {
  return (
    <div>
      <h1>Folder4</h1>
    
      <div>
        <Link href={"/folder1/folder3"}>F3</Link>
        <Link href={"/about"}> About</Link>
      </div>
    </div>
  )
}

export default Folder4
