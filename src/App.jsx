import Header from './components/Header';
import './App.css';

function App() {
  return (
    <>
      <Header />
      
      <main style={{ 
        padding: '40px', 
        textAlign: 'center', 
        fontFamily: 'sans-serif',
        color: '#ffffff',
        backgroundColor: '#0d001a',
        minHeight: 'calc(100vh - 80px)' 
      }}>
      </main>
    </>
  );
}

export default App;

