import Link from "next/link"

const F1 = () => {
  return (
    <div>
      <h1>F1 page</h1>

      <div>
        <Link href={"/folder1/folder2"}>F2</Link>
      </div>
    </div>
  )
}

export default F1
