import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-primary font-mono mb-4">04. What's Next?</h2>
          <h3 className="text-4xl font-bold text-light mb-6">Get In Touch</h3>
          <p className="text-gray-400 mb-8">
            I'm currently looking for new opportunities, and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block px-8 py-4 border-2 border-primary text-primary hover:bg-primary/10 
                     transition-colors duration-300 rounded font-medium"
          >
            Say Hello
          </a>
          <div className="mt-12 flex justify-center space-x-6">
            <SocialLink href="#" icon="github" />
            <SocialLink href="#" icon="linkedin" />
            <SocialLink href="#" icon="twitter" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    className="text-light hover:text-primary transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="sr-only">{icon}</span>
    {/* Add your social icons here */}
  </a>
);

export default Contact;
