import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.div`
  margin-bottom: 40px;
`

function Nav({ activeIndex = 0 }: { activeIndex?: number }) {
  return (
    <StyledNav/>
  )
}

export default Nav
