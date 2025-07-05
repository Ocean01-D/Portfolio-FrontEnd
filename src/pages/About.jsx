function About() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 px-4">
      {/* Ảnh đại diện */}
      <div className="w-40 h-40 md:w-60 md:h-60 overflow-hidden rounded-full shadow-lg">
        <img
          src="https://via.placeholder.com/300"
          alt="Avatar"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Giới thiệu bản thân */}
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          Hello! I'm <strong className="text-blue-500">Your Name</strong>, a passionate web developer 
          who enjoys building beautiful and functional websites. I love working with modern technologies like
          <span className="font-medium"> React, TailwindCSS</span>, and more.
        </p>
        <p className="mt-4 text-gray-700">
          This portfolio showcases my personal projects and skills as I continue to learn and grow as a developer.
        </p>
      </div>
    </section>
  );
}

export default About;
