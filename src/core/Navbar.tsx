import { useCallback, useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import Logo from './Logo'

function useNavbar() {
  const [open, setOpen] = useState(false)

  const toggle = useCallback(() => {
    setOpen(!open)
  }, [open])

  const close = useCallback(() => {
    setOpen(false)
  }, [])

  return {
    open,
    toggle,
    close,
  }
}
export default function Navbar() {
  const ctrl = useNavbar()

  return (
    <>
      <nav className="fixed top-0 w-full z-40 bg-white">
        <div
          className={`mx-4 md:mx-20 xl:mx-40 py-6 flex items-center space-x-4 ${
            ctrl.open ? 'border-b' : ''
          } `}
        >
          <Logo />
          <div className="flex-1"></div>
          <HashLink to="/#about" className="desktop-only nav-url" smooth>
            Whoami
          </HashLink>
          <HashLink to="/#projects" className="desktop-only nav-url" smooth>
            Projects
          </HashLink>
          <HashLink to="/#blogs" className="desktop-only nav-url" smooth>
            Blogs
          </HashLink>
          <HashLink to="/#contact" className="desktop-only nav-url" smooth>
            Contact
          </HashLink>
          <a
            href="/Ahmed Mlaouhia CV.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="desktop-only hero-social text-sm !ml-8"
          >
            Resume
          </a>
          <button
            className="flex md:hidden hero-social text-sm items-center"
            onClick={ctrl.toggle}
          >
            <span
              className={`w-4 duration-200 ${
                ctrl.open ? 'text-xl font-black' : ''
              }`}
            >
              I
            </span>
            /
            <span
              className={`w-4 duration-200 ${
                ctrl.open ? '' : 'text-xl font-black'
              }`}
            >
              O
            </span>
          </button>
        </div>
      </nav>
      <div
        className={`fixed bg-white inset-0 z-30 overflow-hidden duration-300 ease-in-out ${
          ctrl.open ? 'right-0' : 'right-full'
        } grid place-content-center 
    `}
      >
        <div className="flex flex-col items-center justify-center space-y-6">
          <HashLink
            to="/#about"
            className="nav-url"
            smooth
            onClick={ctrl.close}
          >
            Whoami
          </HashLink>
          <HashLink
            to="/#projects"
            className="nav-url"
            smooth
            onClick={ctrl.close}
          >
            Projects
          </HashLink>
          <HashLink
            to="/#blogs"
            className="nav-url"
            smooth
            onClick={ctrl.close}
          >
            Blogs
          </HashLink>
          <HashLink
            to="/#contact"
            className="nav-url"
            smooth
            onClick={ctrl.close}
          >
            Contact
          </HashLink>
          <a
            onClick={ctrl.close}
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="hero-social text-sm !mt-10"
          >
            Resume
          </a>
        </div>
      </div>
    </>
  )
}
