'use client';

import Image from 'next/image';
import {
  AudioPlayer,
  Button,
  List,
  Logo,
  Process,
  ThemeToggle,
} from '@/components';
import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const Gallery = dynamic(() => import('../components/Gallery/Gallery'), {
  ssr: false,
});

export default function Home() {
  const [show, setShow] = useState('');
  const [offset, setOffset] = useState('');
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  let wrapperRef = useRef<any>(null);

  useEffect(() => {
    setOffset(wrapperRef.current?.offsetLeft);

    function handleResize() {
      setOffset(wrapperRef.current?.offsetLeft);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [offset]);

  const name = 'Kyle Fraser';

  const sentence = {
    hidden: {
      opacity: 1,
    },
    visible: {
      transition: {
        opacity: 1,
        delay: 0.25,
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="relative w-full h-[10px]">
        <motion.div
          initial={{ width: '100%' }}
          animate={{ width: 0 }}
          transition={{ duration: 1, delay: 0 }}
          className={`absolute top-0 right-0 h-[10px] ${
            resolvedTheme != 'light' ? 'bg-[#0f120b]' : 'bg-white'
          } z-10`}
        ></motion.div>
        <Image alt="Camo" src={'/images/topbar.png'} fill={true} priority />
      </div>
      <main className="container mx-auto flex flex-col max-w-5xl">
        <div
          id="wrapper"
          ref={wrapperRef}
          className="flex flex-col w-full max-w-4xl py-12 md:py-24 px-5 md:px-10 mx-auto"
        >
          <div className="flex justify-between items-center w-full relative my-5">
            <Logo mounted={mounted} />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0 }}
              className="flex gap-[1rem] items-center absolute right-0"
            >
              <AudioPlayer />
              <ThemeToggle />
            </motion.div>
          </div>
          <motion.div
            className="font-outfit font-bold tracking-wide text-2xl mt-8"
            initial="hidden"
            animate="visible"
            variants={sentence}
          >
            {name.split('').map((char, index) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </motion.div>
          <h2 className="font-outfit font-bold tracking-wide text-lg text-[#444444] dark:text-white">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: 1 }}
            >
              Design
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              •
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: 1.25 }}
            >
              Develop
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              •
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: 1.5 }}
            >
              Deploy
            </motion.span>
          </h2>
          <motion.hr
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.75 }}
            className="border-[#90ce70] my-4 mx-auto"
          />
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.25 }}
          >
            <Heading3>Mission</Heading3>
            <Text>
              To leverage and continually expand my skillset in an effective and
              efficient manner as a member of a proficient team with strong
              culture towards providing a well thought out and innovative
              product.
            </Text>
            <Heading3>About</Heading3>
            <Text>
              Raised in Maine, being surrounded by nature has given me a strong
              respect for the beauty of the outdoors. I try to bring these
              parallels into everyday life.
            </Text>
            <Text>
              My first experience with computers was at 4 years old. I would
              help my mother load 8" floppy disks with DOS onto the elementary
              school computers, where she volunteered. The first PC I built was
              at 12 years old with my friends father's help, an IBM employee,
              who was able to provide us with a LAN gaming paradise. It was a
              900mhz powerhouse, before the days of "gigahertz", affectionately
              named GOD — the Guardian of Data. A self-taught coder, I quickly
              gained an affection for creating and hacking during the days of
              28.8kbps dial up.{' '}
              <span role="img" aria-label="Pirate Flag">
                🏴‍☠️
              </span>
            </Text>
            <Text>
              An ardent believer in the balance of mind, body, and spirit, along
              with a positive mental attitude, I do my best to emanate the
              common good. Constantly evolving with each new introduction, I
              value the insights gained from all people.
            </Text>
            <Text>Always Forward.</Text>
            <Heading3>Experience</Heading3>
            <List>
              <List.Item>
                <a
                  href="https://starburst.io"
                  target="_blank"
                  rel="noopener"
                  className="text-[#478527] dark:text-[#90ce70] shadow-[0_1px_0_0_#478527] dark:shadow-[0_1px_0_0_#90ce70] hover:shadow-none dark:hover:shadow-none"
                >
                  Starburst Data
                </a>{' '}
                - Senior Web Developer
                <List.Text>
                  Maintain and enhance web properties with development and
                  design. Implement personalization, progressive profiling,
                  platform migrations, search, and more. Substantial cross-team
                  collaboration with product, documentation, marketing, and
                  design. Strong self-sufficiency in a remote-first global
                  working environment.
                </List.Text>
              </List.Item>
              <List.Item>
                <a
                  href="https://robinpowered.com"
                  target="_blank"
                  rel="noopener"
                  className="text-[#478527] dark:text-[#90ce70] shadow-[0_1px_0_0_#478527] dark:shadow-[0_1px_0_0_#90ce70] hover:shadow-none dark:hover:shadow-none"
                >
                  Robin Powered
                </a>{' '}
                - Frontend Designer
                <List.Text>
                  Planning, development, and management of graphics and user
                  interface design projects. Provide support for products
                  developed for both internal use and for customers.
                </List.Text>
              </List.Item>
              <List.Item>
                <a
                  href="https://hellobonfire.com"
                  target="_blank"
                  rel="noopener"
                  className="text-[#478527] dark:text-[#90ce70] shadow-[0_1px_0_0_#478527] dark:shadow-[0_1px_0_0_#90ce70] hover:shadow-none dark:hover:shadow-none"
                >
                  Bonfire Studios
                </a>{' '}
                - Frontend Web Developer
                <List.Text>
                  Cut up and integrate designs into beautiful responsive code.
                  Proficiency implementing user interfaces (and UI elements),
                  with a keen eye on the larger experience. Collaborate
                  seamlessly with the Bonfire team towards rapid iteration and
                  integration given creative direction.
                </List.Text>
              </List.Item>
            </List>
            <Heading3>Projects</Heading3>
            <List>
              <List.Item>
                Outland
                <List.Text>
                  Users can find guided adventures, training, experiences, land
                  access, and equipment. Business owners, property owners, and
                  content creators can list their services while expanding their
                  reach.
                </List.Text>
                <Button
                  onClick={() =>
                    show !== 'outland' ? setShow('outland') : setShow('')
                  }
                  style={{ marginTop: '1rem' }}
                >
                  {show !== 'outland' ? 'View More' : 'View Less'}
                </Button>
              </List.Item>
              <Process
                offset={offset}
                height={show == 'outland' ? 'auto' : 0}
                style={{
                  marginBottom: show == 'outland' ? 32 : 0,
                  backgroundColor: '#788B51',
                  left: `calc(-${offset + 52}px)`,
                  position: 'relative',
                }}
                duration={250}
              >
                <div className="max-w-4xl">
                  <Image
                    alt="Outland"
                    src={'images/outland-logo.svg'}
                    width="251"
                    height="41"
                    className="mb-3"
                  />
                  <Text style={{ color: '#fff' }}>
                    Outland is an ambitious project first conceived in late 2020
                    after realizing the need for a more efficient platform for
                    business owners and individuals to expand their networks.
                    Professionals and experienced mentors can pass on their
                    knowledge to others, whether hands-on or through content
                    creation. The idea is to change the way people learn by
                    offering new opportunities to get outdoors and build real
                    skills.
                  </Text>
                  <Text style={{ color: '#ffffff', marginBottom: 48 }}>
                    Outland is founded upon three guiding principles -
                    Accomplishment, Confidence, and Exposure - simply known as
                    ACE. Accomplishment through challenge and progression,
                    Confidence through a greater understanding and knowledge,
                    and Exposure through the opportunity to participate. Outland
                    is designed to instill these through its approach to
                    courses, guides, and access.
                  </Text>
                </div>
                <div className="grid grid-cols-2">
                  <Image
                    alt="Outland"
                    src="/images/outland/outland-1.webp"
                    width="1600"
                    height="1200"
                  />
                  <Image
                    alt="Outland"
                    src="/images/outland/outland-2.webp"
                    width="1600"
                    height="1200"
                  />
                </div>
                <div className="max-w-4xl mt-[3rem]">
                  <Text style={{ color: '#fff' }}>
                    This project is built using Vite for the React Typescript
                    frontend and a Node Express backend utilizing Apollo GraphQL
                    endpoints that connect to a MongoDB database. Hooks and
                    context are used for state management, along with
                    localStorage and Broadcast events to keep tabs in sync. JWT
                    and form validation is utilized for better security
                    measures. Integrations include Mapbox for custom maps and
                    geocoding, ID.me for verified authentication, Stripe Connect
                    for payments and transactions, and Mongo's Atlas Search
                    aggregation for fast indexed search. DigitalOcean Droplets
                    and Spaces are used for server and CDN storage, along with
                    Domains for various DNS routing. Resend is used for
                    beautiful transactional, engagement, and marketing emails.
                    Finally, the frontend is deployed using Vercel with Github
                    Actions to orchestrate deployment.
                  </Text>
                  <Text style={{ color: '#fff' }}>
                    Other tools used for this project include NextJS for a
                    marketing website, Nextra for a docs-based help center, and
                    Hygraph for a blogging platform. All projects are themed for
                    both dark and light modes.
                  </Text>
                  <Text style={{ color: '#ffffff' }}>
                    This has been a passion project of mine that I've been
                    chipping away at over time. All design, development,
                    deployment, and business related tasks are done by me.
                  </Text>
                  <Text style={{ color: '#ffffff' }}>Satisfy your wild.</Text>
                </div>
                {/* <video muted controls>
                  <source src="videos/outland.mp4" />
                </video> */}
              </Process>
              <List.Item>
                Coastal
                <List.Text>
                  Forecast for those who live by the ocean. Coastal incorporates
                  tidal data, along with the common features you'd expect from a
                  weather app, in a clean, concise, and beautiful way.
                </List.Text>
                <Button
                  onClick={() =>
                    show !== 'coastal' ? setShow('coastal') : setShow('')
                  }
                  style={{ marginTop: '1rem' }}
                >
                  {show !== 'coastal' ? 'View More' : 'View Less'}
                </Button>
              </List.Item>
              <Process
                offset={offset}
                height={show === 'coastal' ? 'auto' : 0}
                style={{
                  marginBottom: show === 'coastal' ? 32 : 0,
                  backgroundColor: '#0C579C',
                  left: `calc(-${offset + 52}px)`,
                  position: 'relative',
                }}
                duration={250}
              >
                <div className="max-w-4xl">
                  <Image
                    alt="Coastal"
                    src={'images/coastal-logo.svg'}
                    width="216"
                    height="131"
                    className="mb-3"
                  />
                  <Text style={{ color: '#ffffff' }}>
                    The idea behind this project was to incorporate tidal data
                    with the "regular" forecast. As someone who grew up on the
                    coast of Maine, I wanted to create something that was easy
                    to digest and had the pertinent information I was looking
                    for at a glance.
                  </Text>
                  <Text style={{ color: '#ffffff', marginBottom: 48 }}>
                    The logo features one of my favorite birds, the Cormorant.
                  </Text>
                </div>
                <div className="grid grid-cols-3">
                  <Image
                    alt="Coastal"
                    src="/images/coastal/coastal-iphone-1.webp"
                    width="649"
                    height="981"
                  />
                  <Image
                    alt="Coastal"
                    src="/images/coastal/coastal-iphone-2.webp"
                    width="649"
                    height="981"
                  />
                  <Image
                    alt="Coastal"
                    src="/images/coastal/coastal-iphone-3.webp"
                    width="649"
                    height="981"
                  />
                </div>
              </Process>
              <List.Item>
                Breakwater Development Group
                <List.Text>
                  Modern development for the new wave of entrepreneur. Helping
                  brands surface to the top by using performant, low-cost
                  solutions on the cutting edge to put them leagues above the
                  rest.
                </List.Text>
                <Button
                  onClick={() =>
                    show !== 'breakwater' ? setShow('breakwater') : setShow('')
                  }
                  style={{ marginTop: '1rem' }}
                >
                  {show !== 'breakwater' ? 'View More' : 'View Less'}
                </Button>
              </List.Item>
              <Process
                offset={offset}
                height={show === 'breakwater' ? 'auto' : 0}
                style={{
                  marginBottom: show === 'breakwater' ? 32 : 0,
                  backgroundColor: '#101D2F',
                  left: `calc(-${offset + 52}px)`,
                  position: 'relative',
                }}
                duration={250}
              >
                <div className="max-w-4xl">
                  <Image
                    alt="Breakwater"
                    src={'images/breakwater-logo.svg'}
                    width="187"
                    height="48"
                    className="mb-3"
                  />
                  <Text style={{ color: '#ffffff' }}>
                    Breakwater Development Group was set up to provide clients
                    with expertise in all things web. From design to development
                    to better SEO, Breakwater is able to utilize years of
                    experience to formulate better strategy for modern websites.
                  </Text>
                  <Text style={{ color: '#ffffff', marginBottom: 48 }}>
                    Breakwater is a term for 'a barrier that protects a harbor
                    or shore from the full impact of waves'.
                  </Text>
                </div>
                <div className="grid grid-cols-2">
                  <Image
                    alt="Breakwater"
                    src="/images/breakwater/breakwater-1.webp"
                    width="1600"
                    height="1200"
                  />
                  <Image
                    alt="Breakwater"
                    src="/images/breakwater/breakwater-2.webp"
                    width="1600"
                    height="1200"
                  />
                </div>
                {/* <video muted controls>
                  <source src="videos/breakwater.mp4" />
                </video> */}
              </Process>
              <List.Item>
                Crowdsurfer
                <List.Text>
                  Connect with more people who share a passion for music. Find
                  new concerts and shows to attend, send music to new fans, and
                  find locals in your area who play instruments.
                </List.Text>
                <Button
                  onClick={() =>
                    show !== 'crowdsurfer'
                      ? setShow('crowdsurfer')
                      : setShow('')
                  }
                  style={{ marginTop: '1rem' }}
                >
                  {show !== 'crowdsurfer' ? 'View More' : 'View Less'}
                </Button>
              </List.Item>
              <Process
                offset={offset}
                height={show === 'crowdsurfer' ? 'auto' : 0}
                style={{
                  marginBottom: show === 'crowdsurfer' ? 32 : 0,
                  backgroundColor: '#171717',
                  left: `calc(-${offset + 52}px)`,
                  position: 'relative',
                }}
                duration={250}
              >
                <div className="max-w-4xl">
                  <Image
                    alt="Crowdsurfer"
                    src={'images/crowdsurfer-logo.svg'}
                    width="320"
                    height="52"
                    className="mb-3"
                  />
                  <Text style={{ color: '#ffffff' }}>
                    Crowdsurfer is a concept to connect music lovers with
                    eachother. It takes inspiration from dating apps, of all
                    places, to meet people with the intention of sharing songs,
                    going to concerts together, or finding someone new to play
                    music together.
                  </Text>
                  <Text style={{ color: '#ffffff' }}>
                    A secondary objective for this app is to find new concerts
                    in your area. It allows a user to search for new shows and
                    provides a curated list of recommendations.
                  </Text>
                  <Text style={{ color: '#ffffff', marginBottom: 48 }}>
                    This project utilizes different API's for music sharing and
                    is built with Expo.
                  </Text>
                </div>
                <div className="grid grid-cols-3">
                  <Image
                    alt="Crowdsurfer"
                    src="/images/crowdsurfer/crowdsurfer-iphone-1.webp"
                    width="649"
                    height="981"
                  />
                  <Image
                    alt="Crowdsurfer"
                    src="/images/crowdsurfer/crowdsurfer-iphone-2.webp"
                    width="649"
                    height="981"
                  />
                  <Image
                    alt="Crowdsurfer"
                    src="/images/crowdsurfer/crowdsurfer-iphone-3.webp"
                    width="649"
                    height="981"
                  />
                </div>
              </Process>
              <List.Item>
                Ordnance
                <List.Text>
                  A comprehensive ledger for the MIL/LEO professional. Keep
                  track of firearm data, items on hand, and build
                  specifications. Record and chart your progression through a
                  number of different training scenarios. Add your team and
                  compete to see who has the best times, accuracy, and
                  precision.
                </List.Text>
                <Button
                  onClick={() =>
                    show !== 'ordnance' ? setShow('ordnance') : setShow('')
                  }
                  style={{ marginTop: '1rem' }}
                >
                  {show !== 'ordnance' ? 'View More' : 'View Less'}
                </Button>
              </List.Item>
              <Process
                offset={offset}
                height={show === 'ordnance' ? 'auto' : 0}
                style={{
                  marginBottom: show === 'ordnance' ? 32 : 0,
                  backgroundColor: '#3c442e',
                  left: `calc(-${offset + 52}px)`,
                  position: 'relative',
                }}
                duration={250}
              >
                <div className="max-w-4xl">
                  <Image
                    alt="Ordnance"
                    src={'images/ordnance-logo.svg'}
                    width="316"
                    height="58"
                    className="mb-3"
                  />
                  <Text style={{ color: '#ffffff' }}>
                    This project started after speaking with some of my closest
                    friends, who are military & LEO veterans. Together, we
                    believe we can make an impact in enhancing the standards of
                    today's professionals. The premise of this application is to
                    incorporate data keeping, training analytics, and perhaps
                    most importantly — safety education.
                  </Text>
                  <Text style={{ color: '#ffffff', marginBottom: 48 }}>
                    This project uses Expo and Typescript, built on a Node
                    Express backend.
                  </Text>
                </div>
                <div className="grid grid-cols-3">
                  <Image
                    alt="Ordnance"
                    src="/images/ordnance/ordnance-iphone-1.webp"
                    width="649"
                    height="981"
                  />
                  <Image
                    alt="Ordnance"
                    src="/images/ordnance/ordnance-iphone-2.webp"
                    width="649"
                    height="981"
                  />
                  <Image
                    alt="Ordnance"
                    src="/images/ordnance/ordnance-iphone-3.webp"
                    width="649"
                    height="981"
                  />
                </div>
              </Process>
              <List.Item>
                Denxity
                <List.Text>
                  A better marketing site experience for users, developers, and
                  content creators.
                </List.Text>
                <Button
                  onClick={() =>
                    show !== 'denxity' ? setShow('denxity') : setShow('')
                  }
                  style={{ marginTop: '1rem' }}
                >
                  {show !== 'denxity' ? 'View More' : 'View Less'}
                </Button>
              </List.Item>
              <Process
                offset={offset}
                height={show === 'denxity' ? 'auto' : 0}
                style={{
                  marginBottom: show === 'denxity' ? 32 : 0,
                  backgroundColor: '#13455e',
                  left: `calc(-${offset + 52}px)`,
                  position: 'relative',
                }}
                duration={250}
              >
                <div className="max-w-4xl">
                  <Image
                    alt="Denxity"
                    src={'images/denxity-logo.svg'}
                    width="227"
                    height="39"
                    className="mb-3"
                  />
                  <Text style={{ color: '#ffffff' }}>
                    This was a fun project incorporating different marketing
                    techniques into a NextJS site. For a simple blogging
                    platform, Sanity is used as the CMS.
                  </Text>
                  <Text style={{ color: '#ffffff', marginBottom: 48 }}>
                    Authentication is implemented for secure and safe user
                    creation into a project. Middleware handles cookie logic for
                    better GDPR. Localization is used for internationalization
                    and translation into various languages.
                  </Text>
                </div>
                <div className="grid grid-cols-2">
                  <Image
                    alt="Denxity"
                    src="/images/denxity/denxity-dark.webp"
                    width="1600"
                    height="1200"
                  />
                  <Image
                    alt="Denxity"
                    src="/images/denxity/denxity-light.webp"
                    width="1600"
                    height="1200"
                  />
                </div>
              </Process>
              <List.Item>
                Kilo Concepts
                <List.Text>
                  Maximizing operator capabilities by utilizing advanced
                  techniques to create solutions that are stronger, lighter, and
                  more adaptable to meet the requirements of the harshest
                  environments.
                </List.Text>
                <Button
                  onClick={() =>
                    show !== 'kilo' ? setShow('kilo') : setShow('')
                  }
                  style={{ marginTop: '1rem' }}
                >
                  {show !== 'kilo' ? 'View More' : 'View Less'}
                </Button>
              </List.Item>
              <Process
                offset={offset}
                height={show === 'kilo' ? 'auto' : 0}
                style={{
                  marginTop: show === 'kilo' ? 32 : 0,
                  marginBottom: show === 'kilo' ? 32 : 0,
                  backgroundColor: '#181C13',
                  left: `calc(-${offset + 52}px)`,
                  position: 'relative',
                }}
                duration={250}
              >
                <div className="max-w-4xl">
                  <Image
                    alt="Kilo Concepts"
                    src={'images/kilo-logo.svg'}
                    width="125"
                    height="41"
                    className="mb-3"
                  />
                  <Text style={{ color: '#ffffff' }}>
                    Kilo Concepts is a home for one of my newest hobbies, CAD
                    design. I use a Bambu Lab X1 printer for high quality
                    prototypes and Fusion 360 to design complex parts, both in
                    2D and 3D.
                  </Text>
                  <Text style={{ color: '#ffffff' }}>
                    The underlying concept that guides my design is to innovate
                    using additive manufacturing processes to create better end
                    user experiences. This is achieved by continuously testing
                    and evaluating prototypes, refining designs, and
                    incorporating the latest standards.
                  </Text>
                  <Text style={{ color: '#ffffff', marginBottom: 48 }}>
                    If a new product does not offer lighter weight, higher
                    reliability, and better durability, does it really warrant
                    replacing the current system.
                  </Text>
                </div>
                <div className="grid grid-cols-2">
                  <Image
                    alt="Kilo"
                    src="/images/kilo/kilo-concepts-1.webp"
                    width="1600"
                    height="1200"
                  />
                  <Image
                    alt="Kilo"
                    src="/images/kilo/kilo-concepts-2.webp"
                    width="1600"
                    height="1200"
                  />
                </div>
              </Process>
            </List>
            <Heading3>Education</Heading3>
            <List>
              <List.Item>
                Full Stack Open - University of Helsinki MOOC, Online 2020
                <List.Text>
                  Full Stack Open is a deep dive into modern web development.
                  The course is offered by the University of Helsinki's
                  Department of Computer Science through their Massive Open
                  Online Course (MOOC) program. The main focus is on building
                  single page applications with ReactJS that use REST APIs built
                  with Node.js.
                </List.Text>
              </List.Item>
              <List.Item>
                Web Design & Development - Startup Institute, Boston 2017
                <List.Text>
                  UI/UX design, user research, rapid ideation, data
                  visualization, front-end development, responsive design,
                  information architecture, product management, wireframing and
                  rapid prototyping, typography.
                </List.Text>
              </List.Item>
              <List.Item>
                Bachelor of Science in Business Administration - Finance &
                Management, University of Maine 2010
              </List.Item>
            </List>
            <Heading3>Recreation</Heading3>
            <List>
              <List.Item>Outdoor everything enthusiast</List.Item>
              <List.Item>Fish more, worry less</List.Item>
              <List.Item>Salt water paddler</List.Item>
              <List.Item>Mountains and plains hiker</List.Item>
              <List.Item>Toyota Tacoma offroad driver</List.Item>
              <List.Item>Rock 'n Roll guitar player</List.Item>
            </List>
            <Heading3>Gallery</Heading3>
            <Gallery />
            <Heading3>Contact</Heading3>
            <Text>
              I can be reached by e-mail at
              <a
                href="mailto:FraserKC@gmail.com"
                className="text-[#478527] dark:text-[#90ce70] shadow-[0_1px_0_0_#478527] dark:shadow-[0_1px_0_0_#90ce70] hover:shadow-none dark:hover:shadow-none pl-[0.5ch]"
              >
                FraserKC@gmail.com
              </a>
            </Text>
            <footer>
              <Text>
                Made in
                <span
                  role="img"
                  aria-label="America"
                  style={{
                    padding: '0 0.5ch',
                  }}
                >
                  🇺🇸
                </span>
                — © {new Date().getFullYear()}, Kyle Fraser
              </Text>
            </footer>
          </motion.div>
        </div>
      </main>
    </>
  );
}

const Heading3 = ({ children, ...props }: any) => {
  return (
    <h3 className="font-bold mt-8 mb-3 font-outfit" {...props}>
      {children}
    </h3>
  );
};

const Text = ({ children, ...props }: any) => {
  return (
    <p className={'leading-6 mb-3 font-ptserif'} {...props}>
      {children}
    </p>
  );
};
