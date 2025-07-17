'use client';

import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Education } from '@/components/education';
import { Achievements } from '@/components/achievements';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}