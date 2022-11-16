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
import { PlayButton } from '../components/atoms/PlayButton';
import { QuizPhrase } from '../components/atoms/QuizPhrase';
import { RecordTitle } from '../components/atoms/RecordTitle';
import { TipsMessage } from '../components/atoms/TipsMessage';
import { Navigation } from '../components/molecules/Navigation';
import { DialogueList } from '../components/molecules/DialogueList';
import { PhraseList } from '../components/molecules/PhraseList';
import { ChoiseList } from '../components/molecules/ChoiseList';
import { RecordArea } from '../components/molecules/RecordArea';
import { CategoryListTitle } from '../components/molecules/CategoryListTitle';
import { ChoiseConfirmLayer } from '../components/molecules/ChoiseConfirmLayer';
import { Modal } from '../components/organisms/Modal';
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
          <PlayButton type="play" />
          <Navigation current="Categories" />
          <DialogueList />
          <PhraseList />
          <ChoiseList />
          <Button
            src={null}
            label="MODAL OPEN"
            type="success"
            id="example-modal-1"
            tag="button"
          />
          <Modal trigger="example-modal-1" haveCloseButton={true} width="90vw">
            <p>Modal Inner</p>
            <Button src="/" label="CONTINUE" type="successSub" />
          </Modal>
          <CategoryListTitle
            title="long title is here   title is here title is here"
            full={9}
            done={3}
            thumb="http://placehold.jp/150x150.png"
          />
          <QuizPhrase text="出題テキスト出題テキスト出題テキスト。出題テキスト出題テキスト出題テキスト出題テキスト出題テキスト。" />
          <ChoiseConfirmLayer
            correctText="This is a pen."
            type="miss"
            next="/"
          />
          <TipsMessage text="Tap the meaning and defeat the enemy" />
          <RecordTitle text="録音テーマテキスト録音テーマテキスト録音テーマテキスト録音テーマテキスト" />
          <RecordArea />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TestComponents;
