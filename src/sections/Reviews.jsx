import React from "react";
import { motion } from "framer-motion";

const ClientReviews = () => {
  const reviews = [
    {
      name: "Maren Calzoni",
      date: "12/03/2023",
      rating: 5,
      text: "The place is super clean, everything is new and the beds are super comfortable!",
      score: "10/10",
      image: "https://via.placeholder.com/50",
    },
    {
      name: "John Doe",
      date: "15/05/2023",
      rating: 5,
      text: "Amazing experience! The staff was friendly and the ambiance was lovely.",
      score: "9.5/10",
      image: "https://via.placeholder.com/50",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-[#F5EBD1] text-center overflow-hidden">
      {/* Section Header */}
      <motion.p
        className="body text-sm text-yellow-700 font-semibold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Client Reviews
      </motion.p>

      <motion.h2
        className="heading text-2xl md:text-3xl font-bold text-gray-800 mb-10"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        What our Clients have to say
      </motion.h2>

      {/* Reviews Grid */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 md:gap-8"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.25 },
          },
        }}
        viewport={{ once: true }}
      >
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 30 },
              visible: { opacity: 1, scale: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-white rounded-lg flex flex-col items-center shadow-md w-full sm:w-72 md:w-64 p-6 text-left transform transition duration-300 hover:scale-[1.03] hover:shadow-xl"
          >
            <div className="flex items-center flex-col mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 py-2 rounded-full object-cover"
              />
              <div className="ml-3 flex flex-col items-center">
                <h4 className="text-lg font-semibold text-gray-800 text-center">
                  {review.name}
                </h4>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>

            <div className="text-yellow-400 text-lg mb-3">
              {"★".repeat(review.rating)}
            </div>

            <p className="text-sm md:text-base text-gray-600 mb-3 text-center">
              {review.text}
            </p>
            <p className="text-sm font-bold text-gray-800">{review.score}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ClientReviews;
