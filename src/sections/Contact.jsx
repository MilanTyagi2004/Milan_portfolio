import TitleHeader from "../components/TitleHeader";

const Contact = () => (
  <section id="contact" className="flex-center section-padding">
    <div className="w-full h-full md:px-10 px-5 flex flex-col items-center justify-center">
      <TitleHeader
        title="Get in Touch – Let’s Connect"
        sub="💬 Have questions or ideas? Let’s talk! 🚀"
      />
      <div className="mt-16 text-center">
        <p className="text-lg mb-4">You can reach me directly at:</p>
        <a
          href="mailto:milantyagi2004@gmail.com"
          className="text-blue-400 underline text-xl hover:text-blue-600 transition-colors"
        >
          milantyagi2004@gmail.com
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
