import { Container } from "@/components/layout/Container";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="font-sans text-5xl lg:text-6xl font-bold flex items-end h-full">
            <h3 className="text-[#234A23]">
              Ce qu&apos;on croit <br /> vraiment.
            </h3>
          </div>
          <div className="font-serif text-2xl lg:text-3xl font-medium text-justify">
            <p>
              Madagascar regorge de richesses que le monde ne connaît pas encore. Nous, on a décidé
              d&apos;en prendre soin et de les partager. Ce qu&apos;on met dans nos produits,
              c&apos;est ce que la terre nous donne. Artisanal par choix. La qualité se sent dans
              les mains qui fabriquent. Responsable par conviction. Chaque produit fait vivre des
              artisans, des familles, des savoir-faire locaux. Une marque qui grandit avec ses
              clients, avec ses artisans, avec son île.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
