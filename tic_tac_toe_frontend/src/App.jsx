import React from 'react';

// PUBLIC_INTERFACE
export default function App() {
  /**
   * This is the landing page placeholder for the Tic Tac Toe app.
   * It renders a centered 3x3 board container and controls,
   * following the Ocean Professional theme and modern minimalist styling.
   */
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Tic Tac Toe</h1>
        <p className="app-subtitle">Ocean Professional</p>
      </header>

      <main className="content">
        <section className="panel">
          <div className="controls">
            <button className="btn btn-primary" type="button" aria-label="Start New Game">
              New Game
            </button>
            <button className="btn btn-secondary" type="button" aria-label="Reset Board">
              Reset
            </button>
          </div>

          <div className="board" role="grid" aria-label="Tic Tac Toe Board">
            {Array.from({ length: 9 }).map((_, i) => (
              <button
                key={i}
                className="cell"
                role="gridcell"
                aria-label={`Cell ${i + 1}`}
                disabled
              >
                {/* Placeholder for marks */}
              </button>
            ))}
          </div>

          <div className="status" role="status" aria-live="polite">
            Two players. Take turns. X begins.
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <small>© {new Date().getFullYear()} Tic Tac Toe</small>
      </footer>
    </div>
  );
}
