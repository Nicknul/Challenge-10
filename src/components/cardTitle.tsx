import React from 'react';
import { styles } from '../styles/styles';

interface CardTitleProps {
  text: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ text }) => {
  return <div style={styles.cardTitle}>{text}</div>;
};

export default CardTitle;
