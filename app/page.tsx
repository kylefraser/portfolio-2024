'use client';

import Image from 'next/image';
import { AudioPlayer, Button, List, Process, ThemeToggle } from '@/components';
import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Gallery = dynamic(() => import('../components/Gallery/Gallery'), {
  ssr: false,
});

export default function Home() {
  const [show, setShow] = useState('');
  const [offset, setOffset] = useState('');

  let wrapperRef = useRef<any>(null);

  useEffect(() => {
    setOffset(wrapperRef.current?.offsetLeft);

    function handleResize() {
      setOffset(wrapperRef.current?.offsetLeft);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [offset]);

  return (
    <>
      <div style={{ position: 'relative', width: '100%', height: '10px' }}>
        <Image alt="Camo" src={'/images/topbar.png'} fill={true} />
      </div>
      <main className="container mx-auto flex flex-col max-w-5xl">
        <div
          id="wrapper"
          ref={wrapperRef}
          className="flex flex-col max-w-4xl py-12 md:py-24 px-5 md:px-10"
        >
          <div className="flex justify-between items-center w-full">
            <svg
              width="54"
              height="54"
              viewBox="0 0 495 495"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="247.5"
                cy="247.5"
                r="237.5"
                strokeWidth="20"
                className="stroke-[#444] dark:stroke-white"
              />
              <path
                d="M237.24 126.36L131.4 259.92L237.24 396H188.64L86.4 259.92L188.64 126.36H237.24ZM381.693 162.72H275.493V241.92H337.413V277.92H275.493V360V396H236.253V126.36H381.693V162.72Z"
                className="fill-[#444] dark:fill-white"
              />
            </svg>
            <div className="flex gap-[1rem] items-center">
              <AudioPlayer />
              <ThemeToggle />
            </div>
          </div>
          <h1 className="font-outfit font-bold tracking-wide text-2xl mt-8">
            Kyle Fraser
          </h1>
          <h2 className="font-outfit font-bold tracking-wide text-lg text-[#444444] dark:text-white">
            Design • Develop • Deploy
          </h2>
          <hr className="border-[#90ce70] my-4" />
          <Heading3>Mission</Heading3>
          <Text>
            To leverage and continually expand my skillset in an effective and
            efficient manner as a member of a proficient team with strong
            culture towards providing a well thought out and innovative product.
          </Text>
          <Heading3>About</Heading3>
          <Text>
            Raised in Maine, being surrounded by nature has given me a strong
            respect for the beauty of the outdoors. I try to bring these
            parallels into everyday life.
          </Text>
          <Text>
            My first experience with computers was at 4 years old. I would help
            my mother load 8" floppy disks with DOS onto the elementary school
            computers, where she volunteered. The first PC I built was at 12
            years old with my friends father's help, an IBM employee, who was
            able to provide us with a LAN gaming paradise. It was a 900mhz
            powerhouse, before the days of "gigahertz", affectionately named GOD
            — the Guardian of Data. A self-taught coder, I quickly gained an
            affection for creating and hacking during the days of 28.8kbps dial
            up.{' '}
            <span role="img" aria-label="Pirate Flag">
              🏴‍☠️
            </span>
          </Text>
          <Text>
            An ardent believer in the balance of mind, body, and spirit, along
            with a positive mental attitude, I do my best to emanate the common
            good. Constantly evolving with each new introduction, I value the
            insights gained from all people.
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
                Maintain and enhance web properties with development and design.
                Implement personalization, progressive profiling, platform
                migrations, search, and more. Substantial cross-team
                collaboration with product, documentation, marketing, and
                design. Strong self-sufficiency in a remote-first global working
                environment.
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
                Proficiency implementing user interfaces (and UI elements), with
                a keen eye on the larger experience. Collaborate seamlessly with
                the Bonfire team towards rapid iteration and integration given
                creative direction.
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
              <div className="max-w-4xl md:pr-[92px]">
                <Image
                  alt="Outland"
                  src={'images/outland-logo.svg'}
                  width="251"
                  height="41"
                  className="mb-3"
                />
                <Text style={{ color: '#fff' }}>
                  Outland is an ambitious project to change the way people learn
                  and offer more ways to get outdoors. Professionals and
                  experienced mentors can pass their knowledge on to others,
                  whether hands-on or through content creation.
                </Text>
                <Text style={{ color: '#ffffff' }}>
                  This project is built using Vite for the Typescript frontend
                  and a Node Express Apollo GraphQL backend which connects to
                  MongoDB Atlas. It has integrations with Mapbox, ID.me, Stripe
                  and Atlas Search. It's deployed with Vercel for the frontend
                  and uses DigitalOcean services for backend hosting, API
                  endpoints, and CDN storage.
                </Text>
                <Text style={{ color: '#ffffff' }}>
                  This project also includes a marketing site that was built
                  with NextJS and a blog that uses Hygraph for it's CMS.
                </Text>
                <Text style={{ color: '#ffffff', marginBottom: 48 }}>
                  Satisfy your wild.
                </Text>
              </div>
              <div style={{ display: 'flex' }}>
                {/* <Image
                      key={i}
                      style={{
                        display: 'block',
                        margin: 0,
                        width: '100%',
                      }}
                    /> */}
              </div>
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
              <div className="max-w-4xl pr-20">
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
                  coast of Maine, I wanted to create something that was easy to
                  digest and had the pertinent information I was looking for at
                  a glance.
                </Text>
                <Text style={{ color: '#ffffff', marginBottom: 48 }}>
                  The logo features one of my favorite birds, the Cormorant.
                </Text>
              </div>
              <div style={{ display: 'flex' }}>
                {/* <Image
                      key={i}
                      style={{
                        display: 'block',
                        margin: 0,
                        width: '100%',
                      }}
                    /> */}
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
              <div className="max-w-4xl pr-20">
                <Image
                  alt="Breakwater"
                  src={'images/breakwater-logo.svg'}
                  width="187"
                  height="48"
                  className="mb-3"
                />
                <Text style={{ color: '#ffffff' }}>
                  The idea behind this project was to incorporate tidal data
                  with the "regular" forecast. As someone who grew up on the
                  coast of Maine, I wanted to create something that was easy to
                  digest and had the pertinent information I was looking for at
                  a glance.
                </Text>
                <Text style={{ color: '#ffffff', marginBottom: 48 }}>
                  The logo features one of my favorite birds, the Cormorant.
                </Text>
              </div>
              <div style={{ display: 'flex' }}>
                {/* <Image
                      key={i}
                      style={{
                        display: 'block',
                        margin: 0,
                        width: '100%',
                      }}
                    /> */}
              </div>
            </Process>
            <List.Item>
              Crowdsurfer
              <List.Text>Get in the pit and try to love some one.</List.Text>
              <Button
                onClick={() =>
                  show !== 'crowdsurfer' ? setShow('crowdsurfer') : setShow('')
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
              <div className="max-w-4xl pr-20">
                <Image
                  alt="Crowdsurfer"
                  src={'images/crowdsurfer-logo.svg'}
                  width="320"
                  height="52"
                  className="mb-3"
                />
                <Text style={{ color: '#ffffff' }}>
                  The idea behind this project was to incorporate tidal data
                  with the "regular" forecast. As someone who grew up on the
                  coast of Maine, I wanted to create something that was easy to
                  digest and had the pertinent information I was looking for at
                  a glance.
                </Text>
                <Text style={{ color: '#ffffff', marginBottom: 48 }}>
                  The logo features one of my favorite birds, the Cormorant.
                </Text>
              </div>
              <div style={{ display: 'flex' }}>
                {/* <Image
                      key={i}
                      style={{
                        display: 'block',
                        margin: 0,
                        width: '100%',
                      }}
                    /> */}
              </div>
            </Process>
            <List.Item>
              Ordnance
              <List.Text>
                A comprehensive ledger for the MIL/LEO professional. Keep track
                of firearm data, items on hand, and build specifications. Record
                and chart your progression through a number of different
                training scenarios. Add your team and compete to see who has the
                best times, accuracy, and precision.
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
              <div className="max-w-4xl pr-20">
                <Image
                  alt="Ordnance"
                  src={'images/ordnance-logo.svg'}
                  width="316"
                  height="58"
                  className="mb-3"
                />
                <Text style={{ color: '#ffffff' }}>
                  This project started after speaking with some of my closest
                  friends, who are military & LEO veterans. Together, we believe
                  we can make an impact in enhancing the standards of today's
                  professionals. The premise of this application is to
                  incorporate data keeping, training analytics, and perhaps most
                  importantly — safety education.
                </Text>
                <Text style={{ color: '#ffffff', marginBottom: 48 }}>
                  This project uses Expo and Typescript, built on a Express Node
                  backend.
                </Text>
              </div>
              <div style={{ display: 'flex' }}>
                {/* <Image
                      key={i}
                      style={{
                        display: 'block',
                        margin: 0,
                        width: '100%',
                      }}
                    /> */}
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
              <div className="max-w-4xl pr-20">
                <Image
                  alt="Denxity"
                  src={'images/denxity-logo.svg'}
                  width="227"
                  height="39"
                  className="mb-3"
                />
                <Text style={{ color: '#ffffff' }}>
                  This was a fun project incorporating different marketing
                  techniques into a NextJS site. For a simple blogging platform,
                  Sanity is used as the CMS.
                </Text>
              </div>
              <div style={{ display: 'flex' }}>
                {/* <Image
                      key={i}
                      style={{
                        display: 'block',
                        margin: 0,
                        width: '100%',
                      }}
                    /> */}
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
                marginBottom: show === 'kilo' ? 32 : 0,
                backgroundColor: '#181C13',
                left: `calc(-${offset + 52}px)`,
                position: 'relative',
              }}
              duration={250}
            >
              <div className="max-w-4xl pr-20">
                <Image
                  alt="Kilo Concepts"
                  src={'images/kilo-logo.svg'}
                  width="125"
                  height="41"
                  className="mb-3"
                />
                <Text style={{ color: '#ffffff' }}>
                  This was a fun project incorporating different marketing
                  techniques into a NextJS site. For a simple blogging platform,
                  Sanity is used as the CMS.
                </Text>
              </div>
              <div style={{ display: 'flex' }}>
                {/* <Image
                      key={i}
                      style={{
                        display: 'block',
                        margin: 0,
                        width: '100%',
                      }}
                    /> */}
              </div>
            </Process>
          </List>
          <Heading3>Education</Heading3>
          <List>
            <List.Item>
              Full Stack Open - University of Helsinki MOOC, Online 2020
              <List.Text>
                Full Stack Open is a deep dive into modern web development. The
                course is offered by the University of Helsinki's Department of
                Computer Science through their Massive Open Online Course (MOOC)
                program. The main focus is on building single page applications
                with ReactJS that use REST APIs built with Node.js.
              </List.Text>
            </List.Item>
            <List.Item>
              Web Design & Development - Startup Institute, Boston 2017
              <List.Text>
                UI/UX design, user research, rapid ideation, data visualization,
                front-end development, responsive design, information
                architecture, product management, wireframing and rapid
                prototyping, typography.
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
        </div>
      </main>
    </>
  );
}

const Heading3 = ({ children, ...props }: any) => {
  return (
    <h3 className="font-bold mt-6 mb-3 font-outfit" {...props}>
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
