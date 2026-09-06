import { createFileRoute } from "@tanstack/react-router";

import logoAsset from "@/assets/g4g-logo.png.asset.json";
import bannerAsset from "@/assets/g4g-banner.jpg.asset.json";
import crowdAsset from "@/assets/g4g-awareness-crowd.jpg.asset.json";
import guitarAsset from "@/assets/g4g-guitar.jpg.asset.json";
import coloringAsset from "@/assets/g4g-coloring.jpg.asset.json";
import classroomAsset from "@/assets/g4g-classroom.jpg.asset.json";
import mealAsset from "@/assets/g4g-meal.jpg.asset.json";
import mentorAsset from "@/assets/g4g-mentor.jpg.asset.json";

const TITLE = "Great For Greatness CBO | Music, Farming & Autism Awareness";
const DESCRIPTION =
  "Great For Greatness (G4G) is a Nairobi community-based organisation empowering autistic children and orphans through music therapy, organic urban farming and autism awareness.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const programs = [
  {
    tag: "01",
    title: "Music as therapy",
    body: "Instrument lessons led by the artists of Thee Joint. Rhythm opens up communication where words are hard, and every child gets an instrument in their hands.",
    image: guitarAsset.url,
    alt: "A young musician learning to play the guitar during a G4G session",
  },
  {
    tag: "02",
    title: "Organic urban farming",
    body: "Started for the Brook Centre and now growing across the community — food, life skills and calm, sensory-friendly work in the soil for children and caregivers.",
    image: mealAsset.url,
    alt: "Children and volunteers sharing a meal at a G4G community gathering",
  },
  {
    tag: "03",
    title: "Autism awareness",
    body: "Outreach with Thee Joint Band teaching families and neighbours how to live with, support and love autistic children — because autism is a different ability.",
    image: bannerAsset.url,
    alt: "Autism awareness banner at a Great For Greatness community event",
  },
];

const gallery = [
  { src: crowdAsset.url, alt: "Thee Joint performing to a crowd of children at an outreach event" },
  { src: coloringAsset.url, alt: "A mentor helping a child colour a drawing at a G4G workshop" },
  { src: classroomAsset.url, alt: "A Great For Greatness learning session in progress" },
  { src: mentorAsset.url, alt: "A G4G mentor with a pupil at the Day of the African Child" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-2.5">
            <img
              src={logoAsset.url}
              alt="Great For Greatness CBO logo"
              className="size-10 rounded-full object-cover"
            />
            <span className="font-display text-base font-semibold leading-none">
              Great For
              <br />
              Greatness
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#story" className="hover:text-primary">Our story</a>
            <a href="#programs" className="hover:text-primary">Programs</a>
            <a href="#gallery" className="hover:text-primary">Community</a>
            <a href="#support" className="hover:text-primary">Support us</a>
          </nav>
          <a
            href="#support"
            className="rounded-full bg-coral px-4 py-2 text-sm font-semibold text-ink-foreground transition-opacity hover:opacity-90"
          >
            Get involved
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-14 pt-10 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-12 md:pt-16">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-foreground">
              Zimmerman · Nairobi, Kenya
            </p>
            <h1 className="font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Autism is not a disability —{" "}
              <span className="text-primary">it is a different ability</span> to be valued.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Great For Greatness is a community-based organisation that grew out of the band Thee
              Joint. We empower autistic children and orphans through music, organic urban farming
              and awareness that changes how a whole neighbourhood shows up.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#support"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Support our work
              </a>
              <a
                href="#programs"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                See our programs
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src={crowdAsset.url}
              alt="Thee Joint band performing at a Great For Greatness autism awareness event"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
              loading="eager"
            />
            <img
              src={coloringAsset.url}
              alt="A volunteer guiding a child through a colouring activity"
              className="absolute -bottom-8 left-4 hidden w-40 rounded-2xl border-4 border-background object-cover shadow-xl md:block"
              loading="lazy"
            />
          </div>
        </section>

        {/* Story */}
        <section id="story" className="border-y border-border bg-secondary/50">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1fr_1.1fr] md:py-20">
            <div>
              <h2 className="font-display text-3xl font-semibold md:text-4xl">
                From a band to a movement
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  G4G began as <strong className="text-foreground">Thee Joint</strong>, a group of
                  young artists sharpening their skills together. Meeting the director of the Brook
                  Centre for the Deaf and Autistic Children in Zimmerman changed everything.
                </p>
                <p>
                  Teaching music at the centre, the band discovered that music is therapy for
                  autistic children. An organic urban farming programme followed, and the need to
                  work alongside the wider community gave birth to the Great For Greatness CBO.
                </p>
                <p>
                  Today we train autistic children and orphans from children&apos;s homes in musical
                  instruments and organic farming, and we run awareness drives so families know how
                  to care for and celebrate their children.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 self-start">
              <img
                src={classroomAsset.url}
                alt="A Great For Greatness learning session with children"
                className="col-span-2 aspect-[16/9] w-full rounded-2xl object-cover"
                loading="lazy"
              />
              <div className="rounded-2xl bg-background p-5">
                <p className="font-display text-3xl font-semibold text-primary">3</p>
                <p className="mt-1 text-sm text-muted-foreground">Core programmes running</p>
              </div>
              <div className="rounded-2xl bg-background p-5">
                <p className="font-display text-3xl font-semibold text-coral">2</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Partners: Brook Centre &amp; Thee Joint
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section id="programs" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">What we do</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Three programmes, one belief: every child carries greatness worth drawing out.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {programs.map((p) => (
              <article key={p.tag} className="flex flex-col">
                <img
                  src={p.image}
                  alt={p.alt}
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                  loading="lazy"
                />
                <p className="mt-5 font-display text-sm font-semibold tracking-[0.2em] text-accent">
                  {p.tag}
                </p>
                <h3 className="mt-1 font-display text-2xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="bg-ink py-16 text-ink-foreground md:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Moments from the community
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-ink-foreground/70">
              Awareness days, music lessons, workshops and shared meals across Zimmerman and beyond.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {gallery.map((g) => (
                <img
                  key={g.src}
                  src={g.src}
                  alt={g.alt}
                  className="aspect-square w-full rounded-2xl object-cover"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Support */}
        <section id="support" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="grid gap-10 rounded-3xl bg-primary p-8 text-primary-foreground md:grid-cols-2 md:p-12">
            <div>
              <h2 className="font-display text-3xl font-semibold md:text-4xl">
                Help us grow the greatness
              </h2>
              <p className="mt-4 text-primary-foreground/80">
                Instruments, seedlings, therapy sessions and awareness events are all powered by
                people who choose to show up. Partner with us, volunteer your time, or donate what
                you can.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:greatforgreatness75@gmail.com?subject=I%20want%20to%20support%20G4G"
                  className="rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground"
                >
                  Email us
                </a>
                <a
                  href="tel:+254111724105"
                  className="rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold"
                >
                  Call 0111 724 105
                </a>
              </div>
            </div>
            <ul className="grid gap-4 self-center">
              {[
                ["Volunteer", "Teach an instrument, help in the garden, or join an awareness day."],
                ["Donate", "Instruments, seeds, learning materials or funds for sessions."],
                ["Partner", "Schools, centres and organisations working with autistic children."],
              ].map(([t, d]) => (
                <li key={t} className="rounded-2xl bg-primary-foreground/10 p-5">
                  <p className="font-display text-lg font-semibold">{t}</p>
                  <p className="mt-1 text-sm text-primary-foreground/80">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logoAsset.url}
                alt="Great For Greatness CBO logo"
                className="size-12 rounded-full object-cover"
              />
              <p className="font-display text-xl font-semibold">Great For Greatness CBO</p>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Zimmerman, Nairobi, Kenya. In partnership with Thee Joint Band and the Brook Centre
              for the Deaf and Autistic Children.
            </p>
          </div>
          <div className="text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Email
            </p>
            <a href="mailto:greatforgreatness75@gmail.com" className="mt-1 block hover:text-primary">
              greatforgreatness75@gmail.com
            </a>
          </div>
          <div className="text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Phone
            </p>
            <a href="tel:+254111724105" className="mt-1 block hover:text-primary">
              0111 724 105
            </a>
            <a href="tel:+254754112029" className="block hover:text-primary">
              0754 112 029
            </a>
          </div>
        </div>
        <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Great For Greatness CBO
        </div>
      </footer>
    </div>
  );
}
