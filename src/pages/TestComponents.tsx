/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { Button } from '../components/atoms/Button';
import { Navigation } from '../components/molecules/Navigation';
import { DialogueList } from '../components/molecules/DialogueList';
import { PhraseList } from '../components/molecules/PhraseList';
import './Tab1.css';

const TestComponents: React.FC = () => {
  const cssWrapper = css`
    background-color: #ddd;
  `;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>（開発用）コンポーネント一覧</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div css={cssWrapper}>
          <Button src="/" label="CONTINUE" type="alert" />
          <Navigation current="Categories" />
          <DialogueList />
          <PhraseList />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TestComponents;
