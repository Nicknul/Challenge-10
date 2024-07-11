import React from 'react';
import { styles } from '../styles/styles';

const CardContainer: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <div style={styles.cardContainer}>{children}</div>;
};

export default CardContainer;
