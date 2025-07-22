export function ReviewsSection() {
  const reviews = [
    {
      name: "Dr. Sarah Johnson",
      role: "Principal, Riverside High School",
      content:
        "This system has revolutionized how we manage student records. The time savings alone have been incredible, and our staff loves how intuitive it is to use.",
      avatar: "👩‍🏫",
    },
    {
      name: "Michael Chen",
      role: "IT Director, Metro School District",
      content:
        "The integration capabilities are outstanding. We were able to connect all our existing systems seamlessly, and the security features give us complete peace of mind.",
      avatar: "👨‍💼",
    },
    {
      name: "Lisa Rodriguez",
      role: "Registrar, Oakwood Academy",
      content:
        "Student record management has never been easier. The automated reporting saves us hours every week, and parents love the real-time access to their child's progress.",
      avatar: "👩‍💻",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            What Educators Are Saying
          </h2>
          <p className="text-lg text-gray-600 animate-fade-in-up animation-delay-200">
            Hear from real educators who have transformed their institutions with our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up`}
              style={{ animationDelay: `${(index + 3) * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center text-2xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
