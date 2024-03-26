import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "@/components/ui/aceternityUI/tracing-beam";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/aceternityUI/3d-card";
import { SparklesCore } from "@/components/ui/aceternityUI/sparkles";
import { TextGenerateEffect } from "@/components/ui/aceternityUI/text-generate-effect";
import { Meteors } from "@/components/ui/aceternityUI/meteors";
import { BackgroundGradient } from "@/components/ui/aceternityUI/background-gradient";
import { DownloadCV } from "@/components/ui/customUI/download-cv";

import contents from "@/constants/content";

const words = `My name is Awan, an Informatics Engineering Student at Institut Teknologi Sepuluh Nopember. I’m pursuing my career on UI/UX Design and implement it with Front-End Development and some of Back-End Development
`;

const openWork = true;

export default function Home() {
  return (
    <TracingBeam>
      <section
        id="Home"
        className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
      >
        <div className="relative z-20 flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <h1 className="inline-block text-center text-2xl font-bold md:text-4xl lg:text-6xl">
              <span className="animate-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Welcome to Awan Portfolio
              </span>
            </h1>

            <p className="text-md inline-block bg-gradient-to-r from-blue-600/80 to-purple-400/80 bg-clip-text text-center font-semibold text-transparent md:text-xl">
              UI/UX Designer and Frontend Developer
            </p>
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <Link
              href="https://github.com/yaboidimsum"
              target="_blank"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-700/30 bg-slate-700/30 transition duration-300 ease-in-out hover:border-purple-400 hover:bg-[#c084fc] md:h-14 md:w-14 md:rounded-xl "
            >
              <svg
                className="w-6 fill-current text-slate-400 transition duration-300 hover:cursor-pointer hover:text-white md:w-10"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 30 30"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/in/dimas-prihady-setyawan-47a66821a/"
              target="_blank"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-700/30 bg-slate-700/30 transition duration-300 ease-in-out hover:border-purple-400 hover:bg-[#c084fc] md:h-14 md:w-14 md:rounded-xl "
            >
              <svg
                className="w-10 fill-current text-slate-400 transition duration-300 hover:cursor-pointer hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 30 30"
              >
                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/dimasprihady/"
              target="_blank"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-700/30 bg-slate-700/30 transition duration-300 ease-in-out hover:border-purple-400 hover:bg-[#c084fc] md:h-14 md:w-14 md:rounded-xl "
            >
              <svg
                className="w-10 fill-current text-slate-400 transition duration-300 hover:cursor-pointer hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 24 24"
              >
                <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
              </svg>
            </Link>
            <DownloadCV />
          </div>
        </div>
        <div className="absolute inset-0 h-screen w-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.2}
            particleDensity={50}
            className="h-full w-full"
            particleColor="#E9DCC9"
          />
        </div>
      </section>
      <section className="relative flex min-h-screen w-full items-center ">
        <div className="relative  flex h-screen w-full items-center justify-center bg-zinc-950 bg-grid-small-white/[0.2] dark:bg-black dark:bg-grid-small-white/[0.2] lg:px-8">
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)] dark:bg-black md:[mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>{" "}
          <div className="flex flex-col items-center justify-center space-x-8 space-y-8 lg:flex-row lg:space-y-0">
            <TextGenerateEffect
              words={words}
              className="max-w-xl px-8 md:px-0 lg:max-w-full"
            />
            <div className=" relative flex items-center justify-center ">
              <div className="absolute inset-0 h-full w-full scale-[0.50] transform rounded-full bg-red-500 bg-gradient-to-r from-[#60a5fa] to-purple-600 blur-3xl" />
              <CardContainer className="inter-var mr-[1.35rem] overflow-hidden md:mr-0 ">
                <CardBody className="group/card relative h-[30rem]  w-[22rem] rounded-xl border border-black/[0.1] border-gray-800 bg-gray-900 p-6 sm:w-[30rem]">
                  <Meteors number={20} />
                  <CardItem
                    translateZ="50"
                    className="text-md font-bold text-white md:text-xl"
                  >
                    Informatics Engineering ITS
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="mt-2 max-w-sm text-justify text-xs text-neutral-300 md:text-sm"
                  >
                    This is where i study my bachelor degree in Informatics
                    Engineering student. Now i am in 6th semester, currently
                    learning Machine Learning and Deep Learning.
                  </CardItem>
                  <CardItem translateZ="100" className="mt-4 w-full">
                    <Image
                      src="/photo/IFl-1.jpg"
                      height="1000"
                      width="1000"
                      className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="mt-6 flex items-center">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="https://www.its.ac.id/informatika/id/beranda/"
                      target="__blank"
                      className="text-md flex w-full items-center justify-center rounded-xl border border-slate-700/30 bg-slate-700/30 px-4 py-2 text-white transition duration-300 ease-in-out hover:border-purple-400 hover:bg-purple-600 hover:text-white"
                    >
                      Visit Informatics Engineering ITS →
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </div>
      </section>
      <section
        id="Tools"
        className="relative mt-40 flex  min-h-screen w-full items-center justify-center lg:mt-0"
      >
        <div className="flex flex-col space-y-8">
          <h2 className="animate-gradient-text-subtitle bg-clip-text pl-16 text-3xl font-semibold text-transparent md:text-5xl">
            What can I do?
          </h2>
          <div className="grid grid-cols-1 gap-6 px-8 md:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:px-4">
            {contents.skillContent.map((content, index) => (
              <div
                key={index}
                className=" ml-8 transform transition-transform hover:scale-105 md:ml-0"
              >
                <BackgroundGradient className="rounded-[22px] border-black/[0.1] border-gray-800 bg-gray-900 p-4 sm:p-10 md:h-64 ">
                  <h2 className="text-md font-semibold text-white md:text-lg lg:text-xl">
                    {content.title}
                  </h2>
                  <div className="flex flex-col gap-4">
                    <div className="mt-4 flex flex-wrap items-center justify-start">
                      {content.links.map((link, index) => (
                        <div
                          key={index}
                          className="mb-2 flex items-center justify-start space-x-1 sm:mb-0 sm:mr-4"
                        >
                          <Image
                            src={link.image}
                            height={30}
                            width={30}
                            alt={link.name}
                          />
                          <span className="text-xs font-semibold text-white md:text-sm">
                            {link.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="md:text-md text-sm text-zinc-300">
                      {content.description}
                    </p>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="Project"
        className="mt-40 flex  min-h-screen w-full items-center justify-center lg:mt-20"
      >
        <div className="flex flex-col space-y-8">
          <h2 className="animate-gradient-text-subtitle bg-clip-text pl-8 text-3xl font-semibold text-transparent md:text-5xl xl:pl-16">
            Works that I made!
          </h2>
          <div className="grid grid-cols-1 gap-16 px-12 md:grid-cols-1 lg:grid-cols-2 xl:px-4 2xl:grid-cols-3">
            {contents.portfolioContent.map((content, index) => (
              <div key={index} className="relative ml-1 md:ml-0 flex w-full max-w-lg">
                <div className="absolute inset-0 h-full w-full scale-[0.75] transform rounded-full bg-red-500 bg-gradient-to-r from-[#60a5fa] to-purple-600 blur-3xl" />
                <BackgroundGradient>
                  <CardContainer className="inter-var flex">
                    <CardBody className="group/card relative h-[31rem]  w-auto rounded-3xl border border-black/[0.1] border-gray-800 bg-gray-900 p-6 sm:w-[30rem]">
                      <div className="flex flex-row justify-between">
                        <CardItem
                          translateZ="50"
                          className="text-md font-bold text-white md:text-lg lg:text-xl"
                        >
                          {content.title}
                        </CardItem>
                        <CardItem translateZ="60" className="flex flex-row">
                          {content.tech.map((nestedContent, index) => (
                            <CardItem
                              key={index}
                              translateZ="60"
                              className="text-xl font-bold text-white"
                            >
                              <Image
                                src={nestedContent.image}
                                height={30}
                                width={30}
                                alt={nestedContent.name}
                              />
                            </CardItem>
                          ))}
                        </CardItem>
                      </div>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="md:text-md mt-2 max-w-sm text-justify text-xs text-neutral-300"
                      >
                        {content.technique}
                      </CardItem>
                      <CardItem translateZ="100" className="mt-4 w-full">
                        <Image
                          src={content.src}
                          height="1000"
                          width="1000"
                          className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                          alt="thumbnail"
                        />
                      </CardItem>
                      <div className="mt-6 flex flex-col items-center justify-between space-y-4">
                        <CardItem
                          translateZ={20}
                          as={Link}
                          href={content.firstLink}
                          target="__blank"
                          className="flex w-full items-center justify-center rounded-xl border border-slate-700/30 bg-slate-700/30 px-4 py-2 text-xs md:text-sm text-white transition duration-300 ease-in-out hover:border-purple-400 hover:bg-purple-600 hover:text-white"
                        >
                          {content.firstButtonText}
                        </CardItem>
                        <CardItem
                          translateZ={20}
                          as={Link}
                          href={content.secondLink}
                          target="__blank"
                          className="flex w-full items-center justify-center rounded-xl border border-slate-700/30 bg-slate-700/30 py-2 text-xs md:text-sm  text-white transition duration-300 ease-in-out hover:border-purple-400 hover:bg-purple-600 hover:text-white"
                        >
                          {content.secondButtonText}
                        </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
  id="Experience"
  className="relative mt-40 lg:mt-80 flex min-h-screen w-full items-center justify-center"
>
  <div className="w-full">
    <h2 className="animate-gradient-text-subtitle pl-8 lg:pl-16 mb-6 bg-clip-text text-3xl font-semibold text-transparent md:text-5xl">
      My Journey SO FAR!
    </h2>
    <div className="flex flex-col w-full space-y-8 lg:space-y-16 px-16 md:px-8 xl:px-4 ">
      {contents.experienceContent.map((content, index) => (
        <div key={index} className="flex flex-col gap-4 ">
          <h2 className="font-semibold text-zinc-700 pl-8 lg:pl-16">
            Me as a{" "}
            <span className="animate-gradient-text-subtitle bg-clip-text text-xl md:text-2xl lg:text-3xl font-semibold text-transparent">
              {content.title}
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.content.map((nestedContent, index) => (
              <div
                key={index}
                className="flex w-[17rem] md:w-full h-full transform transition-transform hover:scale-105"
              >
                <BackgroundGradient
                  key={index}
                  className="h-full rounded-[22px] border-black/[0.1] border-gray-800 bg-gray-900 p-4 sm:p-6 lg:p-10"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row justify-between">
                      <h2 className="text-md font-semibold text-white md:text-xl lg:text-2xl">
                        {nestedContent.title}
                      </h2>
                      <div className="grid grid-cols-4 lg:grid-cols-2">
                        {nestedContent.techstack.map((tech, index) => (
                          <Image
                            key={index}
                            src={tech.image}
                            alt={tech.name}
                            width={30}
                            height={12}
                            className="p-1 w-[2.75rem] h-[1.75rem] lg:w-8 lg:h-8 object-contain"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <div className="flex flex-wrap gap-2">
                        {nestedContent.category.map((category, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-center rounded-lg border-slate-700/30 bg-slate-700/30 px-2 py-1"
                          >
                            <h2 className="text-[0.8rem] lg:text-sm font-semibold text-zinc-200">
                              {category}
                            </h2>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <h2 className="animate-gradient-text-1 text-sm lg:text-md bg-clip-text font-semibold text-transparent">
                            {nestedContent.client}
                          </h2>
                          <span className="font-bold text-white"> | </span>
                          <h2 className="text-sm lg:text-md font-semibold text-white">
                            {nestedContent.location}
                          </h2>
                        </div>
                        <h2 className="text-xs lg:text-sm font-medium text-zinc-400">
                          {nestedContent.year}
                        </h2>
                      </div>
                      <div className="pl-4 lg:pl-6">
                        {nestedContent.description.map(
                          (description, index) => (
                            <ul
                              key={index}
                              className="font-medium text-slate-300 text-xs md:text-sm lg:text-md"
                            >
                              <li className="list-disc leading-6">
                                {description}
                              </li>
                            </ul>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
      </section>

      <section
        id="Certificate"
        className="mt-20 flex  min-h-screen w-full items-center justify-center lg:mt-80"
      >
        <div className="flex flex-col gap-4">
          <h2 className="animate-gradient-text-subtitle bg-clip-text pl-8 text-3xl font-semibold text-transparent md:text-5xl xl:pl-16">
            Certificates that I achieved!
          </h2>
          <div className="grid grid-cols-1 gap-16 px-8 md:grid-cols-1 lg:grid-cols-2 xl:px-4 2xl:grid-cols-3">
            {contents.certificateContent.map((content, index) => (
              <div key={index} className="relative flex h-full w-full max-w-lg">
                <BackgroundGradient>
                  <CardContainer className="inter-var flex h-full">
                    <CardBody
                      className={`group/card relative flex flex-col ${
                        content.title.includes("Google")
                          ? "h-full lg:h-[41.5rem]"
                          : "h-full lg:h-[39.5rem]"
                      } w-auto rounded-3xl border border-black/[0.1] border-gray-800 bg-gray-900 p-6 sm:w-[30rem]`}
                    >
                      <CardItem
                        translateZ="50"
                        className="text-md font-bold text-white md:text-lg lg:text-xl"
                      >
                        {content.title}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="md:text-md mt-2 max-w-sm text-justify text-xs text-neutral-300"
                      >
                        {content.technique}
                      </CardItem>
                      <CardItem translateZ="100" className="mt-4 w-full">
                        <Image
                          src={content.src}
                          height="1000"
                          width="1000"
                          className="h-65 w-full rounded-xl object-cover object-top group-hover/card:shadow-xl"
                          alt="thumbnail"
                        />
                      </CardItem>
                      <div className="mt-6 flex flex-col items-center justify-between space-y-4">
                        <CardItem
                          translateZ={20}
                          as={Link}
                          href={content.firstLink}
                          target="__blank"
                          className="flex w-full items-center justify-center rounded-xl border border-slate-700/30 bg-slate-700/30 px-4 py-2 text-xs md:text-sm text-white transition duration-300 ease-in-out hover:border-purple-400 hover:bg-purple-600 hover:text-white"
                        >
                          {content.firstButtonText}
                        </CardItem>
                        <CardItem
                          translateZ={20}
                          as={Link}
                          href={content.secondLink}
                          target="__blank"
                          className="flex w-full items-center text-center justify-center rounded-xl border border-slate-700/30 bg-slate-700/30 py-2 text-xs md:text-sm text-white transition duration-300 ease-in-out hover:border-purple-400 hover:bg-purple-600 hover:text-white"
                        >
                          {content.secondButtonText}
                        </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="Contact"
        className="mb-20 mt-80 flex h-full w-full items-center justify-center"
      >
        <div className="flex w-full flex-col gap-2 md:gap-8 px-8 md:px-12">
          <h2 className="animate-gradient-text-subtitle mb-4 bg-clip-text text-3xl md:text-5xl font-semibold text-transparent">
            Wanna collaborate?{" "}
            {openWork ? (
              <Link
                href={"mailto:dprihadisetiawan@gmail.com"}
                target="_blank"
                className="animate-gradient-text-open mb-4 bg-clip-text text-3xl md:text-5xl font-semibold text-transparent"
              >
                Open For Business, Click to Contact Me!
              </Link>
            ) : (
              <span className="animate-gradient-text-close mb-4 bg-clip-text text-3xl md:text-5xl font-semibold text-transparent">
                Next time, I&#39;m not available for now
              </span>
            )}
          </h2>
          <div className="flex flex-col justify-center space-y-2">
            <div>
              <h2 className="animate-gradient-its mb-4 bg-clip-text text-lg md:text-xl font-semibold text-transparent ">
                Institut Teknologi Sepuluh Nopember
              </h2>
              <p className="max-w-xl text-md md:text-lg text-justify text-zinc-400">
                Teknik Kimia Street - Teknik Informatika Departement Building
                Campus Institut Teknologi Sepuluh Nopember Surabaya Highway ITS,
                Sukolilo, Surabaya 60111, Indonesia Surabaya
              </p>
            </div>
            <h2 className="text-md md:text-lg text-zinc-600">Copyright ©️ 2024 Awan Website</h2>
          </div>
        </div>
      </section>
    </TracingBeam>
  );
}
