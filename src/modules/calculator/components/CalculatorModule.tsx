import { useCalculator } from '../hooks/useCalculator';
import { InputGrid } from './InputGrid';
import { ResultsPanel } from './ResultsPanel';
import { getCommissionOption } from '../constants/commissions';
import styles from '../styles/calculator.module.css';

export const CalculatorModule = () => {
  const { formData, calculated, updateField, setFulfillmentType, setCategoryKey } =
    useCalculator();

  const selectedCategory = getCommissionOption(formData.categoryKey);

  return (
    <section className={styles.calculatorShell}>
      <div className={styles.grid}>
        <InputGrid
          formData={formData}
          updateField={updateField}
          setFulfillmentType={setFulfillmentType}
          onCategoryChange={setCategoryKey}
          selectedCategoryLabel={selectedCategory.pathLabel}
        />
        <ResultsPanel
          fulfillmentType={formData.fulfillmentType}
          calculated={calculated}
          categoryLabel={selectedCategory.pathLabel}
        />
      </div>
    </section>
  );
};

