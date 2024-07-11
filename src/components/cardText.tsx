import React from 'react';
import { styles } from '../styles/styles';

interface CardTextProps {
  text: string;
}

const CardText: React.FC<CardTextProps> = ({ text }) => {
  return <div style={styles.cardText}>{text}</div>;
};

export default CardText;
