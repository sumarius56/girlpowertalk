import React from "react";
import Typed from "react-typed";
import { Accordion } from "flowbite-react";

const WhyNext = () => {
  return (
    <div className="px-5 mt-10 mb-10 text-red-700 tracking-widest">
      <h3 className="text-xl font-bold text-center text-black/80 drop-shadow-lg shadow-xl py-3 my-10">
        Why Girl Power talk?
      </h3>
      <Typed
        className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-3"
        strings={[
          "Let me tell you why I chose Girl Power Talk",
          "Girl Power Talk is a platform that strives to inspire young leaders with persistence, empathy, and confidence. ",
          "Giving everyone a chance to unleash their dormant potential.",
          "Young people, with creativity ,adaptability to change , the team here, is like a family",
          "The great opportunity is in your hands, just apply and see for yourself! ",
        ]}
        typeSpeed={120}
        backSpeed={30}
        loop
      />
      <h3 className="text-xl font-bold text-center text-black/80 drop-shadow-lg shadow-xl py-3 my-10">
        What Make Girl Power Talk Great
      </h3>
      <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title>Concept of Teamwork </Accordion.Title>
          <Accordion.Content>
            <ul className="list-disc mb-2 text-gray-500 dark:text-gray-400">
              <li>
                Building an organization that has a reliable framework for doing
                welfare in the world.
              </li>
              <li>
                Catalyzing a culture committed to the improvement of all young
                adults accepted.
              </li>
              <li>
                Offering women a stage to celebrate their successes and amplify
                their voices
              </li>
              <li>
                Leading education that inspires innovation and eradicates
                stereotypes.
              </li>
              <li>
                Growing an innovative technology company into a case study for
                digital transformation.
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>The Vision</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              As per the founders, each country, including India, most people
              work in an organization as per a particular job role and function.
              That is their single focus, and it habitually grows pretty
              ordinary. As the founders interacted more with their friends and
              acquaintances in different industries, they identified a need for
              a unique working culture that transcends the traditional
              definition of ‘work’. Girl Power Talk finds themselves in an
              incredibly honorable position to patiently build a professional
              community where everyone works hard to invest in their minds.
              Their work is personal, and they make a point of genuinely caring
              about one another. Together as a family seeking to positively
              change the world for future generations, they focus on bringing
              out the best in one another.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              According to Girl Power Talk, a magnificent building requires an
              ineffaceable foundation. They treat each new team member like a
              long-lost sister or brother. When you invest in one person with
              your heart, you change the course of their life forever.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Merit is Rewarded</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The startup Girl Power Talk strives to inspire the most capable
              young leaders with persistence, empathy, and confidence. They
              empower young women (and men) with merit-based opportunities to
              grow and achieve their full potential.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Girl Power Talk celebrates the diversity and the creative
              potential of the brightest young minds. They provide a nurturing
              culture of learning and mentorship. Their culture instills young
              people with exceptional soft-skills, technical knowledge, and
              purpose in life.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              They put the energy where it matters the most – creating a strong
              vision and true alignment amongst their growing global family.
              They achieve it by having genuine care about someone and
              consciously investing the time to develop a latticework of real
              friendships.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default WhyNext;
