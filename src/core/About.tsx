import { Link } from 'react-router-dom'
import { WithHelper } from './WithHelper'

export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen relative z-10 bg-black text-white py-32 grid place-content-center"
    >
      <div className="">
        <h1 className="text-center ">
          {'WHO AM I.'.split('').map((l, idx) => (
            <span key={idx} className="logo-char logo-char-3 text-4xl">
              {l}
            </span>
          ))}
        </h1>

        <div className="grid grid-cols-2">
          <div className="relative h-80 col-span-2 md:col-span-1 group">
            <svg
              className="w-40 h-40 absolute top-1/2 right-1/2 cool-animation-left-no-rotate"
              viewBox="0 0 394 406"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M394 0L259.019 210.609L394 406H0L134.981 199.652L0 0H394Z"
                fill="#EE1D52"
              />
            </svg>
            <svg
              className="w-40 h-40 absolute top-1/2 right-1/2 z-[70] translate-x-1/2 -translate-y-1/2 group-active:scale-110 duration-300 ease-in-out"
              viewBox="0 0 394 406"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M394 0L259.019 210.609L394 406H0L134.981 199.652L0 0H394Z"
                fill="white"
              />
            </svg>
            <svg
              className="w-40 h-40  absolute top-1/2 right-1/2 cool-animation-right-no-rotate"
              viewBox="0 0 394 406"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M394 0L259.019 210.609L394 406H0L134.981 199.652L0 0H394Z"
                fill="#69C9D0"
              />
            </svg>
          </div>
          <div className="grid place-content-center col-span-2 md:col-span-1">
            <div>
              <div className="px-4 pt-10 max-w-xl font-medium">
                My name is
                <span className="colored-red"> Ahmed Mlaouhia </span>, I'm a{' '}
                <span className="colored-blue font-black"> Front</span> End{' '}
                <span className="colored-red"> Developer </span> and{' '}
                <span className="colored-red"> DevOps </span> Engineer @
                Start-Now. I go to
                <a
                  href="https://goo.gl/maps/r6FTEGLPMv1EPgCL6"
                  className="colored-blue"
                  target="_blank"
                >
                  {' '}
                  Higher institution of technological study Rades{' '}
                </a>
                , where I study Business Intelligence. <br />
                <br />I have bachelor degree in conputer science @ Faculty of
                science of Bizerte with
                <span className="colored-blue">
                  {' '}
                  DevOps end of study internship @ Start-Now{' '}
                </span>
                .I have worked with different languages and frameworks like
                <span className="colored-blue font-black">
                  {' '}
                  Angular, React, Java, Python, C...{' '}
                </span>
                , and DevOps tools like{' '}
                <span className="colored-red">
                  Jenkins, Docker, Linux, Gitlab, Grafana, Prometheus...{' '}
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="px-4 flex items-center justify-center pt-20 space-x-0 md:space-x-8 space-y-8 md:space-y-0 flex-col md:flex-row">
              <div className="hero-social text-sm text-black">
                Web Developer (React ❤️)
              </div>
              <div className="hero-social text-sm text-black">
                In Love with DevOps
              </div>
              <div className="hero-social text-sm text-black">
                Jenkins & Linux
              </div>
              <div className="hero-social text-sm text-black">
                Business Intelligence
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
