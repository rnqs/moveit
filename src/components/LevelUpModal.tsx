import { useContext } from 'react'

import { ChallengesContext } from '../contexts/ChallengesContext'

import { Overlay, Wrapper } from '../styles/components/LevelUpModal'

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  return (
    <Overlay>
      <Wrapper>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </Wrapper>
    </Overlay>
  )
}