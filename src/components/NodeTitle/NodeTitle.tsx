import styled from "styled-components";
import { FaEllipsisV } from 'react-icons/fa';

type TNodeTitleData = {
  title: string;
}

const NodeTitleWrapper = styled.div`
  padding: 10px 20px;
  border-bottom:  1px solid #DCE1E5;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.p`
  color: #4697CC;
  font-size: 16px;
  font-family: 'Poppins';
  font-weight: 500;
`;


export default function NodeTitle(props: TNodeTitleData) {
  return (
    <NodeTitleWrapper>
      <Title>{ props.title }</Title>
      <FaEllipsisV color={'#697A8C'}></FaEllipsisV>
    </NodeTitleWrapper>
  );
}