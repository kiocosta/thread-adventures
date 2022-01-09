import React from 'react';
import type { NextPage } from 'next'

import Head from '../infra/components/Head/Head';
import ReactFlow from '../components/ReactFlow/ReactFlow';

import styled from 'styled-components';

const ReactFlowWrapper = styled.div`
  height: 100vh;
  width: 100%;
`

const Home: NextPage = () => {
  return (
    <>
      <Head title="Home"></Head>
      <ReactFlowWrapper>
        <ReactFlow></ReactFlow>
      </ReactFlowWrapper>
    </>
  )
}

export default Home
