import React from 'react';

const About = () => {
  return (
    <section className="bg-[#0f0f0f] text-gray-200 py-16 px-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-orange-500 mb-12">
          About Us
        </h1>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">
            Our Brand Story
          </h2>
          <p className="leading-relaxed text-gray-300">
            <span className="text-orange-400 font-bold">Have a Treat </span> 
            was created with one simple idea — to spread happiness through
            desserts. We believe that sweets are not just food, but moments of
            joy shared with family and loved ones.
            <br /><br />
            From small celebrations to everyday smiles, our treats are inspired
            by childhood memories, family traditions, and the comfort of
            enjoying something sweet together.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">
            Our Mission & Values
          </h2>

          <p className="leading-relaxed text-gray-300 mb-6">
            Our mission is to create delightful desserts that bring families
            closer, spark smiles, and turn ordinary moments into sweet memories.
          </p>

          <ul className="space-y-3 text-gray-300">
            <li>
              <span className="text-orange-400 font-semibold">Quality First:</span>{" "}
              Fresh ingredients and consistent taste you can trust.
            </li>
            <li>
              <span className="text-orange-400 font-semibold">Family-Focused:</span>{" "}
              Loved by kids, trusted by parents.
            </li>
            <li>
              <span className="text-orange-400 font-semibold">Joy & Creativity:</span>{" "}
              Every treat should feel fun and special.
            </li>
            <li>
              <span className="text-orange-400 font-semibold">Care & Responsibility:</span>{" "}
              Safe, hygienic, and thoughtfully prepared.
            </li>
          </ul>
        </div>

        <div className="bg-[#1a1a1a] rounded-2xl p-8 text-center">
          
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
            At Have a Treat, families always come first. Our desserts are crafted
            to be enjoyed by kids and adults alike, with flavors that feel
            familiar, exciting, and comforting.
            <br /><br />
            We aim to create a place where parents feel confident, kids feel
            excited, and families feel connected — because the best memories
            often begin with one simple thought:
          </p>

          <p className="mt-6 text-xl font-semibold text-orange-400">
            “Let’s have a treat.”
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
