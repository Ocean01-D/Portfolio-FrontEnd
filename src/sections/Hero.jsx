function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gray-50">
      {/* Avatar */}
      <img
        src="https://i.pravatar.cc/150?img=3" // tạm thời đổi lại sau
        alt="Avatar"
        className="w-32 h-32 rounded-full border-4 border-blue-600 shadow mb-6"
      />

      {/* Tên */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
        Dai Duong Le
      </h1>

      {/* Job Title */}
      <h2 className="text-lg text-gray-600 mb-4">Programmer</h2>

      {/* Giới thiệu ngắn */}
      <p className="max-w-2xl text-gray-700 leading-relaxed">
        Dynamic team leader with a proven track record in project management,
        successfully guiding the development of AI and bookstore websites. Expert in Node.js and MongoDB, I excel in problem-solving and collaboration, achieving project success through effective resource allocation and risk mitigation strategies.
      </p>
    </section>
  );
}

export default Hero;
