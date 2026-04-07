import ContactForm from "./ContactForm";
import Skill from "./Skill";

export default function AboutMe() {
  return (
    <section className="flex flex-col gap-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-base-content">About Me</h2>
          <div className="text-base leading-[1.8] text-base-content/60 max-w-prose">
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
