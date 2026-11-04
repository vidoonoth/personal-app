import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      name: 'Email',
      value: 'muhammadalfintsabit@gmail.com',
      icon: Mail,
      href: 'mailto:muhammadalfintsabit@gmail.com',
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/muhammad-alfin-tsabit',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/muhammad-alfin-tsabit/',
    },
    {
      name: 'WhatsApp',
      value: '085188384062',
      icon: MessageCircle,
      href: 'https://wa.me/6285188384062',
    },
    {
      name: 'Phone',
      value: '085188384062',
      icon: Phone,
      href: 'tel:085188384062',
    },
    {
      name: 'Location',
      value: 'Indramayu, Jawa Barat',
      icon: MapPin,
      href: 'https://www.google.com/maps/search/?api=1&query=Indramayu%2C%20Jawa%20Barat',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
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
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Feel free to reach out to me for collaborations or just a friendly chat
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 mx-auto">
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
                className="flex flex-col items-center p-6 bg-slate-900/60 rounded-2xl border border-slate-800/80 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                  <Icon className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {method.name}
                </h3>
                <p className="w-full break-words text-center text-sm text-slate-400">
                  {method.value}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
