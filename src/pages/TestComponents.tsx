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
import { CategoryIcon } from '../components/atoms/CategoryIcon';
import { PlayButton } from '../components/atoms/PlayButton';
import { QuizPhrase } from '../components/atoms/QuizPhrase';
import { RecordTitle } from '../components/atoms/RecordTitle';
import { TipsMessage } from '../components/atoms/TipsMessage';
import { Navigation } from '../components/molecules/Navigation';
import { DialogueList } from '../components/molecules/DialogueList';
import { DialogueTitle } from '../components/molecules/DialogueTitle';
import { DialogueTextArea } from '../components/molecules/DialogueTextArea';
import { PhraseList } from '../components/molecules/PhraseList';
import { ChoiseList } from '../components/molecules/ChoiseList';
import { RecordArea } from '../components/molecules/RecordArea';
import { CategoryListTitle } from '../components/molecules/CategoryListTitle';
import { ChoiseConfirmLayer } from '../components/molecules/ChoiseConfirmLayer';
import { NotificationModalInner } from '../components/molecules/NotificationModalInner';
import { HeaderNavigation } from '../components/molecules/HeaderNavigation';
import { ButtleIllust } from '../components/molecules/ButtleIllust';
import { IntonationResult } from '../components/molecules/IntonationResult';
import { WeeklyRecord } from '../components/molecules/WeeklyRecord';
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
          <HeaderNavigation
            type="close"
            src="/"
            background="green"
            title="TITLE"
            arrowWhite={false}
          />
          <Button src="/" label="CONTINUE" type="alert" />
          <PlayButton type="play" />
          <CategoryIcon
            categoryTitle="Category"
            isOpen={true}
            full={10}
            done={'09'}
            innerImg="http://placehold.jp/150x150.png"
          />
          <CategoryIcon
            categoryTitle="Category"
            isOpen={false}
            full={10}
            done={'09'}
            innerImg="http://placehold.jp/150x150.png"
          />
          <Navigation current="Categories" />
          <DialogueList />
          <DialogueTitle
            textEn="its hard to dieits hard to dieits hard to dieits hard to dieits h"
            textJa="タイトルテキストタイトルテキスト。タイトルてきすと"
            textYomikana="yomikana yomikana yomikana yomi kana"
          />
          <PhraseList />
          <DialogueTextArea>
            {/* 自由入力？ */}
            <section>
              <h3>Explanation</h3>
              <p>
                as das afia nkdmwedca dasidsamd adasalksmda mdahfi dasdafasbrje
                assadadsaf fasf awada asdasszx. as das afia nkdmwedca dasidsamd
                adasalksmda mdahfi dasdafasbrje. assadadsaf fasf awada asdasszx.
              </p>
            </section>
            <section>
              <h3>Grammer</h3>
              <dl>
                <div>
                  <dt>テキスト</dt>
                  <dd>
                    <p>
                      as das afia nkdmwedca dasidsamd adasalksmda mdahfi
                      dasdafasbrje assadadsaf fasf awada
                    </p>
                  </dd>
                </div>
                <div>
                  <dt>テキストテキスト</dt>
                  <dd>
                    <p>
                      asidsamd adasalksmda mdahfi dasdafasbrje assadadsaf fasf
                      awada
                    </p>
                  </dd>
                </div>
              </dl>
            </section>
            <section>
              <h3>Words</h3>
              <p>
                as das afia nkdmwedca dasidsamd adasalksmda mdahfi dasdafasbrje
                assadadsaf fasf awada asdasszx. as das afia nkdmwedca dasidsamd
                adasalksmda mdahfi dasdafasbrje. assadadsaf fasf awada asdasszx.
              </p>
            </section>
          </DialogueTextArea>
          <ButtleIllust isCorrect={false} isAchivement={false} />
          <ButtleIllust isCorrect={true} isAchivement={false} />
          <ChoiseList />
          <Button
            src={null}
            label="MODAL OPEN"
            type="success"
            id="example-modal-1"
            tag="button"
          />
          <Modal trigger="example-modal-1" haveCloseButton={true} width="90vw">
            <NotificationModalInner />
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
          <IntonationResult level={1} levelText="Begginer" point={30} />
          <WeeklyRecord
            currentNumber={753}
            goalOfWeek={100}
            totalTime={{ hour: 15, min: 30 }}
            totalPhrases={4500}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TestComponents;
