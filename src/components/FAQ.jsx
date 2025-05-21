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
          1. What’s included in each subscription box?
        </div>
        <div className="collapse-content text-sm">
          Each box contains a curated selection of fresh, organic vegetables
          tailored to the box’s theme. For example, the Green Essentials Box
          includes leafy greens and herbs, while the Family Feast Box offers a
          variety of 8+ vegetables perfect for family meals.
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          2. How often will I receive my box?
        </div>
        <div className="collapse-content text-sm">
          All subscriptions are delivered monthly. You’ll receive a fresh,
          handpicked box of vegetables at your doorstep once a month, on your
          selected delivery date.
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          3. Can I pause or cancel my subscription anytime?
        </div>
        <div className="collapse-content text-sm">
          Yes! You can pause, skip a month, or cancel your subscription at any
          time through your account settings—no hidden fees or commitments.
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          4. Are the vegetables organic and locally sourced?
        </div>
        <div className="collapse-content text-sm">
          Absolutely. We prioritize organic and locally grown produce, working
          directly with trusted farms to ensure top quality and sustainability
          in every box.
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          5. What if I have dietary restrictions or allergies?
        </div>
        <div className="collapse-content text-sm">
          While we don’t currently offer customized boxes, you can view full box
          contents before your delivery and skip any month if it doesn’t meet
          your needs. We're working to add more flexible options soon!
        </div>
      </div>
    </div>
  );
};

export default FAQ;