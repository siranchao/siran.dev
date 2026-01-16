import ContactForm from "./ContactForm";
import Skill from "./Skill";

export default function AboutMe() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-base-content">About Me</h2>
          <div className="space-y-4 text-[16px] leading-[26px] text-base-content/80">
            <p>
              I&apos;m an enthusiastic fullstack developer specializing in
              front-end development. Strong focus on React, TypeScript, frontend
              architecture, and performance optimization. I build and deliver
              maintainable, large-scale, complex web solutions.
            </p>
          </div>
        </div>

        <Skill />
      </div>

      {/* Contact Form */}
      <div id="contact">
        <ContactForm />
      </div>
    </section>
  );
}
