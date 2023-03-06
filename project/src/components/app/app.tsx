import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  numberOffers: number;
}

function App({numberOffers}: AppScreenProps): JSX.Element {
  return <MainPage numberOffers={numberOffers} />;
}

export default App;
