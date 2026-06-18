export default function OurTeamPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1
            className="text-[#d4af37] text-5xl md:text-7xl tracking-[0.15em]"
            style={{ fontFamily: "serif" }}
          >
            OUR TEAM
          </h1>

          <div className="w-32 h-[1px] bg-[#d4af37] mx-auto mt-6" />
        </div>

        {/* Founder Section */}
        <div className="border border-[#d4af37]/30 p-8 md:p-12 bg-[#0a0a0a]">

          <div className="relative">

            {/* Founder Image */}
            <img
  src="/images/raakavan.jpg"
  alt="Raakavan"
  className="float-right ml-8 mb-6 w-[220px] md:w-[260px] rounded-lg border border-[#d4af37]/30"
/>

            {/* Founder Details */}
            <p className="text-white/80 tracking-wider text-lg mb-2">
              Founder & Creative Director:
              <span className="text-[#d4af37]"> Raakavan</span>
            </p>

            <h2
              className="text-[#d4af37] text-3xl md:text-4xl mb-8"
              style={{ fontFamily: "serif" }}
            >
              Craft & Frame Production
            </h2>

            {/* Content */}
            <div className="space-y-6 text-white/80 leading-8 text-justify">

              <p>
                Raakavan is a Chennai-based filmmaker, author, and executive flim producer
                with nearly a decade of experience spanning independent film,
                live events, and talent management. Before stepping fully into
                the creative industry, he built a foundation in finance and BPO
                operations — a background that now shapes the disciplined,
                business-savvy approach he brings to every CFP.
              </p>

              <p>
                As founder of Craft & Frame Production, Raakavan leads a
                multidisciplinary studio working across film, television-style
                events, podcasts, and published fiction. His storytelling is
                deeply rooted in Tamil culture and Chennai's vibrant creative
                ecosystem, blending authentic regional sensibility with polished,
                professional production values.
              </p>

              <p>
                Beyond filmmaking, Raakavan is the author of the novel
                <span className="text-[#d4af37]"> The One Who Stayed</span>,
                published under the Craft & Frame Production imprint.
              </p>

              <p>
                He is currently spearheading
                <span className="text-[#d4af37]">
                  {" "}PPOSI 2026 (Prince & Princess of South India)
                </span>,
                a major event platform celebrating South Indian talent, alongside
                a slate of original podcast and screen concepts spanning crime
                thrillers, psychological horror, and cultural conversation
                formats.
              </p>

              <p>
                Driven by a passion for stories about identity, restraint, and
                unspoken emotion, Raakavan continues to expand CFP's footprint
                across film, literature, and live entertainment — one frame at a
                time.
              </p>

            </div>

            <div className="clear-both"></div>

          </div>

        </div>

      </div>

{/* ================= INDUSTRY PARTNER ================= */}

<div className="mt-20 border border-[#d4af37]/30 p-8 md:p-12 bg-[#0a0a0a]">

  <h2
    className="text-[#d4af37] text-3xl md:text-4xl mb-10 text-center"
    style={{ fontFamily: "serif" }}
  >
    INDUSTRY PARTNER
  </h2>

  <div className="flex flex-col md:flex-row gap-10 items-start">

    <img
      src="/images/72film.jpg"
      alt="72 Film Company"
      className="w-full md:w-[240px] rounded-lg border border-[#d4af37]/30"
    />

    <div className="text-white/80 leading-8 text-justify">
      <h3 className="text-[#d4af37] text-2xl mb-4">
        72 Film Company
      </h3>

      <p className="mb-6">
        72 Film Company is a Kerala-based distribution house with a strong
        legacy of over 120 film releases across the industry. Beyond
        distribution, the company offers a full suite of production support
        services, including casting, production unit management, and caravan
        services — making it a trusted, end-to-end partner for filmmakers
        across Malayalam cinema and beyond.
      </p>

      <p>
        With deep industry relationships and proven reliability, 72 Film
        Company combines wide-reaching distribution expertise with on-ground
        production infrastructure, supporting projects from development
        through release.
      </p>
    </div>

  </div>

</div>

{/* ================= SPONSORS ================= */}

<div className="mt-20">

  <h2
    className="text-[#d4af37] text-4xl md:text-5xl text-center mb-12"
    style={{ fontFamily: "serif" }}
  >
    SPONSORS
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Mahil Properties */}

    <div className="border border-[#d4af37]/30 p-6 bg-[#0a0a0a]">
      <img
        src="/images/mahil-properties.jpg"
        alt="Mahil Properties"
        className="w-full h-[220px] object-contain mb-6"
      />

      <h3 className="text-[#d4af37] text-xl mb-4">
        Mahil Properties
      </h3>

      <p className="text-white/80 leading-7 text-justify">
        Mahil Properties is an Avinashi-based construction company with
        10 years of experience delivering premium homes at affordable
        budgets. Committed to quality craftsmanship and timely delivery,
        Mahil Properties combines thoughtful design with cost-effective
        construction, making dream homes accessible without compromising
        on style or durability.
      </p>
    </div>

    {/* 7:10 FUTSAL */}

    <div className="border border-[#d4af37]/30 p-6 bg-[#0a0a0a]">
      <img
        src="/images/futsal-united.jpg"
        alt="7:10 Futsal United"
        className="w-full h-[220px] object-contain mb-6"
      />

      <h3 className="text-[#d4af37] text-xl mb-4">
        7:10 Futsal United
      </h3>

      <p className="text-white/80 leading-7 text-justify">
        7:10 Futsal United is a popular multi-sport turf facility located
        in Madhavaram Milk Colony, Chennai. It is well-known for hosting
        football, box cricket, and local sporting events. The venue
        features a well-maintained artificial turf with floodlights,
        making it suitable for both daytime and late-night games.
      </p>
    </div>

    {/* Smiths */}

    <div className="border border-[#d4af37]/30 p-6 bg-[#0a0a0a]">
      <img
        src="/images/smiths-parfums.jpg"
        alt="Smiths Parfums"
        className="w-full h-[220px] object-contain mb-6"
      />

      <h3 className="text-[#d4af37] text-xl mb-4">
        Smiths' Parfums
      </h3>

      <p className="text-white/80 leading-7 text-justify">
        Smiths' Parfums is a Chennai-based fragrance startup offering a
        curated collection of 50+ premium scents. Blending modern
        sensibility with timeless elegance, Smiths' Parfums brings a
        diverse range of fragrances crafted to suit every personality
        and occasion — making quality perfumery accessible to everyone
        in the city.
      </p>
    </div>

  </div>

</div>


    </main>
  );
}