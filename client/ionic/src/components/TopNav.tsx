import React from 'react';
import { IonHeader, IonItem, IonImg, IonToolbar } from '@ionic/react';

const TopNav: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonItem href="/menu" >
          <IonImg
            className="w-80 h3 center pb3"
            src="assets/identity/who-logo-rgb.png"
          />
        </IonItem >
      </IonToolbar>
    </IonHeader>
  );
};

export default TopNav;
