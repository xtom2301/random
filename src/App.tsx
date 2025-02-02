function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="rotate-animation">
        <img src="sprite.png" alt="Sprite" className="w-40 h-40" />
      </div>

      <div className="rotate-animation-reverse">
        <img src="fuzetea.png" alt="Fuzetea" className="w-40 h-40" />
      </div>
    </div>
  );
}

export default App;
