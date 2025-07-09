import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const testimonials = [
  { name: 'Aditi', quote: 'Loved the experience!', role: 'Designer' },
  { name: 'Ravi', quote: 'Smooth booking process.', role: 'Engineer' },
];

function Testimonials() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-12">
      <h2 className="text-center text-3xl font-bold text-blue-700 dark:text-white mb-8">What Our Customers Say</h2>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        className="max-w-xl mx-auto"
      >
        {testimonials.map((t, i) => (
          <div key={i} className="p-6 text-center">
            <p className="text-lg italic text-gray-700 dark:text-gray-200">“{t.quote}”</p>
            <h4 className="mt-4 text-blue-600 dark:text-blue-300 font-semibold">{t.name}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Testimonials;
