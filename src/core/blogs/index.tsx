import Blog from './Blog'
import { useFilter } from './hooks'

export default function Blogs() {
  const { handleFilter, blogs, filters } = useFilter()
  return (
    <div
      id="blogs"
      className="bg-white py-32 min-h-screen relative z-10 grid place-content-center"
    >
      <div className="">
        <h1 className="text-center">
          {'Blogs.'.split('').map((l, idx) => (
            <span key={idx} className="logo-char logo-char-3 text-4xl">
              {l}
            </span>
          ))}
        </h1>

        <div className="px-4 py-10 flex items-center justify-center flex-wrap">
          {filters.map((filter, idx) => (
            <button
              key={idx}
              onClick={() => handleFilter(filter.value)}
              className="m-4 hero-social text-xs bg-black text-white"
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="px-4 pt-20 py-10 grid gap-10">
          {blogs.map((blog, idx) => (
            <Blog key={idx} {...blog} />
          ))}
        </div>
      </div>
    </div>
  )
}
