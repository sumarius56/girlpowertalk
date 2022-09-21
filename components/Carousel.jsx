import React from "react";
import { Carousel as CarouselF, Card } from "flowbite-react";
import Image from "next/image";


const Carousel = () => {
  return (
    <div className="mt-1 tracking-widest">
      

      <div className="max-w-[80%]  mx-auto">
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://girlpowertalk.com/wp-content/uploads/2022/02/share-thumbnail.jpg"
        >
          <h5 className="text-4xl font-bold tracking-tight text-black/80 text-center py-10 dark:text-white">
            Girl <span className="text-blue-900">Power</span>{" "}
            <span className="text-red-600 ">Talk</span>
          </h5>
          <p className="font-normal text-black/80 text-lg dark:text-gray-400">
            Girl Power Talk strives to inspire youth with persistence, empathy,
            and confidence. We empower young women, men, and nonbinary
            individuals with merit-based opportunities to grow and achieve their
            full potential. Our mission is to drive impact through our
            ever-growing team of global leaders. We are relentlessly committed
            to education, inclusion and diversity, gender equality, and
            integrating the strengths of specially abled communities. We
            celebrate the diverse talents of each individual.
          </p>
          <p className="font-normal text-blue-900 text-lg dark:text-gray-400">
            Girl Power Talk is an amalgamation of cultures where profit meets
            purpose. Our team is determined to make the world a better place for
            people regardless of their locale and social strata. Through our
            nurturing culture of learning and mentorship, we instill young
            people with exceptional soft-skills, technical knowledge, and
            purpose in life.
          </p>
          <p className="text-center font-bold text-xl py-5 ">
            Our platform is a safe space for all stories to be heard and shared.{" "}
          </p>
          <p className="text-center font-bold text-2xl text-red-600 py-5 ">
            “Let’s change the world together, one person at a time”
          </p>
        </Card>
      </div>
      <div className="h-[700px] bg-red-600/95 text-white  flex items-center ">
        <CarouselF>
          <div className="px-20     text-sm md:text-xl lg:text-3xl tracking-widest">
            <h2 className="font-bold text-center py-10 ">Family</h2>
            <p className="mt-10 ">
              We meticulously recruit ambitious young leaders who value personal
              growth, professional development, and positive social change.
              Every candidate who is invited to join our global team is special
              not so much for what they do, but for who they are. We celebrate
              difference and believe in the collective power that is created
              when individuals are free to be authentic and true to themselves.
              Our genuine care and love for one another inspire us to work
              harder and play harder than everyone else. Our happiness is
              infectious because it is real.
            </p>
          </div>
          <div className="px-20    text-sm md:text-xl lg:text-3xl tracking-widest ">
            <h2 className="font-bold text-center py-10 ">Clear Vision</h2>
            <p className="mt-10">
              Girl Power Talk is passionate about elevating young women in India
              (and eventually everywhere) to become global leaders who are
              recognized for their myriad talents and contributions. We believe
              that through education, opportunity and the support of empathetic
              male allies, girls and women will advance beyond gender roles,
              aspire to new levels of achievement and reshape our society.
              Through our innovative ecosystem, we are changing the world of
              work for the better and providing all voices equal weight in a new
              narrative defining the future.
            </p>
          </div>
          <div className="px-20    text-sm md:text-xl lg:text-3xl tracking-widest">
            <h2 className="font-bold text-center py-10 ">Women in Tech</h2>
            <p className="mt-10">
              The technology industry is becoming increasingly gender inclusive,
              and at Girl Power Talk, we consciously hire women for tech roles.
              Women, non-binary individuals, and men work side by side on
              Coding, UI/UX design, SEO, and Data Science teams. The resulting
              confluence of ideas, styles, and strengths affords our clients a
              competitive advantage when developing solutions for their
              challenges. Our growing team of young women in tech lead by
              example for younger girls interested in pursuing STEM careers.
            </p>
          </div>
          <div className="px-20   text-sm md:text-xl lg:text-3xl tracking-widest">
            <h2 className="font-bold text-center py-10 ">We focus on Impact</h2>
            <p className="mt-10">
              Our benevolent organization is dedicated to promoting the welfare
              of disadvantaged communities. Our core mission is to change lives
              one person at a time. We focus intently on supporting women-owned
              businesses, providing education in rural communities, raising
              awareness on gender issues, and being a passionate voice for those
              without one. We encourage young women to express their opinions
              and realize their dreams, and we create opportunities for them to
              do so. Our young leaders find happiness in giving back to their
              communities and eradicating social injustice.
            </p>
          </div>
        </CarouselF>
      </div>
      <div className=" justify-evenly text-center my-10 mx-10 flex  gap-5">
        <Image
          className="rounded-lg shadow-2xl drop-shadow-2xl shadow-black my-10"
          width={800}
          height={400}
          src="https://cdn.tealfeed.com/articles/content-images/5ef51b217ea770285c06120b/ci-1593117507329.jpg"
        />
        <Image
          className="rounded-lg shadow-2xl drop-shadow-2xl shadow-black my-10"
          width={800}
          height={400}
          src="https://cdn.tealfeed.com/articles/content-images/5ef51b217ea770285c06120b/ci-1593117853776.jpg"
        />
      </div>
      <div className=" justify-evenly text-center my-10 mx-10 flex  gap-5">
        <Image
          className="rounded-lg shadow-2xl drop-shadow-2xl shadow-black my-10"
          width={800}
          height={400}
          src="https://cdn.tealfeed.com/articles/content-images/5ef51b217ea770285c06120b/ci-1593119220603.jpg"
        />
        <Image
          className="rounded-lg shadow-2xl drop-shadow-2xl shadow-black my-10"
          width={800}
          height={400}
          src="https://cdn.tealfeed.com/articles/content-images/5ef51b217ea770285c06120b/ci-1593119389140.jpg"
        />
      </div>
    </div>
  );
};

export default Carousel;
