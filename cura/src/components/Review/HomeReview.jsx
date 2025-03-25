import Eminem from "../../assets/img-review/Eminem.jpg";
import LebronJames from "../../assets/img-review/LebronJames.webp";
import Rihanna from "../../assets/img-review/Rihanna.jpg";
import ScarlettJohansson from "../../assets/img-review/ScarlettJohansson.jpg";
import KevinHart from "../../assets/img-review/kevin-hart.jpg";
import Beyonce from "../../assets/img-review/beyonce.jpg";
import SnoopDogg from "../../assets/img-review/snoop-dogg.jpg";
import CillianMurphy from "../../assets/img-review/cillian-murphy.jpg";
const testimonials = [

  {
    text: "Finally, a place where I can truly relax! Useful and easy-to-follow tips. I love it!",
    name: "Eminem",
    position: "God of rap",
    img: Eminem,
  },
  {
    text: "This site is a breath of fresh air! It has helped me reduce stress and improve my well-being.",
    name: "Lebron James",
    position: "Basketball player",
    img: LebronJames,
  },
  {
    text: "Fantastic! Simple yet effective strategies to regain balance every day.",
    name: "Rihanna",
    position: "Singer",
    img: Rihanna,
  },
  {
    text: "Each article feels like a moment of relaxation. Perfect for those who want to take care of themselves!",
    name: "Scarlett Johansson",
    position: "Actress",
    img: ScarlettJohansson,
  },
  {
    text: "I found this site incredibly useful for improving my overall well-being. The articles are well-written and full of practical advice. I highly recommend it!",
    name: "Kevin Hart",
    position: "Actor",
    img: KevinHart,
  },
  {
    text: "The section dedicated to meditation helped me reduce stress. Thank you!",
    name: "Beyonce",
    position: "Singer",
    img: Beyonce,
  },
  {
    text: "This site has become my favorite resource for healthy recipes and fitness tips. The interface is intuitive and easy to navigate. Great job!",
    name: "Snoop Dogg",
    position: "Singer",
    img: SnoopDogg,
  },
  {
    text: " I recommend it to anyone who wants to improve their quality of life.",
    name: "Cillian Murphy",
    position: "Actor",
    img: CillianMurphy,
  },
];

export default function HomeReview() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#23687D] to-[#A1C877] flex flex-col items-center justify-center px-6 py-6">
      <h3 className="text-green-800 uppercase text-sm font-semibold">
        Our customers really appreciate our product!
      </h3>
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-purple-600 to-blue-800 text-5xl font-bold p-8 text-center">Testimonials</h1>
      <p className="text-green-800 text-center mt-2 max-w-2xl">
        Read the testimonials of those who have enhanced their well-being through our tips and resources.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-4xl">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-green-100/15 p-6 rounded-3xl flex items-start">
            <img
              src={testimonial.img}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="mr-1">
              <svg
                fill="#6B9F79"
                viewBox="-3.2 -3.2 38.40 38.40"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
                className="w-8 h-8"
              >
                <path d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z"></path>
              </svg>
            </div>
            <div>
              <p className="text-green-100">{testimonial.text}</p>
              <p className="text-violet-900 font-semibold mt-2">{testimonial.name}</p>
              <p className="text-green-800 text-sm">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

