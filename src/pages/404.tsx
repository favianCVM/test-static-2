import React from "react"
import { Title } from "../components/fragments/Title"
import { Text } from "../components/fragments/Text"

const Status404 = React.memo(() => {
  return<div className="text-center">
    <Title>404</Title>
    <Text>Lo sentimos, esta página no existe</Text>
  </div>
})

export  {
  Status404
}