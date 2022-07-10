import React from 'react';

import { Card as SCard } from './Card';

interface CardProps {
   children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
   return (
      <SCard>
         {children}
      </SCard>
   );
};
 
export default Card;
