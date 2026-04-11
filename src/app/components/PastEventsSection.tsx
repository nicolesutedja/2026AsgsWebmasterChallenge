import { motion } from "framer-motion";
import imgAsceBgRevealTheTheme2025Nov71 from "/src/assets/past-events/past-1.png";
import imgBearGardenWi26SaveTheDateF01011 from "/src/assets/past-events/past-2.png";
import imgAsgsBearGardenSpringTeaser2026March121 from "/src/assets/past-events/past-3.png";

const events = [
  {
    title: "ASCE-Bear, Where Are You?",
    date: "November 21, 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius eu metus et scelerisque.",
    image: imgAsceBgRevealTheTheme2025Nov71,
  },
  {
    title: "The Rise of ASCE Bear",
    date: "February 20, 2026",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius eu metus et scelerisque.",
    image: imgBearGardenWi26SaveTheDateF01011,
  },
  {
    title: "My Little ASCE Bear",
    date: "April 3, 2026",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius eu metus et scelerisque.",
    image: imgAsgsBearGardenSpringTeaser2026March121,
  },
];

// 1. Define the orchestration for the grid (the parent)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This creates the "one by one" delay (0.2s between cards)
    },
  },
};

// 2. Define how each individual card should move
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.3, ease: "easeOut" } 
  },
};

export default function PastEventsSection() {
  return (
    <section className="py-12 md:py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-['Athiti'] font-semibold text-black mb-8 md:mb-12">
        Past Events
      </h2>
      
      <div className="border-2 border-[#979797] rounded-3xl p-6 md:p-12 lg:p-14">
        {/* 3. Turn the grid into a motion.div and apply containerVariants */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={cardVariants} // 4. Apply cardVariants to each child
              className="border-2 border-[#d9d9d9] rounded-lg overflow-hidden hover:shadow-lg hover:scale-103 transition-shadow transition-transform group duration-500"
            >
              <div className="h-64 md:h-72 lg:h-80 overflow-hidden bg-gray-100">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}