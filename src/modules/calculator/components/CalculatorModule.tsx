import { useCalculator } from '../hooks/useCalculator';
import { InputGrid } from './InputGrid';
import { ResultsPanel } from './ResultsPanel';
import { getCommissionOption } from '../constants/commissions';
import styles from '../styles/calculator.module.css';

export const CalculatorModule = () => {
  const { formData, calculated, updateField, setCategoryKey } = useCalculator();

  const selectedCategory = getCommissionOption(formData.categoryKey);

  return (
    <section className={styles.calculatorShell}>
      <div className={styles.grid}>
        <InputGrid
          formData={formData}
          updateField={updateField}
          onCategoryChange={setCategoryKey}
          selectedCategoryLabel={selectedCategory.pathLabel}
        />
        <ResultsPanel calculated={calculated} categoryLabel={selectedCategory.pathLabel} />
      </div>
    </section>
  );
};

