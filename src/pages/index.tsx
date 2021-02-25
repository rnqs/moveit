import Head from 'next/head'

import { CountdownProvider } from '../contexts/CountdownContext'

import { Wrapper } from '../styles/pages/Home'
import { Profile } from '../components/Profile'
import { Countdown } from '../components/Countdown'
import { ChallengeBox } from '../components/ChallengeBox'
import { ExperienceBar } from '../components/ExperienceBar'
import { CompletedChallenges } from '../components/CompletedChallenges'

export default function Home() {
  return (
    <>
      <Head>
        <title>Moveit</title>
      </Head>
      <Wrapper>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </Wrapper>
    </>
  )
}
