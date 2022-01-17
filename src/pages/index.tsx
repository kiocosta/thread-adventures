import React from 'react';
import dynamic from 'next/dynamic'

import type { NextPage } from 'next'

import styled from 'styled-components';

import Head from '../infra/components/Head/Head';
const ReactFlow = dynamic(
  () => import('../components/ReactFlow/ReactFlow'),
  { ssr: false }
);

const ReactFlowWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

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
