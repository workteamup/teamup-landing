import Hero from "../new-components/hero";
import Section from "../new-components/section";
import InfoElement from "../new-components/info-element";
export default function AboutUsPage() {
  return (
    <div>
      <Hero
        preTitle="About us"
        preTitleClassName="text-purple-500"
        title="There's a different way to work, and we're building it"
        titleClassName="max-w-[1200px] text-purple-900"
        subtitle="The future belongs to teams who connect beyond the screen through shared experiences"
        subtitleClassName="max-w-[720px] text-purple-700"
        /*buttons={[
          {
            variant: "primary",
            size: "lg",
            children: "Start reducing turnover today",
          },
        ]}*/
        bgClassName="bg-purple-50"
      />
      <Section
        title="Our story"
        titleClassName="max-w-[960px]"
        subtitle="404: Meaningful connections not found"
        subtitleClassName="max-w-[720px]"
      >
        <div className="text-lg text-dark-space max-w-3xl mx-auto flex flex-col gap-4">
          <p>
            Team Up! was born from a simple observation: traditional virtual
            offices weren&apos;t creating the meaningful connections that
            distributed teams desperately needed.
          </p>
          <p>
            As gamers ourselves, we saw how video games have mastered the art of
            bringing people together in virtual spaces. While companies
            struggled with flat 2D &quot;virtual offices&quot; that felt like
            awkward video calls with extra steps, we knew there was a better
            way.
          </p>
          <p>
            We asked: What if team building could feel less like an obligation
            and more like play? What if remote work could be a journey of shared
            joy rather than isolation?
          </p>
          <p>
            That&apos;s why we created Team Up! — where immersive 3D
            environments meet purposeful team building activities designed for
            genuine human connection.
          </p>
        </div>
      </Section>
      <Section title="Our mission" titleClassName="max-w-[960px]">
        <p className="max-w-[1000px] text-4xl font-medium mx-auto text-center text-purple-400">
          To transform remote work from a solitary experience into a journey of
          shared joy, meaningful connections, and collective achievement by
          harnessing the power of play.
        </p>
      </Section>

      <Section
        title="Our approach"
        subtitle="Unlike traditional virtual office solutions that simply try to replicate physical workspaces, Team Up! takes inspiration from gaming principles to create truly engaging team experiences."
        subtitleClassName="max-w-[960px]"
        bgClassName="bg-white"
        containerClassName="max-w-[1600px] mx-auto"
      >
        {/*<p className="text-lg text-dark-space max-w-3xl mx-auto flex flex-col gap-4 mb-20">
          Unlike traditional virtual office solutions that simply try to
          replicate physical workspaces, Team Up! takes inspiration from gaming
          principles to create truly engaging team experiences:
        </p>*/}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <InfoElement
            imageSrc="/images/campfire.jpg"
            title="Immersive 3D environments"
            description="Purpose-built spaces like our Auditorium, Campfire, and Planning areas create context for meaningful interaction."
          />
          <InfoElement
            imageSrc="/images/farm.jpg"
            title="Interactive experiences"
            description="From Floor is Lava challenges to strategic games like Connect 4 and The Corral, we focus on shared experiences that build real bond."
          />
          <InfoElement
            imageSrc="/images/auditorium.jpg"
            title="Continuous engagement"
            description="Beyond one-off team building events, we provide persistent spaces for ongoing connection."
          />
          <InfoElement
            imageSrc="/images/auditorium.jpg"
            title="Genuine human connection"
            description="Every feature is designed to foster authentic interaction, not just productivity."
          />
        </div>
      </Section>
      <Section title="Why we're different" titleClassName="max-w-[960px]">
        <div className="text-lg text-dark-space max-w-3xl mx-auto flex flex-col gap-4">
          <p>
            While other platforms focus on replicating office layouts or
            facilitating work processes, Team Up! focuses exclusively on what
            remote work needs most: human connection through shared experiences.
          </p>
          <p>
            Our gaming-first approach creates the emotional engagement that
            makes teams truly cohesive. After all, you don&apos;t remember the
            meeting room layout from your favorite job — you remember the
            moments of triumph, laughter, and collaboration with colleagues who
            became friends.
          </p>
        </div>
      </Section>
      <Section title="Our team" titleClassName="max-w-[960px]">
        <div className="text-lg text-dark-space max-w-3xl mx-auto flex flex-col gap-4">
          <p>
            While other platforms focus on replicating office layouts or
            facilitating work processes, Team Up! focuses exclusively on what
            remote work needs most: human connection through shared experiences.
          </p>
          <p>
            Our gaming-first approach creates the emotional engagement that
            makes teams truly cohesive. After all, you don&apos;t remember the
            meeting room layout from your favorite job — you remember the
            moments of triumph, laughter, and collaboration with colleagues who
            became friends.
          </p>
        </div>
      </Section>
      <Section
        title="Join the movement"
        titleClassName="max-w-[960px]"
        buttons={[
          {
            variant: "primary",
            children: "Request access",
            size: "xl",
          },
          {
            variant: "secondary",
            children: "Create your first meeting room now",
            size: "xl",
          },
        ]}
        buttonsPosition="bottom"
      >
        <div className="text-lg text-dark-space max-w-3xl mx-auto flex flex-col gap-4">
          <p>
            As work continues to evolve, the companies that thrive will be those
            that master the art of building genuine human connections across
            physical boundaries.
          </p>
          <p>
            Team Up! is more than just a platform — it&apos;s a new philosophy
            for how remote teams can connect, collaborate, and cultivate culture
            in the digital age.
          </p>
          <p>
            Whether you&apos;re a fully remote startup, a global enterprise with
            distributed teams, or a hybrid organization looking to maintain
            culture across physical and digital spaces, Team Up! is built to
            help your team thrive through the power of play.
          </p>
        </div>
      </Section>
    </div>
  );
}
