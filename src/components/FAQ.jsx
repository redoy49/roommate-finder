import React from "react";

const FAQ = () => {
  return (
    <div className="faq-wrapper my-24">
      <h2 className="font-bold text-2xl md:text-4xl text-center my-12">
        Frequently Asked Question
      </h2>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold">
          1. How Does The MeetYourClass Roommate Finder Work?
        </div>
        <div className="collapse-content text-sm">
          MeetYourClass has a powerful search tool that makes finding your ideal
          roommate super easy! It's like a personalized search engine just for
          roommates—filter by what's important to you and connect with the right
          match in no time.
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          2. Is The MeetYourClass Roommate Finder Free to Use?
        </div>
        <div className="collapse-content text-sm">
          Yes, completely free! The MeetYourClass Roommate Finder lets you
          search and message as much as you want without any limits.
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          3. What Should I Look For In a College Roommate?
        </div>
        <div className="collapse-content text-sm">
          When it comes to picking a college roommate, finding someone you can
          live well with is key. Look for someone who has a similar schedule,
          goals, and social habits. It's better to have a good living situation
          than to risk losing a friendship over roommate issues. For more tips
          on what makes a great roommate, check out our post in our blog!
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          4. What Questions Should I Ask Potential College Roommates?
        </div>
        <div className="collapse-content text-sm">
          Asking the right questions helps you get beyond the basics and figure
          out if you'll make a good team as roommates. We've put together a list
          of the top 50 questions to help you get started—check it out!
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          5. How To Find Roommates For College?
        </div>
        <div className="collapse-content text-sm">
          Finding a roommate doesn't have to be stressful! There are plenty of
          options out there, like Facebook groups, Instagram pages, and the
          MeetYourClass Roommate Finder, which makes it easy to find the right
          person for you.
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          5. What Websites To Find Roommates?
        </div>
        <div className="collapse-content text-sm">
          There are lots of places online to find roommates, but MeetYourClass
          is one of the fastest-growing, with over 400,000 students from 1,500+
          colleges. It's a great place to start your search!
        </div>
      </div>
    </div>
  );
};

export default FAQ;
