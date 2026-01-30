import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-red-600 font-semibold">
            ❤️ <span className="font-playfair">Shubhavivah</span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#venue" className="hover:text-red-500">
              Venue
            </a>
            <a href="#schedule" className="hover:text-red-500">
              Schedule
            </a>
            <a href="#rsvp" className="hover:text-red-500">
              RSVP
            </a>
          </nav>

          <button className="bg-red-500 text-white px-5 py-2 rounded-full text-sm shadow hover:bg-red-600 transition">
            RSVP
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center px-6 mt-30 bg-white">
        <p className="text-red-600 tracking-wide font-medium">
          || श्री कुलस्वामिनी प्रसन्न ||
        </p>

        <div className="flex justify-center my-4">
          <span className="bg-red-600 text-white w-8 h-8 flex items-center justify-center rotate-45 rounded-sm">
            <span className="-rotate-45">!</span>
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl text-red-600 font-bold mt-4">
          श्री गणेशाय नमः
        </h1>

        <h2 className="text-2xl mt-4 font-semibold">सुरेखा आणि सचिन</h2>

        <p className="max-w-2xl mx-auto mt-6 text-sm text-gray-600 leading-relaxed">
          "स्नेह निर्माण... दोन मनांचे मिलन, रेशीमगाठीने अडकवायचे क्षण!"
        </p>

        <p className="max-w-3xl mx-auto mt-4 text-sm text-gray-500">
          आमच्या लाडक्या चि. सौ. का. सुरेखा आणि चि. सचिन यांच्या शुभविवाहाच्या
          मंगल समयी आपली उपस्थिती प्रार्थनीय आहे.
        </p>

        <p className="mt-10 text-xs tracking-widest text-gray-400">
          SCROLL TO DISCOVER ↓
        </p>
      </section>

      {/* Couple Image */}
      <section className="mt-20 flex justify-center px-6">
        <div className="relative">
          <div className="rounded-t-full overflow-hidden border-8 border-white shadow-2xl max-w-sm">
            <Image
              src="/sample-8.webp"
              alt="Surekha & Sachin"
              width={400}
              height={600}
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute bottom-6 w-full text-center">
            <p className="font-playfair text-sm tracking-widest text-white opacity-80">
              THE UNION OF
            </p>
            <h3 className="text-4xl text-white font-bold mt-1">
              सुरेखा & सचिन
            </h3>
            <p className="font-playfair text-base text-white opacity-90 mt-1">
              Surekha & Sachin
            </p>
          </div>
        </div>
      </section>

      {/* Invitation Section */}
      <section className="text-center px-6 mt-24">
        <div className="w-24 h-4 mx-auto bg-red-200 rounded-full mb-6"></div>

        <h2 className="text-2xl font-bold text-red-600">आग्रहाचे निमंत्रण!</h2>

        <p className="max-w-2xl mx-auto mt-4 text-sm text-gray-600">
          आमच्या आयुष्यातील हा सर्वात आनंदाचा क्षण अधिक सुंदर करण्यासाठी आपली
          उपस्थिती हवीच.
        </p>

        <button className="mt-8 inline-flex items-center gap-2 bg-red-100 text-red-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-red-200 transition">
          📅 Save the Date
        </button>
      </section>

      {/* Footer */}
      <footer className="mt-24 py-8 text-center text-xs text-gray-400">
        <div className="flex justify-center gap-6 mb-4 text-red-400">
          🏛️ ☀️ 💖
        </div>
        <p className="tracking-widest font-playfair">CRAFTED WITH LOVE</p>
      </footer>
    </>
  );
}
