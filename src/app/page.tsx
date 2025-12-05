import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { data } from "@/lib/data";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { CodeSnippet } from "@/components/ui/code-snippet";
import { ContactForm } from "@/components/ui/contact-form";
import dynamic from "next/dynamic";

const CaseStudyCard = dynamic(() => import("@/components/ui/case-study-card").then(mod => mod.CaseStudyCard), {
  loading: () => <div className="h-96 w-full animate-pulse rounded-3xl bg-neutral-100 dark:bg-neutral-800" />,
});

const SkillsMarquee = dynamic(() => import("@/components/ui/skills-marquee").then(mod => mod.SkillsMarquee), {
  loading: () => <div className="h-20 w-full animate-pulse bg-neutral-100 dark:bg-neutral-800" />,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans overflow-hidden">
      <HeroHighlight>
        <StaggerContainer className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4" id="home">
          <FadeIn>
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <Image
                src={data.basic.photos[0]}
                alt={data.basic.firstName}
                fill
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new projects
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Hi, I'm {data.basic.firstName}. <br />
              <Highlight className="text-black dark:text-white">
                I build intelligent apps.
              </Highlight>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              {data.basic.title}. I specialize in building high-performance cross-platform applications
              integrated with on-device AI and Machine Learning.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="mailto:devmunawar@gmail.com"
              className="px-8 py-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold hover:scale-105 transition-transform"
            >
              Contact Me
            </Link>
            <Link
              href={data.basic.resume}
              target="_blank"
              className="px-8 py-4 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              Download CV
            </Link>
          </FadeIn>
        </StaggerContainer>
      </HeroHighlight>

      <StaggerContainer className="max-w-7xl mx-auto px-4 md:px-8 pb-20 space-y-32">

        {/* About / Skills Section */}
        <section id="skills" className="space-y-12 pt-20">
          <FadeIn>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Engineering <span className="text-primary">Arsenal</span>
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                My tech stack is built on modern, scalable technologies. I focus on performance,
                clean architecture, and seamless user experiences.
              </p>
            </div>
          </FadeIn>
          <SkillsMarquee items={data.about.tech} speed="slow" />
        </section>

        {/* Featured Projects / Case Studies */}
        <section id="projects" className="space-y-12 pt-20">
          <FadeIn>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Featured <span className="text-primary">Case Studies</span>
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Real-world solutions built for scale. From fleet management to industrial automation.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.projects.slice(0, 4).map((project, i) => (
              <StaggerItem key={i}>
                <CaseStudyCard
                  title={project.title}
                  description={project.description}
                  banner={project.banner}
                  icon={project.icon}
                  link={project.link}
                  tags={project.tags}
                  className="h-full"
                />
              </StaggerItem>
            ))}
          </div>
        </section>

        {/* Code Snippet Showcase */}
        <section className="grid md:grid-cols-2 gap-12 items-center pt-20">
          <div className="space-y-8">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Clean Code & <br />
                <span className="text-primary">Modern Architecture</span>
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                I prioritize maintainability, scalability, and performance.
                Whether it's implementing Clean Architecture in Flutter or
                building type-safe APIs with Next.js, I write code that lasts.
              </p>
              <ul className="space-y-3">
                {["Clean Architecture", "SOLID Principles", "Test-Driven Development", "CI/CD Pipelines"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <CodeSnippet
              filename="use-offline-sync.ts"
              code={`// Custom hook for offline-first data sync
const useOfflineSync = <T>(key: string, fetcher: () => Promise<T>) => {
  const { data, error } = useSWR(key, fetcher);
  const { isOnline } = useNetworkStatus();

  useEffect(() => {
    if (isOnline && data) {
      // Sync local changes to server
      syncQueue.process();
    }
  }, [isOnline, data]);

  return {
    data: isOnline ? data : getLocal(key),
    isLoading: !data && !getLocal(key),
    isOffline: !isOnline
  };
};`}
            />
          </FadeIn>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-4xl mx-auto space-y-12 pt-20 pb-20">
          <FadeIn>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Ready to build something <span className="text-primary">extraordinary?</span>
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                I'm currently open to new opportunities. Let's discuss how I can contribute to your team.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <FadeIn delay={0.1} className="space-y-8">
              <div className="p-6 rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 space-y-6">
                <h3 className="text-xl font-semibold">Contact Details</h3>
                <div className="space-y-4">
                  <a href={`mailto:${data.basic.email}`} className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors">
                    <div className="h-10 w-10 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center shadow-sm">
                      <Mail className="h-5 w-5" />
                    </div>
                    {data.basic.email}
                  </a>
                  <a href={`tel:${data.basic.phone}`} className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors">
                    <div className="h-10 w-10 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center shadow-sm">
                      <Phone className="h-5 w-5" />
                    </div>
                    {data.basic.phone}
                  </a>
                  <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400">
                    <div className="h-10 w-10 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center shadow-sm">
                      <MapPin className="h-5 w-5" />
                    </div>
                    {data.basic.address}
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <ContactForm />
            </FadeIn>
          </div>
        </section>
      </StaggerContainer>
    </main>
  );
}
