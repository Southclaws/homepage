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
  <section>
    <h2>Experience</h2>

    <ExperienceItem
      title="Senior Engineer -> Senior Product Engineer"
      company="Odin"
      location="London"
      dates="Nov 2021 - Present"
      skills="Full stack development, critical infrastructure, devops processes, hiring, leadership, user research and product work"
    >
      <ul>
        <li>
          As the first senior engineering hire, I built out the platform from
          scratch, ready to scale for the next decade. This involved Golang and
          Next.js for the application itself, as well as Terraform, Fly.io,
          Vercel, AWS, Cloudflare, Google Cloud and many more tools to get us
          from zero to one with a high quality tested codebase.
        </li>
        <li>
          Over the course of the last year, I worked closely with the founders
          to build out a world class team which will take the company from one
          to infinity.
        </li>
        <li>
          Transitioned to a product focused role where I sit between
          engineering, design and the future moonshots on the community & social
          side of the business.
        </li>
      </ul>
    </ExperienceItem>

    <ExperienceItem
      title="Senior Software Engineer"
      company="Metomic"
      location="London/Remote"
      dates="Apr 2021 - Nov 2021"
      skills="TypeScript, React.js, AWS, Terraform, GitHub CI/CD"
    >
      <ul>
        <li>
          As one of the first members of the engineering team, I helped put in
          place practices for code quality, documentation and continuous
          integration.
        </li>
      </ul>
    </ExperienceItem>

    <ExperienceItem
      title="Software Engineer"
      company="Ytterate"
      location="Remote"
      dates="Nov 2019 - Aug 2020"
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
      dates="Jun 2018 - Nov 2019"
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
      title="Software Engineer (Uni Placement)"
      company="Spotlight Data"
      location="Nottingham"
      dates="2016-2017"
      skills="Golang, Docker, Kubernetes, Python, spaCy, Pachyderm"
    >
      <ul>
        <li>
          University placement as Python programmer to build data extraction
          tools
        </li>
        <li>
          Moved to building critical infrastructure and learnt Golang to build a
          large data analysis pipeline to concurrently analyse millions of
          documents.
        </li>
      </ul>
    </ExperienceItem>
  </section>
);

const Personal = () => (
  <section>
    <h2>Personal</h2>
    <p>
      A few side projects I've worked on are: Storyden: a forum software for the
      modern age built with Go and React. Pico: a git-driven task runner used
      for managing containers using infrastructure-as-code. Wisplight: a
      privacy-friendly browser history personal search engine. I've also
      co-founded (and failed) a couple of startups.
    </p>
    <p>
      Outside of engineering work I've worked as a freelance brand designer for
      indie businesses and startups, as well as videographer for live events. My
      free time is usually filled with photography, videography, travelling and
      music.
    </p>
  </section>
);

const Education = () => (
  <section>
    <h2>Education</h2>
    <ExperienceItem
      title="Computer Science BSc"
      company="Nottingham Trent"
      dates="2014-2018"
    ></ExperienceItem>
  </section>
);

const Link = ({ icon, text }) => (
  <div className="flex items-center">
    <span className="pv1 ph2 flex">{icon}</span>
    <span>{text}</span>
  </div>
);

const Page = () => (
  <>
    <article>
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
    </article>

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
        section {
          break-inside: avoid;
          break-after: auto;
          position: relative;
        }
      }
    `}</style>

    {/* Style for the content, scoped only to the page component itself. All
        the rest of the styles are done via Tachyons because it's easier. */}
    <style jsx>{`
      article {
        font-family: inter;
        position: relative;
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
