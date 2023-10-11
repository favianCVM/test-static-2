'use client'
import React from "react";
import { Title } from "../components/fragments/Title";
import { Text } from "../components/fragments/Text";
import { CopyToClipBoardButton } from "../components/fragments/CopyToClipBoardButton";
import { Card } from "../components/fragments/Card";
import { AnchorButton } from "../components/fragments/AnchorButton";
import Logo from "../assets/svg/Logo.svg";
import { ReactSVG } from 'react-svg'
import { useParams } from "react-router-dom";
import {Buffer} from "buffer"

const HomePage = () => {
  const {invitationCode} = useParams();

  const decodedInvitationCode = React.useMemo(() => Buffer.from(invitationCode || "" , 'base64').toString('ascii'),[invitationCode])

  return<div className="flex flex-col mx-auto w-fit">
    <h1 className="self-start mb-[32px]">
      <a href="https://www.zummafinancial.com/es" target="_blank" rel="noreferrer" >
        <ReactSVG src={Logo}  />
      </a>
    </h1>

    <Title className="mb-[16px]">Uno de tus amig@s quiere verte feliz con tus finanzas 😉</Title>

    <Text className="leading-[30px] mb-[16px]">Tu amig@ te quiere regalar <b className="text-tertiary-1 font-semibold">15 días</b> de acceso exclusivo a las <b className="text-tertiary-1 font-semibold">funciones premium.</b></Text>

    <Text className="mb-[16px]">1. Copia el código que tu amigo te regalo ⬇️</Text>

    <Card className="sm:self-center mb-[16px]">
      <b className="mb-[16px] text-text-1 font-semibold">Tu código es:</b>
      <div className="flex items-center gap-2.4">
        <b 
          className="text-tertiary-1 font-bold"
        >
          {decodedInvitationCode}
        </b>
        <CopyToClipBoardButton value={decodedInvitationCode} />
      </div>
    </Card>

    <Text className="mb-[16px]">2. Descarga la app de Zumma ya sea IOS o Android</Text>

    <AnchorButton href="https://apps.apple.com/mx/app/zumma-financial/id1668855235" className="sm:self-center mb-[16px]">Descarga la app en IOS</AnchorButton>

    <AnchorButton href="https://play.google.com/store/apps/details?id=com.zummafinancial" className="sm:self-center mb-[16px]">Descarga la app en Android</AnchorButton>

    <Text className="mb-[16px]">3. Al registrarte pega el código que tu amigo te regalo, el cual copiaste en el paso 1</Text>

    <Text>4. ¡Listo! Disfruta de tus funciones premium y sacale jugo a tus finanzas 🎁</Text>
  </div>
};

export {
  HomePage
}