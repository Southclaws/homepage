import React from 'react';

import Web from '../icons/Web';
import Github from '../icons/Github';
import Mail from '../icons/Mail';

const ExperienceItem = ({
  title,
  company,
  location = undefined,
  dates,
  skills = undefined,
  children = undefined,
}) => (
  <dl className="mv2">
    <dt className="black-60 fw6 mv2">
      {title} at {company} ({location ? `${location}, ${dates}` : dates})
    </dt>
    <dt className="pl3">
      <em>{skills && `Skills: ${skills}`}</em>
    </dt>
    <dd className="ma0">{children}</dd>
  </dl>
);

const Experience = () => (
  <>
    <h2>Experience</h2>

    <ExperienceItem
      title="Senior Software Engineer"
      company="Ytterate"
      location="Remote"
      dates="2019-2020"
      skills="TypeScript, React.js, Redux, Traefik, Docker"
    >
      <ul>
        <li>
          I joined to help speed up development of a client's React project that
          was very visualisation-heavy using AirBnB's visx library.
        </li>
        <li>
          This evolved to platform infra (Docker, Traefik) to support future
          clients.
        </li>
      </ul>
    </ExperienceItem>

    <ExperienceItem
      title="Go Engineer"
      company="Utility Warehouse"
      location="London"
      dates="2018-2019"
      skills="Golang, CockroachDB, Kubernetes, Graylog, Kafka, NATS, Docker"
    >
      <ul>
        <li>
          I helped migrate legacy services to a new CQRS event sourcing system
          using microservices and CockroachDB running on Kubernetes.
        </li>
        <li>
          Later, I moved to support a new team building an internal call centre
          tool.
        </li>
      </ul>
    </ExperienceItem>

    <ExperienceItem
      title="Software Engineer"
      company="Spotlight Data"
      location="Nottingham"
      dates="2016-2017"
      skills="Golang, Docker, Kubernetes, Python, spaCy, Pachyderm"
    >
      <ul>
        <li>Started as a Python programmer to build data extraction tools</li>
        <li>
          Moved to building critical infrastructure in 2017 and learnt Golang to
          build a large data analysis pipeline to concurrently analyse millions
          of documents.
        </li>
      </ul>
    </ExperienceItem>
  </>
);

const Personal = () => (
  <>
    <h2>Personal</h2>
    <p>
      Worked on a multiplayer game during college that gained 20k unique users.
      Built a package management tool. Built game server indexing services.
      Maintain an open source tool for managing automated infrastructure.
      Designed various album covers, tour posters, small business logos.
    </p>
    <p>
      My free time is usually filled with photography, videography, travelling
      and music.
    </p>
  </>
);

const Education = () => (
  <>
    <h2>Education</h2>
    <ExperienceItem
      title="Computer Science BSc"
      company="Nottingham Trent"
      dates="2014-2018"
    ></ExperienceItem>
  </>
);

const Link = ({ icon, text }) => (
  <div className="flex items-center">
    <span className="pv1 ph2 flex">{icon}</span>
    <span>{text}</span>
  </div>
);

const Page = () => (
  <>
    <section>
      <aside className="mv4">
        <span className="bg-black white br2 ph1 lh-copy">Note:</span>{' '}
        <a href="javascript:window.print()">Print this page</a> for a
        printer-friendly or PDF version of my curriculum vitae or download a
        pre-made copy from <a href="/Barnaby Keene.pdf">here</a>.
      </aside>

      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="black-80 ma0 mb2">Barnaby Keene</h1>
          <div className="black-60">
            <Link icon={<Web height="1em" />} text="www.southcla.ws" />
            <Link icon={<Github height="1em" />} text="github.com/southclaws" />
            <Link icon={<Mail height="1em" />} text="hello@southcla.ws" />
          </div>
        </div>
        <img className="ma0" width="20%" src="/static/2019-02-flat.jpg" />
      </div>

      <hr />

      <p>
        As a passionate and enthusiastic lover of all things electronic,
        mechanical and hackable; I have always shown deep interest in the way
        things work. I’m a software developer focusing on cloud tech, developer
        tools and the web.
      </p>

      <Experience />
      <Personal />
      <Education />
    </section>

    {/* Styles that override globals but just for @media print. This lets me
        hide the normal site layout stuff and reset all the margins to fit paper
        size better for printing. */}
    <style jsx global>{`
      @page {
        size: A4;
        margin: 0.8in;
      }
      @media print {
        html,
        body,
        #__next,
        main {
          margin: 0;
          padding: 0;
          background-color: white;
        }
        header,
        footer,
        hr,
        aside {
          display: none;
        }
      }
    `}</style>

    {/* Style for the content, scoped only to the page component itself. All
        the rest of the styles are done via Tachyons because it's easier. */}
    <style jsx>{`
      section {
        font-family: inter;
      }
      h1 {
        text-decoration: underline;
        text-decoration-color: rgba(0, 0, 0, 0.8);
        text-decoration-thickness: 0.125em;
        text-underline-offset: 2px;
      }
      h2 {
        color: rgba(0, 0, 0, 0.8);
        margin: 0.5em 0 0.5em 0;
        text-decoration: underline;
        text-decoration-color: rgba(0, 0, 0, 0.8);
        text-decoration-thickness: 0.1em;
        text-underline-offset: 0.1em;
      }
      p {
        line-height: 1.2;
      }
      img {
        border-radius: 0.5em;
      }
      ul {
        list-style: circle;
        padding-left: 2em;
      }
    `}</style>
  </>
);

export default Page;
