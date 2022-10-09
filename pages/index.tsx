import type { GetStaticProps } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import { type } from "os";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import WorkExperience from "../components/WorkExperience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import { Experience, PageInfo, Skill, Social } from "../typings";
import { fetchPageInfo } from "../Utils/fetchPageInfo";
import { fetchExperiences } from "../Utils/getExperience";
import { fetchSkills } from "../Utils/fetchSkills";
import { fetchSocials } from "../Utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  socials: Social[];
};

//https://portfolio-nextjs-sanity.sanity.studio/

function Home({ pageInfo, experiences, skills, socials }: Props) {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y scroll-smooth snap-mandatory overflow-y-scroll 
    overflow-x-hidden z-0 p-1 scrollbar scrollbar-track-grey-400/20 scrollbar-thumb-red-600/10"
    >
      <Head>
        <title>Arsh&apos;s portfolio</title>
      </Head>

      <Header socials={socials} resume={pageInfo?.fileUrl} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* projects */}

      {/* contact me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      socials,
    },

    revalidate: 100,
  };
};
