import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import TestComponents from './pages/TestComponents';
import { Navigation } from './components/molecules/Navigation';
/** @jsxImportSource @emotion/react */

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { ThemeProvider, Global, css } from '@emotion/react';
setupIonicReact();
// TODO：グローバルなcss入れたい
import './index.css';

//仮で入れてる
export const theme = {
  color: {
    primary0: '#12B886',
    primary1: '#099268',
    primary2: '#E6FCF5',
    primary3: '#AE3EC9',
    primary4: '#EBF3FF',
    primary5: '#7CA4E3',
    primary6: '#BAD6FF',
    primary7: '#0041B7',
    primary8: '#ECF3FE',
    secondary0: '#E03131',
    secondary1: '#F59F00',
    secondary2: '#FDDCD3',
    secondary3: '#FFFBFA',
    secondary4: '#FFF3F0',
    secondary5: '#FCFAF5',
    secondary6: '#CC7F6E',
    tertiary0: '#EF8949',
    tertiary1: '#FFECD3',
    tertiary2: '#D87B69',
    text0: '#333333',
    text1: '#343A40',
    text2: '#979C9E',
    text3: '#666666',
    text4: '#FFFFFF',
    bg0: '#E6FCF5',
    bg1: '#DCECE7',
    bg2: '#FFC9C9',
  },
  size: {
    maxWidth: '1248px',
  },
  mediaQuery: {
    sp: '@media (max-width: 767px)',
    pc: '@media (min-width: 768px)',
    ipad: '@media only screen and(min-device-width: 768px) and(max-device-width: 1024px) and(-webkit-min-device-pixel-ratio: 1)',
  },
};
const resetCssStyle = css``;
const App: React.FC = () => (
  <IonApp>
    <ThemeProvider theme={theme}>
      <Global styles={resetCssStyle} />
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1">
              <Tab1 />
            </Route>
            <Route exact path="/tab2">
              <Tab2 />
            </Route>
            <Route path="/tab3">
              <Tab3 />
            </Route>
            <Route path="/testcomponents">
              <TestComponents />
            </Route>
            <Route exact path="/">
              <Redirect to="/tab1" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon icon={triangle} />
              <IonLabel>Tab 1</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon icon={ellipse} />
              <IonLabel>Tab 2</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon icon={square} />
              <IonLabel>Tab 3</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab4" href="/testcomponents">
              <IonIcon icon={square} />
              <IonLabel>Components</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </ThemeProvider>
  </IonApp>
);

export default App;
