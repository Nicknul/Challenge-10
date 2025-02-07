import { CSSProperties } from 'react';

interface Styles {
  [key: string]: CSSProperties;
}

export const styles: Styles = {
  root: {
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    left: '0px',
    top: '0px',
    background: '#d6c395',
  },
  rootImage: {
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    background: 'url(/root-image.png)',
    backgroundSize: 'cover',
    mixBlendMode: 'multiply' as any,
  },
  card: {
    position: 'absolute',
    width: '1044px',
    height: '487px',
    left: '178px',
    top: '340px',
  },
  cardContainer: {
    boxSizing: 'border-box',
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '0%',
    background: 'linear-gradient(90deg, rgba(180, 165, 122, 0.3) 0%, rgba(214, 195, 149, 0.3) 100%)',
    boxShadow: '1px 4px 15.6px -5px #574c31',
    borderRadius: '31px',
  },
  cardTitle: {
    position: 'absolute',
    left: '13.79%',
    right: '45.4%',
    top: '21.15%',
    bottom: '63.04%',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '64px',
    lineHeight: '77px',
    textAlign: 'justify',
    color: '#23201a',
  },
  cardText: {
    position: 'absolute',
    left: '19.83%',
    right: '2.97%',
    top: '38.6%',
    bottom: '4.52%',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '15px',
    textAlign: 'justify',
    color: '#23201a',
  },
  cardLine: {
    position: 'absolute',
    left: '54.98%',
    right: '2.97%',
    top: '24.23%',
    bottom: '75.36%',
    background: 'linear-gradient(90deg, rgba(210, 143, 67, 0.5) 0%, rgba(80, 47, 10, 0.5) 100%)',
  },
};
