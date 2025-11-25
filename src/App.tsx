import './styles/app.css';
import { CalculatorModule } from './modules/calculator';

const App = () => (
  <div className="app-shell">
    <header className="app-hero">
      <div>
        <p className="eyebrow">Daraz Seller Toolkit</p>
        <h1>Daraz Profit Calculator</h1>
        <p>
          Stress-test both FBM and FBD scenarios with smart presets, instant ROI, and category-specific
          commissions pulled straight from the Daraz sheet.
        </p>
      </div>
    </header>

    <main className="app-main">
      <CalculatorModule />
    </main>
  </div>
);

export default App;

