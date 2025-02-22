import ExperienceBlock from '@/components/ExperienceBlock';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Section from '@/components/Section';
import { getTranslation } from '@/i18n';
import { FC } from 'react';

interface HomeProps {
  params: Promise<{
    lang: string;
  }>;
}

const Home: FC<HomeProps> = async ({ params }) => {
  const lang = (await params).lang;
  const { t } = await getTranslation(lang);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '35% 65%', width: '100%' }}>
      <div style={{ width: '100%' }}>Photo</div>

      <div style={{ display: 'flex' }}>
        <LanguageSwitcher lang={lang} />
        <div>
          <h1>{t('name')}</h1>
          <h2>{t('jobTitle')}</h2>
        </div>
        <ul>
          <li>potapowvlad@gmail.com</li>
          <li>phone</li>
          <li>linkedin</li>
          <li>github</li>
        </ul>
      </div>

      <div>
        <Section title={'Summary'}>
          <p>
            Senior Software Engineer with 4+ years of experience in JavaScript, React, and cloud computing. Passionate
            about solution architecture and modern technologies. Proven expertise in leading teams, configuring CI/CD,
            and developing scalable web applications.
          </p>
        </Section>

        <Section title={'Key Skills'}>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>GraphQL</li>
            <li>Nextjs</li>
            <li>AWS</li>
            <li>CI/CD</li>
          </ul>
        </Section>

        <Section title={'Education'}>
          <ExperienceBlock
            title={'Master in Software Engineering'}
            company={'ITMO University'}
            location={'St. Peterburg, Russia'}
            duration={'2019-2021'}
          />

          <ExperienceBlock
            title={'Bachelor'}
            company={'ITMO University'}
            location={'St. Peterburg, Russia'}
            duration={'2015-2019'}
          />
        </Section>

        <Section title={'Languages'}>
          <ul>
            <li>Russian - native</li>
            <li>English - B2</li>
          </ul>
        </Section>
      </div>

      <div>
        <Section title={'Work Experience'}>
          <ExperienceBlock
            title={'Senior Software Engineer'}
            company={'EPAM Systems'}
            location={'Belgrade, Serbia'}
            duration={'Feb 2024 – present'}
          >
            <div>A pack of web apps to ship drugs across medical alboratories</div>
            <div>Key achievements:</div>
            <ul>
              <li>Led a team of frontend developers</li>
              <li>Created and unified CI/CD to deliver all frontend apps to the AWS ECS</li>
              <li>Organised 2 legacy apps rewriting into modern tech stack (React)</li>
              <li>Proposed and finalised an idea for a new web app, it&apos;s still under development</li>
            </ul>
            <div>Tech stack</div>
            <div>React, Redux, Jenkins, AWS, Cypress, TypeScript</div>
          </ExperienceBlock>

          <ExperienceBlock
            title={'Senior Frontend Developer'}
            company={'EPAM Systems'}
            location={'Istanbul, Turkey'}
            duration={'Dec 2022 – Mar 2024'}
          >
            <div>
              Pack of applications to model entities relations across medical laboratories (e.g. Animal -&gt; has -&gt;
              Cage -&gt; has -&gt; Number) using tree graph, find and load all coincidences of this model across real
              databases, register new entities in any connected database.
            </div>
            <div>Key achievements:</div>
            <ul>
              <li>Formed tech stack, organized monorepo with ui kit</li>
              <li>Configured and integrated AAD for all web apps</li>
              <li>Created abstract tree graph builder using Canvas</li>
            </ul>
            <div>Tech stack</div>
            <div>React, Apollo GraphQL, React-flow, Azure AD, TypeScript</div>
          </ExperienceBlock>

          <ExperienceBlock
            title={'Middle Frontend Developer'}
            company={'EPAM Systems'}
            location={'St. Peterburg, Russia'}
            duration={'Nov 2021 – Dec 2022'}
          >
            <div>
              App for searching diseases on CT and XRAY screenings using neural network. Frontend part included DICOM
              images web-viewer that allowed to see and compare original CT or XRAY images (or series of images) with
              the same images but includes AI findings. This viewer has many functionality, such as layout generation,
              placing images / images series to the particular layout window, synchronization between layout windows,
              images transformation, painting etc.
            </div>
            <div>Key achievements:</div>
            <ul>
              <li>created DICOM web-viewer (see above)</li>
              <li>created abstract solu^on for forms and tables</li>
              <li>significantly improved code reusability during refactoring</li>
            </ul>
            <div>Tech stack</div>
            <div>React, Redux, Cornerstone.js, React Final Form, TypeScript</div>
          </ExperienceBlock>

          <ExperienceBlock
            title={'Junior Frontend Developer'}
            company={'EPAM Systems'}
            location={'St. Peterburg, Russia'}
            duration={'Nov 2020 – Dec 2021'}
          >
            <div>
              Frontend of app for tracking drugs fulfillment and their shipment inside laboratories. This project was a
              copy of legacy Marioneoe + Backbone app
            </div>
            <div>Key achievements:</div>
            <ul>
              <li>actively participated in tech stack forming and creating app architecture</li>
              <li>built the whole app</li>
              <li>covered app with e2e tests</li>
            </ul>
            <div>Tech stack</div>
            <div>React, Redux, Recoil, Cypress, TypeScript</div>
          </ExperienceBlock>

          <ExperienceBlock
            title={'Intern'}
            company={'EPAM Systems'}
            location={'St. Peterburg, Russia'}
            duration={'Jul 2020 – Oct 2020'}
          >
            <div>Application to track people movements inside buildings</div>
            <div>Key achievements:</div>
            <ul>
              <li>extended functionality to track people moves in real time</li>
              <li>unified app architecture to switch between map providers</li>
              <li>integrated OSM provider</li>
            </ul>
            <div>Tech stack</div>
            <div>React, Redux, Google maps API, OSM</div>
          </ExperienceBlock>
        </Section>
      </div>
    </div>
  );
};

export default Home;
