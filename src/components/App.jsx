import Buttons from './Buttons';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        background: '#37B7C3',
      }}
    >
      <Buttons />
    </div>
  );
};
