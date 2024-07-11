import React from 'react';
import { styles } from '../styles/styles';
import CardContainer from './cardContainer';
import CardTitle from './cardTitle';
import CardText from './cardText';
import CardLine from './cardLine';

interface CardProps {
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ title, text }) => {
  return (
    <div style={styles.card}>
      <CardContainer>
        <CardTitle text={title} />
        <CardText text={text} />
        <CardLine />
      </CardContainer>
    </div>
  );
};

export default Card;
