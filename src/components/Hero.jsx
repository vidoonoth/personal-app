import { motion } from 'framer-motion';

const Hero = () => {
  return (
    // Mempertahankan padding samping dan latar belakang
    <section className="min-h-screen flex items-center px-16 py-12 bg-primary">
      {/* Menggunakan container untuk lebar maksimum yang terpusat */}
      <div className="container mx-auto"> 
        <motion.div
          // HAPUS max-w-3xl di sini agar bisa mengisi container
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* GUNAKAN GRID untuk tata letak 2 kolom di layar besar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* KOLOM KIRI: Teks dan Tombol */}
            <div className="flex flex-col lg:order-1">
                {/* Pembatas lebar hanya pada kolom teks agar tidak terlalu panjang */}
                <div className="max-w-xl"> 
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                        Muhammad Alfin Tsabit
                        <span className="block text-blue-400 mt-2">Web Developer</span>
                    </h1>
                  <p className="text-lg sm:text-xl text-gray-300 mb-8">
                        Passionate about creating beautiful and functional web experiences. 
                        I specialize in modern web technologies and love turning ideas into reality.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#projects" className="btn btn-primary flex items-center gap-2">
                            View Projects 
                        </a>
                        <a href="#contact" className="btn btn-outline text-white border-white hover:bg-white hover:text-black">
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div> 
            
            {/* KOLOM KANAN: Gambar */}
            <div className="flex justify-center lg:justify-end lg:order-2 mt-8 lg:mt-0">                
                <img
                    src="/alfin.png"
                    alt="Foto Alfin—profil"
                    // Lebar gambar dibuat relatif terhadap kolom (misalnya 80%)
                    // dan ukuran max agar gambar tidak pecah
                    className="backdrop-blur-2xl bg-white/20 w-full max-w-xs md:max-w-sm lg:max-w-md rounded-4xl border border-white/40 object-cover shadow-2xl"
                    loading="lazy"
                    decoding="async"
                />
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
