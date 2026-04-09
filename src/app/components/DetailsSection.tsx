import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const details = [
  {
    title: "Food",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius eu metus et scelerisque. Nullam gravida eu elit at rutrum. Aliquam sit amet sollicitudin est. Suspendisse potenti. Donec porttitor tempor pulvinar. Sed congue elementum placerat. Maecenas nec rhoncus est.",
  },
  {
    title: "Merch",
    content:
      "Mauris vel nisl ante. Vivamus sagittis ullamcorper quam, sit amet tincidunt enim sollicitudin ut. Vestibulum at elementum leo. Aliquam erat volutpat. Nullam magna orci, accumsan at arcu lobortis, volutpat cursus nisl. Suspendisse metus purus, gravida vehicula eros in, malesuada posuere magna.",
  },
  {
    title: "Attractions",
    content:
      "Nulla ac dolor nibh. Vestibulum feugiat convallis posuere. Pellentesque vestibulum eleifend turpis vel consequat. Cras tempor turpis in nunc finibus sollicitudin. Morbi malesuada sodales urna, quis pulvinar nunc interdum ultrices. Nullam id risus velit. Ut fringilla eleifend mollis. Phasellus in dui tellus. Nam euismod mattis quam porttitor ornare.",
  },
  {
    title: "Prizes",
    content:
      "Integer tempor enim lacus, sit amet dapibus diam elementum et. Pellentesque congue libero id enim dignissim consequat. Fusce et sagittis magna, in feugiat felis. Sed volutpat, risus id ultricies blandit, arcu elit consectetur tellus, laoreet ornare purus nulla in ipsum. Praesent ac augue vitae turpis ullamcorper hendrerit eleifend in odio.",
  },
];

export default function DetailsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {details.map((detail, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-xl font-['Athiti'] font-semibold text-[#272729]">
                {detail.title}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-lg font-['Poppins'] text-[#28282b] leading-relaxed tracking-tight">
                  {detail.content}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 gap-x-16 gap-y-12">
        {/* Food */}
        <div>
          <h3 className="text-2xl font-['Athiti'] font-semibold text-[#272729] mb-4">
            {details[0].title}
          </h3>
          <p className="text-lg font-['Poppins'] text-[#28282b] leading-relaxed tracking-tight">
            {details[0].content}
          </p>
        </div>

        {/* Merch */}
        <div>
          <h3 className="text-2xl font-['Athiti'] font-semibold text-[#272729] mb-4">
            {details[1].title}
          </h3>
          <p className="text-lg font-['Poppins'] text-[#28282b] leading-relaxed tracking-tight">
            {details[1].content}
          </p>
        </div>

        {/* Attractions */}
        <div>
          <h3 className="text-2xl font-['Athiti'] font-semibold text-[#272729] mb-4">
            {details[2].title}
          </h3>
          <p className="text-lg font-['Poppins'] text-[#28282b] leading-relaxed tracking-tight">
            {details[2].content}
          </p>
        </div>

        {/* Prizes */}
        <div>
          <h3 className="text-2xl font-['Athiti'] font-semibold text-[#272729] mb-4">
            {details[3].title}
          </h3>
          <p className="text-lg font-['Poppins'] text-[#28282b] leading-relaxed tracking-tight">
            {details[3].content}
          </p>
        </div>
      </div>
    </section>
  );
}
