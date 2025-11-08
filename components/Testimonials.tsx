import Image from "next/image";
import TestimonialsCards from "./Shadows/TestimonialsCards";

interface TestimonialAuthor {
  name: string;
  role: string;
  image: string;
  alt: string;
}

interface Testimonial {
  title: string;
  content: string;
  author: TestimonialAuthor;
  cardClass: string;
  titleClass: string;
  contentClass: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    title: "The AI You Didn't Know You Needed",
    content:
      "Telezen is hands down the most efficient AI I've ever interacted with. It's like having a personal assistant that does everything for you... while also making you laugh at its witty comments.",
    author: {
      name: "Ryan Chen",
      role: "CEO, Quantum Dynamics",
      image: "/assets/ryan-chen.jpg",
      alt: "ryan-chen",
    },
    cardClass: "w-full sm:max-w-[631px]",
    titleClass: "my-8 lg:mt-[52px] lg:mb-[54px]",
    contentClass:
      "text-[#858585] f-neue-regular text-[16px] leading-[23px] tracking-[-0.02em]",
  },
  {
    title: "Efficiency with a Side of Humor",
    content:
      "I've never experienced an AI that is so helpful and hilarious at the same time. Telezen gets the job done, but it's the sarcastic remarks that make it extra fun to use.",
    author: {
      name: "Laura Schmidt",
      role: "Founder, Bloom AI",
      image: "/assets/laura-schmidt.jpg",
      alt: "laura-schmidt",
    },
    cardClass: "w-full sm:max-w-[426px]",
    titleClass: "my-8 lg:mt-[52px] lgmb-[54px]",
    contentClass:
      "text-[#858585] f-neue-regular text-[16px] leading-[23px] tracking-[-0.02em]",
  },
  {
    title: "AI with Attitude",
    content:
      "Telezen is clever and efficient. It gets the job done while keeping things fun with witty comebacks.",
    author: {
      name: "Elara Vance",
      role: "CEO, TechStart",
      image: "/assets/elara-vance.jpg",
      alt: "elara-vance",
    },
    cardClass: "w-full md:max-w-[310px]",
    titleClass: "my-5 lg:mt-[25px] lg:mb-[60px]",
    contentClass:
      "text-[#858585] f-neue-regular text-[16px] leading-[23px] tracking-[-0.02em]",
  },
  {
    title: "The AI with Personality",
    content:
      "Telezen solves problems and makes the process enjoyable, like an AI with humor and professionalism.",
    author: {
      name: "Jasper Holt",
      role: "Founder, InnovaTech",
      image: "/assets/jasper-holt.jpg",
      alt: "jasper-holt",
    },
    cardClass: "w-full md:max-w-[422px]",
    titleClass: "my-5 lg:mt-[25px] lg:mb-[60px]",
    contentClass:
      "text-[#858585] f-neue-regular text-[16px] leading-[23px] tracking-[-0.02em]",
  },
  {
    title: "Efficiency with a Smile",
    content:
      "Telezen gets things done quickly, adding a touch of sarcasm for fun. It's like having a smart, funny assistant.",
    author: {
      name: "Quinn Abernathy",
      role: "Owner, NexGen Solutions",
      image: "/assets/quinn-abernathy.jpg",
      alt: "quinn-abernathy",
    },
    cardClass: "w-full md:max-w-[310px]",
    titleClass: "my-5 lg:mt-[25px] lg:mb-[60px]",
    contentClass:
      "text-[#858585] f-neue-regular text-[16px] leading-[23px] tracking-[-0.02em]",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section
      className="relative px-4 pt-20 md:pt-32 pb-[140px] overflow-hidden"
      id="testimonials"
    >
      <TestimonialsCards />
      <div className="relative z-10 max-w-[1072px] w-full mx-auto">
        {/* Headings */}
        <div className="mb-12 md:mb-[90px]">
          <h1 className="text-center f-eightiescomeback mb-[15px] tracking-[-0.01em] text-2xl sm:text-[38px] leading-[30px] sm:leading-[43px]">
            Results that really stand out!
          </h1>

          <p className="text-[#7D7D7D] text-center text-[14px] md:text-[16px] leading-5 sm:leading-[23px] tracking-[-0.01em] f-neue-regular">
            Find our how our happy clients are having about us.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-[15px] mb-4">
          {TESTIMONIALS_DATA.slice(0, 2).map(
            (testimonial: Testimonial, index: number) => (
              <div
                key={index}
                className={`${testimonial.cardClass} bg-white rounded-[20px] p-6 lg:p-7.5 md:shadow-none shadow-sm flex flex-col justify-between md:justify-start`}
              >
                <h2 className="text-[16px] sm:text-[18px] leading-5 sm:leading-[26px] f-neue-medium -tracking-[-0.01em]">
                  {testimonial.title}
                </h2>

                <p
                  className={`${testimonial.titleClass} ${testimonial.contentClass}`}
                >
                  {testimonial.content}
                </p>

                <div className="flex items-center gap-[15px]">
                  <div className="min-w-[50px] w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img
                      src={testimonial.author.image}
                      alt={testimonial.author.alt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-[16px] leading-[23px] f-neue-medium tracking-[-0.02em]">
                      {testimonial.author.name}
                    </h4>
                    <p className="text-[#A0A0A0] text-[14px] leading-[23px] f-neue-regular tracking-[-0.02em]">
                      {testimonial.author.role}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-[15px]">
          {TESTIMONIALS_DATA.slice(2, 5).map(
            (testimonial: Testimonial, index: number) => (
              <div
                key={index + 2}
                className={`${testimonial.cardClass} bg-white rounded-[20px] p-6 lg:p-7.5 md:shadow-none shadow-sm flex flex-col justify-between md:justify-start`}
              >
                <h2 className="text-[16px] sm:text-[18px] leading-5 sm:leading-[26px] f-neue-medium -tracking-[-0.01em]">
                  {testimonial.title}
                </h2>

                <p
                  className={`${testimonial.titleClass} ${testimonial.contentClass}`}
                >
                  {testimonial.content}
                </p>

                <div className="flex items-center gap-[15px]">
                  <div className="min-w-[50px] w-[50px] h-[50px] rounded-full overflow-hidden">
                    <Image
                      src={testimonial.author.image}
                      alt={testimonial.author.alt}
                      width={50}
                      height={50}
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-[16px] leading-[23px] f-neue-medium tracking-[-0.02em]">
                      {testimonial.author.name}
                    </h4>
                    <p className="text-[#A0A0A0] text-[14px] leading-[23px] f-neue-regular tracking-[-0.02em]">
                      {testimonial.author.role}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
