"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          O nás
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/images/logo.png"
              alt="H2O Systems logo"
              width={400}
              height={200}
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            className="md:w-2/3 space-y-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg">
              Sme inovatívna vyrobno-obchodná spoločnosť zastrešujúca trh
              Slovenska, Česka a krajiny EU. Od roku 1999 sa profesionálne
              venujene výrobe predaju a servisu systémov na úpravu vody
              najvyššej kvality. Spolupracujeme so svetovými dodávateľmi
              komponentov na výrobu systémov na úpravu kvality vody na mieru.
              Kladieme vysoký dôraz na odbornosť, kvalitu našich dodávaných
              zariadení.
            </p>

            <p className="text-lg">
              Poskytujeme odborné poradenstvo, návrhy, montáže, servis systémov
              na úpravu kvality vody, podľa individuálnych požiadaviek našich
              zákazníkov.
            </p>

            <p className="text-lg">
              Od začiatku nášho pôsobenia na trhu sme navrhli a zrealizovali
              tisíce úprav vody pre našich spokojných klientov. Pridajte sa aj
              vy k tejto skupine.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}