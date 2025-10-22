import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      name: 'Email',
      value: 'alfinvidoo@gmail.com',
      icon: Mail,
      href: 'mailto:your.email@example.com',
    },
    {
      name: 'WhatsApp',
      value: '+6283842136035',
      icon: MessageCircle,
      href: 'https://wa.me/1234567890',
    },
    {
      name: 'Phone',
      value: '+6283842136035',
      icon: Phone,
      href: 'tel:+1234567890',
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container px-16 py-12 bg-primary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Feel free to reach out to me for collaborations or just a friendly chat
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.name}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {method.name}
                </h3>
                <p className="text-gray-700 text-center">{method.value}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;