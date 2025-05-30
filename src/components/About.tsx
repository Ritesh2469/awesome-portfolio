import {
  User,
  Briefcase,
  GraduationCap,
  Languages,
  Heart,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animation";

function Section({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 font-semibold text-cyan-300 text-lg mb-2">
        {icon}
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
}

const About = () => {
  const aboutImg = "/lovable-uploads/123.png.webp";

  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-cyan-500/10 rounded-tr-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <AnimateOnScroll type="fade-in" className="text-center mb-10">
          <h2 className="section-title text-5xl font-extrabold tracking-wide">
            About <span className="text-cyan-400 font-playfair">Me</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <AnimateOnScroll type="slide-left" className="flex justify-center">
            <div className="glowing-circle w-64 h-64 md:w-80 md:h-80 mx-auto shadow-[0_0_30px_rgba(0,255,255,0.7)] hover:shadow-[0_0_40px_rgba(0,255,255,0.9)] transition-shadow duration-500 rounded-full overflow-hidden border-4 border-cyan-400/70">
              <img
                src={aboutImg}
                alt="Profile"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll type="slide-right" delay={3} className="space-y-6 text-white">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-2 text-white drop-shadow-[0_0_8px_rgba(0,255,255,0.7)] flex items-center gap-3">
                <User className="text-cyan-400" size={28} />
                Ritesh Ranjan
              </h3>
              <div className="text-white/70 mb-1">Jalndhar, Punjab</div>
              <div className="text-white/70 text-sm mb-1">
  <span className="mr-2">Email:</span>
  <a href="mailto:riteshjaiswal2923@gmail.com" className="text-cyan-400">riteshjaiswal2923@gmail.com</a>
</div>

<div className="text-white/70 text-sm">
  <span className="mr-2">Phone:</span>
  <a className="text-cyan-400">+91 7541065954</a>
</div>

            </div>
            <div className="space-y-6 mt-8">
              <Section
                icon={<Briefcase className="text-cyan-400" size={20} />}
                title="Career Objective"
              >
                <p>
                  To secure a challenging position where I can effectively contribute my skills as a professional possessing competent technical skill.
                </p>
              </Section>
              <Section
                icon={<GraduationCap className="text-cyan-400" size={20} />}
                title="Education"
              >
                <ul className="text-white/80 text-sm md:text-base">
                  <li className="mb-1">
                    <span className="font-semibold text-cyan-300">Bachelor's Degree</span> Lovely Professional University, <span className="italic">2026</span>
                  </li>
                  <li className="mb-1">
                    <span className="font-semibold text-cyan-300">Graduation</span> Bachelor of Technology in Computer Science and Engineering.
                  </li>
                </ul>
              </Section>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 text-white">
          <div className="space-y-8">
            {/* You can add other sections here */}
          </div>
          <div className="space-y-8">
            <Section
              icon={<Languages className="text-cyan-400" size={20} />}
              title="Languages"
            >
              <div className="text-white/80 text-sm">English, Hindi</div>
            </Section>
            <Section
              icon={<Heart className="text-cyan-400" size={20} />}
              title="Interests"
            >
              <div className="text-white/80 text-sm">
              Fitness & Health ,  Gaming ,  Traveling
              </div>
            </Section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
