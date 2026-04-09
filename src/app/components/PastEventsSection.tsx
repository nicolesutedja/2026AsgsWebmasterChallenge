import imgAsceBgRevealTheTheme2025Nov71 from "figma:asset/1424246431724903d8a0e7ab2351b55e8e6cbf82.png";
import imgBearGardenWi26SaveTheDateF01011 from "figma:asset/2a83728466b066f251e677128eabd1b1870e1967.png";
import imgAsgsBearGardenSpringTeaser2026March121 from "figma:asset/d8770d97fc735f7dea5471be11ecc64d7f68573d.png";

const events = [
  {
    title: "ASCE-Bear, Where Are You?",
    date: "November 21, 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius eu metus et scelerisque. Nullam gravida eu elit at rutrum. Sed congue elementum placerat. Maecenas nec rhoncus est.",
    image: imgAsceBgRevealTheTheme2025Nov71,
  },
  {
    title: "The Rise of ASCE Bear",
    date: "February 20, 2026",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius eu metus et scelerisque. Nullam gravida eu elit at rutrum. Sed congue elementum placerat. Maecenas nec rhoncus est.",
    image: imgBearGardenWi26SaveTheDateF01011,
  },
  {
    title: "My Little ASCE Bear",
    date: "April 3, 2026",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius eu metus et scelerisque. Nullam gravida eu elit at rutrum. Sed congue elementum placerat. Maecenas nec rhoncus est.",
    image: imgAsgsBearGardenSpringTeaser2026March121,
  },
];

export default function PastEventsSection() {
  return (
    <section className="py-12 md:py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-['Athiti'] font-semibold text-black mb-8 md:mb-12">
        Past Events
      </h2>
      
      <div className="border-2 border-[#979797] rounded-3xl p-6 md:p-12 lg:p-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="border-2 border-[#d9d9d9] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-64 md:h-72 lg:h-80 overflow-hidden bg-gray-100">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 md:p-8 text-center">
                <h3 className="text-lg md:text-xl font-['Poppins'] font-medium text-black mb-2 leading-tight">
                  {event.title}
                </h3>
                
                <p className="text-base md:text-lg font-['Poppins'] font-light text-black mb-3">
                  {event.date}
                </p>
                
                <p className="text-sm font-['Poppins'] text-black leading-relaxed tracking-tight">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
