// components/BackgroundGradient.jsx
const BackgroundGradient = () => (
  <div
    aria-hidden="true"
    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-100"
  >
              <div className=" dark:bg-black isolate px-6 pt-14 lg:px-4 bg-gray-950  blur-sm dark:bg-grid-white/[0.2] bg-grid-black/[0.2] ">

    <div
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
      className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
    />  </div>

  </div>
);

export default BackgroundGradient;
